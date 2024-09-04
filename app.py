from flask import Flask, request, render_template
from forms import convert_message

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/convert', methods=['POST'])
def convert():
    message = request.form['message']
    conversion_type = request.form['conversion_type']
    converted_message = convert_message(message, conversion_type)
    return render_template('index.html', converted_message=converted_message)

if __name__ == '__main__':
    app.run(debug=True)