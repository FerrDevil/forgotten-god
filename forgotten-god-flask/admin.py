import json
import os

from flask import Blueprint, jsonify, request
from flask_jwt_extended import get_jwt_identity, jwt_required
from werkzeug.utils import secure_filename

from models import db, User, Product, Sales

admin = Blueprint("admin", __name__)


def check_admin_role(func):
    def wrap(*args, **kwargs):
        user = User.query.filter_by(username=get_jwt_identity()).first()
        if not user:
            return jsonify({"error": "No such user found"}), 403
        if user.role != "admin":
            return jsonify({"error": "Given user is not admin"}), 403
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
    if file.filename == "":
        return jsonify({"error": "Filename is empty"}), 400

    filename = secure_filename(file.filename)
    file.save(os.path.join("public/uploads/images/", filename))

    product = Product.query.filter_by(id=game_id).first()
    if not product:
        return jsonify({"error": "No such product found"}), 400

    product.logo = filename
    db.session.commit()
    return jsonify({"id": product.id}), 200


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