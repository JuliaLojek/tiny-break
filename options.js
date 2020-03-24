// Saves options to chrome.storage
function save_options() {
    const username = document.getElementById('username').value;
    const bgcolor = document.getElementById('bgcolor').value;
    chrome.storage.sync.set({
      TinyBreakUsername: username,
      TinyBreakBgColor: bgcolor
    }, function() {
      // Update status to let user know options were saved.
      const status = document.getElementById('status');
      status.textContent = 'Options saved!';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    chrome.storage.sync.get({
        TinyBreakUsername: 'Awesome Human',
        TinyBreakBgColor: '#b5d6e9'
    }, function(items) {
      document.getElementById('username').value = items.TinyBreakUsername;
      document.getElementById('bgcolor').value = items.TinyBreakBgColor;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);