
def cross_origin(func):
    def wrap(*args, **kwargs):
        response = func()
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, OPTIONS'
        response.headers[
            "Access-Control-Allow-Headers"] = "Access-Control-Request-Headers,Access-Control-Allow-Methods,Access-Control-Allow-Headers,Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept"
        print(1, response.headers)
        return response
    wrap.__name__ = func.__name__
    return wrap

