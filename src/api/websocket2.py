import socketio
import eventlet
from flask import Flask, request, render_template
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

sio = socketio.Server(cors_allowed_origins='*')

@sio.on('connect', namespace='/client')
def connect(sid, environ):
    sio.enter_room(sid,'monitor','/client')
    sio.emit('log','A new user has just connected to your device.', room='monitor',namespace='/client', skip_sid=sid)
    sio.emit('log', 'Your connection to the server has been successful.',to=sid, namespace='/client')
    print("User connected")


    
