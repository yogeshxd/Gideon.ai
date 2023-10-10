from flask import Flask, request, render_template,jsonify
import requests

app = Flask(__name__)
   
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['GET','POST'])
def predict():
    url = request.json['url']
    prediction = requests.get("https://127.0.0.1:5000/predict/"+url).text
    return jsonify({'prediction': prediction})

    
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
