from flask import Flask
from flask import request, render_template
from werkzeug.utils import secure_filename
from server.algo import DataStructure
import os

app = Flask(__name__)
ds = DataStructure()

@app.route('/')
def index():
    return render_template('/index.html')

@app.route('/user/register', methods=['GET','POST'])
def register():
    if request.method == 'POST':
        image = request.files['image']
        imagePath = os.path.join(app.instance_path, 'images')
        image.save( imagePath + '/' + secure_filename(image.filename))
        name = request.form['name']
        email = request.form['email']
        career = request.form['career']
        ds.add(name, imagePath, email, career)
        return{
            'message': 'true'
        }
    return{
        'message': 'formBody'
    }

@app.route('/user/list')
def sendUsers():
    return {
        'data': ds.getRandomUsers()
    }