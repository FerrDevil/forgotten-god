from flask import Blueprint, jsonify, request
from models import db, User, Cart, Product, Sales, Media, ProductTag, Tag
from flask_jwt_extended import jwt_required, get_jwt_identity
import json

store = Blueprint("store", __name__, )


@store.route('/getRecommendedProducts')
def get_recommended_products():
    products = [
        {
            'id': product.id,
            'title': product.title,
            'image': product.logo,
        }
        for product in Product.query.all()
    ]

    response = jsonify(products)
    return response


@store.route('/getProductById/<int:id>', methods=['GET'])
def get_product_by_id(id):
    products = [
        {
            'id': product.id,
            'title': product.title,
            'logo': product.logo,
            'developer_id': product.developer_id,
            "developer": User.query.filter_by(id=product.developer_id).first().username,
            'publisher_id': product.publisher_id,
            'publisher': User.query.filter_by(id=product.publisher_id).first().username,
            'publishDate': product.publish_date,
            'platforms': ['Windows'],
            'media': [
                {
                    'type': media.type,
                    'src': media.src
                } for media in Media.query.filter_by(product_id=id).all()
            ],
            'tags': [
                {
                    "id": product_tag.tag_id,
                    "name": Tag.query.filter_by(id=product_tag.tag_id).first().name
                } for product_tag in ProductTag.query.filter_by(product_id=id).all()
            ],
            'synopsis': product.synopsis,
            'price': product.price
        }
        for product in Product.query.all()
    ]
    result = [product for product in products if product['id'] == id]
    if len(result) == 0:
        return jsonify({"error": "Product was not found"}), 400
    response = jsonify(result[0])
    response.headers.add('Content-Type', 'application/json')
    return response


@store.route('/searchProductsByTitle/<string:title>', methods=['GET', "POST"])
def search_products_by_title(title):
    filtered_products = [
        product for product in Product.query.all()
        if title.lower() in product.title.lower()
    ]

    FIXED_RESULT_NUMBER = 4
    products = [
        {
            "id":  product.id,
            "title": product.title,
            "price": product.price,
            "logo": product.logo
        }
        for productIndex, product in enumerate(filtered_products)
        if productIndex < FIXED_RESULT_NUMBER
    ]
    return jsonify(products), 200


@store.route('/getProducts', methods=['GET', "POST"])
def get_products():
    products = [
        {
            'id': product.id,
            'title': product.title,
            'logo': product.logo,

            'tags': [
                {
                    "id": product_tag.tag_id,
                    "name": Tag.query.filter_by(id=product_tag.tag_id).first().name
                } for product_tag in ProductTag.query.filter_by(product_id=product.id).all()
            ],
            'price': product.price
        }
        for product in Product.query.all()
    ]
    form_data = json.loads(request.data, strict=False)

    if not form_data:
        response = jsonify(products)
        response.headers.add('Content-Type', 'application/json')
        return response

    products = [
        product for product in products
        if form_data["title"].lower() in product["title"].lower()
        and (form_data["price"] == 2200 or form_data["price"] >= int(product["price"]))
        and (len(form_data["includedTags"]) == 0
             or set([tag.get("id") for tag in product["tags"]])
             .union(set(form_data["includedTags"])) == set([tag.get("id") for tag in product["tags"]]))
        and (len(form_data["excludedTags"]) == 0 or set([tag.get("id") for tag in product["tags"]])
             .isdisjoint(set(form_data["excludedTags"])))
    ]

    response = jsonify(products)
    response.headers.add('Content-Type', 'application/json')
    return response


@store.route('/addToCart', methods=["POST"])
@jwt_required()
def add_to_cart():
    form_data = json.loads(request.data, strict=False)
    product_id = form_data.get("productId", None)
    if not product_id:
        return jsonify({"error": "Product identifier not found"}), 400

    username = get_jwt_identity()
    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify({"error": "User is not logged in"}), 401
    user_id = user.id
    if Cart.query.filter_by(user_id=user_id, product_id=product_id).first():
        return jsonify({"error": "Cart item already exists"}), 400
    cart_item = Cart(product_id=product_id, user_id=user_id)
    db.session.add(cart_item)
    db.session.commit()
    return jsonify({"message": "Cart item added"})


@store.route('/removeCartItem/<int:product_id>', methods=["DELETE"])
@jwt_required()
def remove_cart_item(product_id):

    if not product_id or product_id <= 0:
        return jsonify({"error": "Product id parameter is not valid"}), 401

    username = get_jwt_identity()
    user = User.query.filter_by(username=username).first()

    if not user:
        return jsonify({"error": "User is not logged in"}), 401

    cart_item = Cart.query.filter_by(user_id=user.id, product_id=product_id).first()

    if not cart_item:
        return jsonify({"error": "Cart item does not exist"}), 400

    db.session.delete(cart_item)
    db.session.commit()
    return jsonify({"message": "Cart item removed"})


@store.route('/getCart', methods=["GET"])
@jwt_required()
def get_cart():
    username = get_jwt_identity()
    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify({"error": "User is not logged in"}), 401
    user_id = user.id

    cart = Cart.query.filter_by(user_id=user_id).all()

    cart_products = [
        Product.query.filter_by(id=cart_item.product_id).first() for cart_item in cart
    ]

    cart_json = [
        {
            "productId": cart_item.id,
            "logo": cart_item.logo,
            "title": cart_item.title,
            "price": cart_item.price,

        }
        for cart_item in cart_products
    ]

    return jsonify(cart_json), 200


@store.route('/buyProductsFromCart', methods=["POST"])
@jwt_required()
def buy_products_from_cart():
    username = get_jwt_identity()
    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify({"error": "User is not logged in"}), 401

    form_data = json.loads(request.data, strict=False)
    payment_method = form_data.get("paymentMethod", None)
    if not payment_method:
        return jsonify({"error": "Payment method is not found"}), 400

    cart = Cart.query.filter_by(user_id=user.id).all()

    sales = [
        Sales(
            user_id=cart_item.user_id,
            product_id=cart_item.product_id,
            payment_price=Product.query.filter_by(id=cart_item.product_id).first().price,
            payment_method=payment_method
        ) for cart_item in cart
    ]
    for sale in sales:
        db.session.add(sale)
    for cart_item in cart:
        db.session.delete(cart_item)
    db.session.commit()

    return jsonify({"payment": "Successfull"}), 200


@store.route('/getTags', methods=['GET'])
def get_tags():
    sales_json = [
        {
            "id": tag.id,
            "name": tag.name
        }
        for tag in Tag.query.all()
    ]
    return jsonify(sales_json), 200


@store.route('/getLibrary', methods=['GET'])
@jwt_required()
def get_library():
    username = get_jwt_identity()
    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify({"error": "User is not logged in"}), 401
    sales_json = [
        {
            "id": sale.product_id,
            "title": Product.query.filter_by(id=sale.product_id).first().title,
            "logo": Product.query.filter_by(id=sale.product_id).first().logo
        }
        for sale in Sales.query.filter_by(user_id=user.id).all()
    ]
    return jsonify(sales_json), 200

