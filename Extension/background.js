chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.url) {
    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({url: request.url})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      var prediction = data.prediction;
      sendResponse({prediction: prediction});
    })
    .catch(error => {
      console.error(error);
      sendResponse({prediction: "Error"});
    });
    return true;
  }
});

