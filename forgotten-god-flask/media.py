from flask import Blueprint, send_file


media = Blueprint("media", __name__, )


@media.route('/image/<string:image>', methods=['GET'])
def get_image(image):
    try:
        image_response = send_file('./public/uploads/images/' + image)
        return image_response
    except WindowsError:
        return "No such image", 404
