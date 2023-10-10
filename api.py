from flask import Flask, jsonify
import pickle
import re

app = Flask("__name__")
app.debug = True

model = pickle.load(open('phishing.pkl', 'rb'))

def predictweb(url):
    url = []
    url.append(url)
    result = model.predict(url)
    return result[0]

@app.route('/predict/<url>', methods=['GET', 'POST'])
def predict(url):
    url = re.sub(r'https?://(?:www\.)?', '', url).split('/')[0]
    prediction = model.predict([url])[0]
    return jsonify(prediction)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)