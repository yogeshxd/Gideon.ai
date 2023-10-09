chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.prediction) {
    var prediction = request.prediction;
    var message = prediction == "good" ? "Congratulations, your website is safe and secure for users to browse!" : "This might be a suspicious link!";
    var div = document.createElement('div');
    div.innerHTML = message;
    document.body.appendChild(div);
  }
});
