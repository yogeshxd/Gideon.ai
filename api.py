from flask import Flask, request, render_template,jsonify
import pickle5 as pickle
import re

app = Flask(__name__)
model = pickle.load(open('phishing.pkl', 'rb'))

def predictweb(box1):
    url = []
    url.append(box1)
    result = model.predict(url)
    return result[0]
   
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['GET','POST'])
def predict():
    url = request.json['url']
    url = re.sub(r'https?://(?:www\.)?', '', url).split('/')[0]
    prediction = model.predict([url])[0]
    return jsonify({'prediction': prediction})
    
@app.route('/join', methods=['GET','POST'])
def my_form_post():
    box1 = request.form['box1']
    word = request.args.get('box1')
    combine = predictweb(box1)
    result = {
        "output": combine
    }
    result = {str(key): value for key, value in result.items()}
    return jsonify(result=result)
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
