from flask import Flask
from flask import request, render_template
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('/index.html')

@app.route('/user/image', methods = ['GET','POST'])
def uploadImage():
    if request.method == 'POST':
        # for saving image
        image = request.files['image']
        images = os.path.join(app.instance_path, 'images')
        image.save( images + '/' + secure_filename(image.filename))
        return {
            'message':'image is uploaded'
        }
    return{
        'message':'upload the image'
    }

@app.route('/user/data', methods = ['GET','POST'])
def getData():
    if request.method == 'POST':
        data = request.json
        name = data['name']
        email = data['email']
        career = data['career']
        return {
            'message':'data is recieved'
        }
    return{
        'message':'data is coming'
    }