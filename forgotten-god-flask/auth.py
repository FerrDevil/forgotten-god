from flask import Blueprint, jsonify, request, make_response
from models import db, User
from flask_jwt_extended import create_access_token, create_refresh_token, set_access_cookies, set_refresh_cookies,\
    get_jwt, get_jwt_identity, jwt_required, unset_jwt_cookies
from datetime import datetime, timezone, timedelta
import json
from flask_cors import CORS


auth = Blueprint("auth", __name__, )






@auth.route('/register', methods=['POST'])
def register():
    form_data = json.loads(request.data, strict=False)

    email = form_data.get('email', None)
    username = form_data.get('login', None)
    password = form_data.get('password', None)

    if User.query.filter_by(username=username).first():
        return jsonify({"error": "Such user already exists"}), 401

    user = User(username=username, password=password, email=email, role="user")
    db.session.add(user)
    db.session.commit()

    access_token = create_access_token(identity=username)
    refresh_token = create_refresh_token(identity=username)

    response = jsonify({'access_token': access_token})
    set_access_cookies(response, access_token)
    set_refresh_cookies(response, refresh_token)

    return response, 200


@auth.route('/login', methods=['POST'])
def login():
    form_data = json.loads(request.data, strict=False)
    username = form_data.get('login', None)
    password = form_data.get('password', None)
    user = User.query.filter_by(username=username, password=password).first()
    if not user:
        response = jsonify({'login': False})
        return response, 401

    access_token = create_access_token(identity=username)
    refresh_token = create_refresh_token(identity=username)

    response = jsonify({'access_token': access_token})

    set_access_cookies(response, access_token)
    set_refresh_cookies(response, refresh_token)

    return response, 200


@auth.route("/refresh", methods=["POST"])
@jwt_required(refresh=True)
def refresh():
    identity = get_jwt_identity()
    access_token = create_access_token(identity=identity)

    response = jsonify(access_token=access_token)
    set_access_cookies(response, access_token)

    return response


@auth.route('/getUser', methods=['GET'])
@jwt_required()
def get_user():
    username = get_jwt_identity()
    user = User.query.filter_by(username=username).first()
    response = jsonify({"username": username, "userId": user.id, "userRole": user.role})

    return response, 200


@auth.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    response = jsonify({'logout': True})
    unset_jwt_cookies(response)

    return response, 200

