from datetime import timedelta


class ApplicationConfig:
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_DATABASE_URI = "sqlite:///project.db"
    SECRET_KEY = 'Afz-_ysgX1-mQSvSFMEKql8pUTo9Emlp'
    JWT_TOKEN_LOCATION = ['cookies', "headers"]
    JWT_COOKIE_SECURE = True
    JWT_COOKIE_SAMESITE = "None"
    JWT_SESSION_COOKIE = False
    JWT_ACCESS_COOKIE_PATH = '/'
    JWT_REFRESH_COOKIE_PATH = '/'
    JWT_ACCESS_COOKIE_NAME = "access-fg-cookie"
    JWT_REFRESH_COOKIE_NAME = "refresh-fg-cookie"
    JWT_COOKIE_CSRF_PROTECT = True
    JWT_SECRET_KEY = "Afz-_ysgX1-mQSvSFMEKql8pUTo9Emlp"
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
    JWT_REFRESH_TOKEN_EXPIRES = timedelta(days=30)


