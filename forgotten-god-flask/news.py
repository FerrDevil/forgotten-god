from flask import Blueprint, jsonify, request
from models import db, User, Cart, Product, Sales
from flask_jwt_extended import jwt_required, get_jwt_identity
import json

news = Blueprint("news", __name__, )


@news.route('/getNews', methods=['GET'])
def get_news(id):
    pass