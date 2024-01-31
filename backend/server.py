from flask import Flask, request
from flask_cors import CORS
import utility.GoogleReq as GoogleReq
import requests

app = Flask(__name__)
CORS(app)

@app.route('/')
def Home():
    return 'started'

@app.route('/', methods=['POST'])
def Reroute():
    msg = request.get_json()
    scores = GoogleReq.analyzeMsg(msg)
    payload = {"scores" : scores}
    res = requests.post('https://approach-microservice.onrender.com/api/interpret', json=payload)
    return res.json()

if __name__ == '__main__':
    app.run(debug=True)