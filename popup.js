
document.addEventListener('DOMContentLoaded', function() {
  document.getElementsByName("favcolor")[0].addEventListener('change', function(event) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {method: "changeBgColor", color: event.target.value}, function(response) {
        console.log('Background Color successfully changed');
      });
    });
  });
}, false);

