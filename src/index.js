// get the buttons by id
let aliceblue = document.getElementById('aliceblue');
let cornsilk = document.getElementById('cornsilk');
let reset = document.getElementById('reset');

// use tabs.insertCSS to change header color on button click

// aliceblue
aliceblue.onclick = () => {
  chrome.tabs.insertCSS({code: "body { background: aliceblue !important; }"});
  
  chrome.history.search({text:"mozilla"},()=>{
    chrome.bookmarks.create({
        title: res.title,
        url: res.url
      });
  })
};

// cornsilk
cornsilk.onclick = () => {
  chrome.tabs.insertCSS({code: "body { background: cornsilk !important; }"});
};

// back to original
reset.onclick = () => {
  chrome.tabs.insertCSS({code: "body { background: none !important; }"});
};

