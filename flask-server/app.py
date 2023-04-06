from flask import Flask, request, jsonify
from flask_cors import CORS
from functions import get_recommendations
from functions import suggest_hobby
from functions import update_rating
import pickle


app = Flask(__name__)
CORS(app)

@app.route('/getRecommendations', methods=['POST'])
def get_recommendationsHobby():
    result = get_recommendations()
    return result

@app.route('/suggestHobby', methods=['POST'])
def suggestHobby():
    data = request.get_json()
    hobby_type = data['type']

    result = suggest_hobby(hobby_type)
    return result

@app.route('/updateRating', methods=['POST'])
def updateRating():
    data = request.get_json()
    hobby_name = data['hobby']
    liked = data['liked']

    update_rating(hobby_name, liked)
    return "success"

if __name__ == "__main__":
    app.run()