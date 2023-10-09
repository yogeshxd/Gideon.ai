document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var url = tabs[0].url;
    document.querySelector('#status').textContent = 'Verifying website ' + url;
    document.querySelector('#loading').style.display = 'inline-block';
    setTimeout(function(){
      chrome.runtime.sendMessage({url: url}, function(response) {
        document.querySelector('#loading').style.display = 'none';
        var prediction = response.prediction;
        var message = prediction == "good" ? "Congratulations, your website is safe and secure for users to browse!" : "This might be a suspicious link!";
        if(response.prediction=="good"){
          document.querySelector('#status').style.color="#39ff14";
          document.querySelector('#status').style.textshadow="2px 2px 20px black";
          document.querySelector('#status').textContent = message;


        }else if(response.prediction=="bad"){
          document.querySelector('#status').style.color="#FF3131";
          document.querySelector('#status').style.textshadow="2px 2px 20px black";
          
          document.querySelector('#status').textContent = message;

        }
        
      });
    },3000);



    })
   
});
