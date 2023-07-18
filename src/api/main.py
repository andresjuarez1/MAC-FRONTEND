from flask import Flask, request
from flask_cors import CORS
import dbcon
import asyncio

connection = dbcon.Connection()
connection.setup('18.208.99.204', 'mauricio', 'mauricio', 3306, 'users', 'weathersense', 'datasensors')
# connection.setup('127.0.0.1', 'root', 'root', 3306, 'usuarios', 'weathersense2')

loop=asyncio.get_event_loop()

loop.run_until_complete(connection.connect())

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hola mundo'


@app.route('/login', methods=['POST'])
def login():
    global connection, loop
    req = request.get_json()
    logSuccess = loop.run_until_complete(connection.login(req))

    if logSuccess:
        return ('login Success')
    
    else:
        return('failed login')


@app.route('/createUser', methods=['POST'])
def createUser():
    global connection, loop
    req2 = request.get_json()
    regSuccess = loop.run_until_complete(connection.createUser(req2))
    if regSuccess:
        return ('register Success')
    else:
        return('failed register')


# @app.route('/datasensors', methods=['POST'])
# def datasensors():
#     global connection, loop
#     req3 = request.get_json()
#     searchSensors = loop.run_until_complete(connection.datasensors(req3))

#     if searchSensors:
#         return ('search success')
    
#     else:
#         return('failed search')

if __name__ == '__main__':
    app.run(port=5050)
