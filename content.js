chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "changeBgColor"){
            document.body.style.backgroundColor = request.color;
            sendResponse({method: "changeBackgroundColor"}); 
        }
    }
);