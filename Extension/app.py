from flask import Flask, request, jsonify
import pickle
import re

app = Flask(__name__)
model = pickle.load(open('phishing.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    url = request.json['url']
    url = re.sub(r'https?://(?:www\.)?', '', url).split('/')[0]
    prediction = model.predict([url])[0]
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)