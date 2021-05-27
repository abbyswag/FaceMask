from flask import Flask, send_file
from flask import request, render_template
from werkzeug.utils import secure_filename
from server.dbHandler import DbHandler
import os

app = Flask(__name__)
db = DbHandler()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def sendData():
    return{
        'totalUsers': db.getTotalUsers(),
        'totalVotes': db.getTotalVotes(),
        'maxScore': db.getMaxScore(),
        'topUser': db.getTopUserName()
    }

@app.route('/user/register', methods=['GET','POST'])
def registerUser():
    if request.method == 'POST':
        image = request.files['image']
        imageFlolder = os.path.join(app.instance_path, 'images')
        image.save( imageFlolder + '/' + secure_filename(image.filename))
        name = request.form['name']
        email = request.form['email']
        career = request.form['career']
        db.addUser(name, image.filename, email, career)
        return{
            'message': 'true'
        }
    return{
        'message': 'this route only for post requests'
    }

@app.route('/user/list')
def sendUsers():
    return {
        'list': db.getRandomUsers(3)
    }

@app.route('/user/<path>')
def sendImage(path):
    return send_file(app.instance_path + '/images/' +path)

@app.route('/vote/register', methods=['GET','POST'])
def registerVote():
    if request.method == 'POST':
        data = request.json
        whome = data['whome']
        what = data['what']
        db.addVote(whome,what)
        return {
            'message': 'true'
        }
    return {
        'message': 'this route only for post requests'
    }

@app.route('/result')
def getResult():
    return {
        'list': db.getTopUser(6)
    }

@app.route('/user/search')
def getQuery():
    if request.method == 'POST':
        data = request.json
        query = data['query']
    return {
        'user': db.getUser(query)
    }