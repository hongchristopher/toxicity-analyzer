from flask import Flask, request, jsonify
from flask_cors import CORS
import utility.GoogleReq as GoogleReq

app = Flask(__name__)
CORS(app)

@app.route('/')
def Home():
    return 'Server Up'

@app.route('/', methods=['POST'])
def Reroute():
    msg = request.get_json()
    scores = GoogleReq.analyzeMsg(msg)
    print(scores)
    return jsonify(scores)

if __name__ == '__main__':
    app.run(debug=True)