import json
import os

from flask import Blueprint, jsonify, request
from flask_jwt_extended import get_jwt_identity, jwt_required
from werkzeug.utils import secure_filename

from models import db, User, Product, Sales, Tag, Media, ProductTag

admin = Blueprint("admin", __name__)


def check_admin_role(func):
    def wrap(*args, **kwargs):
        user = User.query.filter_by(username=get_jwt_identity()).first()
        if not user:
            return jsonify({"error": "No such user found"}), 403
        if user.role != "admin":
            return jsonify({"error": "Given user is not an admin"}), 403
        response = func(*args, **kwargs)
        return response
    wrap.__name__ = func.__name__
    return wrap


@admin.route('/promoteToAdmin/<string:username>', methods=['POST'])
@jwt_required()
@check_admin_role
def promote_to_admin(username):
    user = User.query.filter_by(username=username).first()

    if not user:
        return jsonify({"error": "No such user found"}), 403

    user.role = "admin"
    db.session.commit()
    return jsonify({"id": user.id}), 200


@admin.route('/getUsersInfo', methods=['GET'])
@jwt_required()
@check_admin_role
def get_users_info():
    users = [
        {
            "id": user.id,
            "email": user.email,
            "username": user.username,
            "password": user.password,
            "role": user.role,

        }
        for user in User.query.all()
    ]
    return jsonify(users), 200


@admin.route('/createGame', methods=['POST'])
@jwt_required()
@check_admin_role
def create_new_game():
    user = User.query.filter_by(username=get_jwt_identity()).first()

    if not user:
        return jsonify({"error": "No such user found"}), 403

    form_data = json.loads(request.data, strict=False)
    title = form_data.get('title', None)
    price = form_data.get('price', None)
    synopsis = form_data.get('synopsis', None)

    if not title:
        return jsonify({"error": "Title was not provided or provided with an error"}), 400
    if not price and price < 0:
        return jsonify({"error": "Price was not provided or provided with an error"}), 400
    if not synopsis:
        return jsonify({"error": "Synopsis was not provided or provided with an error"}), 400

    if Product.query.filter_by(title=title).first():
        return jsonify({"error": "Product already exists"}), 403

    product = Product(title=title, price=price, synopsis=synopsis, developer_id=user.id, publisher_id=user.id)
    db.session.add(product)
    db.session.commit()
    return jsonify({"id": product.id}), 200


@admin.route('/setGameTags/<int:game_id>', methods=['POST'])
@jwt_required()
@check_admin_role
def set_tags(game_id):
    user = User.query.filter_by(username=get_jwt_identity()).first()

    if not user:
        return jsonify({"error": "No such user found"}), 403

    tags = json.loads(request.data, strict=False)

    if len(tags) == 0:
        return jsonify({"error": "Tags must be set or are provided with an error"}), 400

    for tag_info in tags:
        tag = ProductTag(product_id=game_id, tag_id=tag_info["id"])
        db.session.add(tag)
        db.session.commit()
    return jsonify({"id": game_id}), 200



@admin.route('/setGameLogo/<int:game_id>', methods=['POST'])
@jwt_required()
@check_admin_role
def set_logo(game_id):
    user = User.query.filter_by(username=get_jwt_identity()).first()

    if not user:
        return jsonify({"error": "No such user found"}), 403

    if "file" not in request.files:
        return jsonify({"error": "No file is provided"}), 400

    file = request.files["file"]
    if not file.filename:
        return jsonify({"error": "Filename is empty"}), 400

    filename = secure_filename(file.filename)
    file.save(os.path.join("public/uploads/images/", filename))

    product = Product.query.filter_by(id=game_id).first()
    if not product:
        return jsonify({"error": "No such product found"}), 400

    product.logo = filename
    db.session.commit()
    return jsonify({"id": product.id}), 200


@admin.route('/setGameMedia/<int:game_id>', methods=['POST'])
@jwt_required()
@check_admin_role
def set_media(game_id):
    user = User.query.filter_by(username=get_jwt_identity()).first()

    if not user:
        return jsonify({"error": "No such user found"}), 403

    product = Product.query.filter_by(id=game_id).first()
    if not product:
        return jsonify({"error": "No such product found"}), 400

    if len(request.files) == 0:
        return jsonify({"error": "No file is provided"}), 400

    for file in request.files.values():
        if not file.filename:
            return jsonify({"error": "Filename is empty"}), 400

        filename = secure_filename(file.filename)
        file.save(os.path.join("public/uploads/images/", filename))
        media = Media(product_id=game_id, type=file.mimetype.split("/")[0], src=filename)
        db.session.add(media)

    db.session.commit()
    return jsonify({"id": product.id}), 200


@admin.route('/deleteGame/<int:game_id>', methods=['DELETE'])
@jwt_required()
@check_admin_role
def delete_game(game_id):
    user = User.query.filter_by(username=get_jwt_identity()).first()

    if not user:
        return jsonify({"error": "No such user found"}), 403

    product = Product.query.filter_by(id=game_id).first()
    if not product:
        return jsonify({"error": "No such product found"}), 403

    db.session.delete(product)
    db.session.commit()
    return jsonify({"success": "Product was deleted"}), 200


@admin.route('/getSalesInfo', methods=['GET'])
@jwt_required()
@check_admin_role
def get_sales_info():
    sales_json = [
        {
            "productId": sales.product_id,
            "userId": sales.user_id,
            "paymentDate": sales.payment_date,
            "paymentPrice": sales.payment_price,
            "paymentMethod": sales.payment_method,
            "paymentData": sales.payment_data
        }
        for sales in Sales.query.all()
    ]
    return jsonify(sales_json), 200


@admin.route('/createTag', methods=['POST'])
@jwt_required()
@check_admin_role
def create_new_tag():
    user = User.query.filter_by(username=get_jwt_identity()).first()

    if not user:
        return jsonify({"error": "No such user found"}), 403

    form_data = json.loads(request.data, strict=False)
    name = form_data.get('name', None)

    if not name:
        return jsonify({"error": "Title was not provided or provided with an error"}), 400

    if Tag.query.filter_by(name=name).first():
        return jsonify({"error": "Product already exists"}), 403

    tag = Tag(name=name)
    db.session.add(tag)
    db.session.commit()
    return jsonify({"id": tag.id, "name": name}), 200


@admin.route('/deleteTag/<int:tag_id>', methods=['DELETE'])
@jwt_required()
@check_admin_role
def delete_tag(tag_id):
    user = User.query.filter_by(username=get_jwt_identity()).first()

    if not user:
        return jsonify({"error": "No such user found"}), 403

    tag = Tag.query.filter_by(id=tag_id).first()
    if not tag:
        return jsonify({"error": "No such product found"}), 403

    db.session.delete(tag)
    db.session.commit()
    return jsonify({"success": "Tag was deleted"}), 200


@admin.route('/getTags', methods=['GET'])
def get_tags():
    sales_json = [
        {
            "id": tag.id,
            "name": tag.name
        }
        for tag in Tag.query.all()
    ]
    return jsonify(sales_json), 200


@admin.route('/getProducts', methods=['GET'])
def get_products():
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

