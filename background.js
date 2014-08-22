chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {

	alert("hi" );
    // do your things
	chrome.tabs.executeScript(
        activeTabs[0].id, {file: 'getData.js', allFrames: true});
  }
});
