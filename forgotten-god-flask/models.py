from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4
from datetime import datetime

db = SQLAlchemy()


def create_new_uuid():
    return uuid4().hex


class User(db.Model):
    id = db.Column(db.String(32), primary_key=True, default=create_new_uuid)
    email = db.Column(db.String(55), nullable=False)
    username = db.Column(db.String(16), unique=True, nullable=False)
    password = db.Column(db.Text, nullable=False)
    role = db.Column(db.Text, nullable=False)


class Product(db.Model):
    id = db.Column(db.Integer, unique=True, primary_key=True)
    title = db.Column(db.String(32), unique=True)
    logo = db.Column(db.Text, nullable=True)
    price = db.Column(db.String(32), nullable=False)
    developer_id = db.Column(db.String(32), db.ForeignKey(User.id), nullable=False)
    publisher_id = db.Column(db.String(32), db.ForeignKey(User.id), nullable=False)
    publish_date = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    synopsis = db.Column(db.Text, nullable=False)


class Tag(db.Model):
    id = db.Column(db.Integer, unique=True, primary_key=True)
    name = db.Column(db.String(32), nullable=False, unique=True)


class ProductTag(db.Model):
    tag_id = db.Column(db.Integer, db.ForeignKey(Tag.id), primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(Product.id), primary_key=True)


class Media(db.Model):
    type = db.Column(db.String(5), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(Product.id), primary_key=True)
    src = db.Column(db.Text, primary_key=True)


class Cart(db.Model):
    product_id = db.Column(db.Integer, db.ForeignKey(Product.id), primary_key=True)
    user_id = db.Column(db.String(32), db.ForeignKey(User.id), primary_key=True)


class Sales(db.Model):
    product_id = db.Column(db.Integer, db.ForeignKey(Product.id), primary_key=True)
    user_id = db.Column(db.String(32), db.ForeignKey(User.id), primary_key=True)
    payment_date = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    payment_price = db.Column(db.Integer, nullable=False)
    payment_method = db.Column(db.Text, nullable=False)
    payment_data = db.Column(db.Text)

