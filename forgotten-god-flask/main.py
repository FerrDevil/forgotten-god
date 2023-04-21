from flask_cors import CORS
from flask import Flask
from flask_jwt_extended import JWTManager
from config import ApplicationConfig
from flask_bcrypt import Bcrypt
from models import db
from flask_migrate import Migrate
from auth import auth
from store import store
from media import media
from admin import admin

app = Flask(__name__)
app.config.from_object(ApplicationConfig)



@app.after_request
def after_request(response):

    if not response.headers.get("Access-Control-Allow-Origin"):
        response.headers.add('Access-Control-Allow-Origin', 'https://forgotten-god-pmay.vercel.app')

    response.headers.add('Access-Control-Allow-Headers',
                        'Content-Type,Access-Control-Allow-Credentials,Cookie,Set-Cookie')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response


bcrypt = Bcrypt(app)
jwt = JWTManager(app)
migrate = Migrate(app, db, render_as_batch=True)

app.register_blueprint(auth, url_prefix='/auth')
app.register_blueprint(store, url_prefix='/store')
app.register_blueprint(media)
app.register_blueprint(admin, url_prefix="/admin")

db.init_app(app)

with app.app_context():
    db.create_all()


@app.route('/')
def index():
    return 'da'


if __name__ == '__main__':
    app.run(debug=True)
