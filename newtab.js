const greeting = document.getElementById('greeting');
const idea = document.getElementById('idea');
const main = document.querySelector('main');

function restore_options() {
  
}

function restoreUserSettings() {
  chrome.storage.sync.get({
      TinyBreakUsername: 'Awesome Human',
      TinyBreakBgColor: '#b5d6e9'
  }, function(items) {
    let username = items.TinyBreakUsername;
    let bgcolor = items.TinyBreakBgColor;
    greeting.innerText = `Hi, ${username}!`;
    main.style = `background: ${bgcolor}`;
  });
}



document.addEventListener('DOMContentLoaded', restoreUserSettings);

document.querySelector('#options').addEventListener("click", () => {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL('options.html'));
    }
  });
