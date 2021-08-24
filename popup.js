var callbackImages = function (results) {
    for (var i in results[0]) {
		var l = results[0][i];
		if (!l.includes("habbo")) continue;
		if (!checkURL(l)) continue;
        var tag = document.createElement("p");
        var text = document.createTextNode(l);
        tag.appendChild(text);
        document.body.appendChild(tag);
    }
};

var callbackUrls = function (results) {
	console.log(results[0]);
    for (var i in results[0]) {
		var l = results[0][i];
		if (!l.includes("habbo")) continue;
		if (!checkURL(l)) continue;
        var tag = document.createElement("p");
        var text = document.createTextNode(l);
        tag.appendChild(text);
        document.body.appendChild(tag);
    }
};

function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png|pdf|bmp|ico|swf|mp3|mp4|wav|mov)$/) != null);
}

chrome.tabs.query({ // Get active tab
    active: true,
    currentWindow: true
}, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
        code: 'Array.prototype.map.call(document.images, function (i) { return i.src; });'
    }, callbackImages);
});

chrome.tabs.query({ // Get active tab
    active: true,
    currentWindow: true
}, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
        code: 'Array.prototype.map.call(document.links, function (i) { return i.href; });'
    }, callbackUrls);
});