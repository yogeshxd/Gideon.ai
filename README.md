# Gideon.ai 

![GitHub](https://img.shields.io/github/last-commit/yogeshxd/Gideon.ai)

Welcome to Gideon.ai, a powerful tool that distinguishes genuine websites from phishy ones. With the increasing number of phishing attempts and malicious websites, it's essential to have a reliable way to analyze URLs and determine their trustworthiness. This Python-based URL Analyzer is designed to help you do just that.

## Features

- **URL Analysis:** Quickly analyze any URL to determine if it's a legitimate website or a potential phishing site.
- **Scalable:** Built with scalability in mind, this analyzer can handle a large number of URLs efficiently.
- **User-Friendly:** Engaging Web based interface for easy usage.
- **Regular Updates:** We actively maintain and update this tool to stay ahead of emerging threats.

## Installation

To get started with Gideon.ai, follow these simple installation instructions:

### Requirements

- Python 3.8+
- Node.js (for the frontend)

First, install the Python dependencies using pip:

```bash
pip install -r requirements.txt
```

Next, navigate to the `static` folder and install the required Node.js modules:

```bash
cd static
npm install
```

## Usage

### Website

Now that you have installed the required dependencies, you can start using Gideon.ai. Run the following command to start the server:

```bash
python web.py
```

After which you can simply visit your localhost on port 5000 and the interactive website will be up and running.

### API

With the latest update I have also added the api for this project which you can run by navigating to the api folder and from there run the following command:

```bash
python api.py
```

Now once the api is up and running you can use the api by going to `https://127.0.0.1:5000/predict/<url>` (remember to replace the <url> with actual url).
It will return you good or bad based upon the prediction.

## What's new??

### Updates
 - Initial Upload
 - Added API support

### Future Updates
 - ~~To add an API for scalability.~~
 - To integrate website with api for multiple frontend support.
 - To add an extension for ease of use.

## Contributing

We welcome contributions from the community. If you encounter any issues, have feature suggestions, or want to contribute code, please feel free to [open an issue](https://github.com/yogeshxd/Gideon.ai/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
