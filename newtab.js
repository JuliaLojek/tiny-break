const greeting = document.getElementById('greeting');
const idea = document.getElementById('idea');
const main = document.querySelector('main');
const ideaList = [
  "stand up and walk around for a minute or two",
  "lean your torso to one side and then to the other to stretch the sides of your body, repeat a few times",
  "sit straight, twist your torso to one side, then to the other, repeat a few times",
  "drink a few sips of water",
  "make sure your back is straight",
  "smile :)",
  "inhale deeply, exhale slowly, repeat a few times",
  "sit straight, raise your arms to the ceiling and strecth",
  "slowly tilt your head backwards and look at the ceiling, then bring your chin to your chest to stretch the neck",
  "tilt your head down to one shoulder, then to the other",
  "with your arms down bring your shoulders up, hold for a few seconds and then release, repeat",
  "make fists with your hands and draw circles with your wrists",
  "interlock your fingers and push your hands in front of you - palms facing out",
  "raise your feet slightly from the floor and draw circles with your ankles",
  "look away from the screen and focus on something which is at least 20 meters away, hold for 30 seconds",
  "draw circles with your eyes",
  "remember to breathe",
  "close your eyes, clear your mind and focus on breathing for at least 10 breaths"
];

function restoreAndDisplayUserSettings() {
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

function createIdea() {
  const ideaText = ideaList[Math.floor(Math.random() * ideaList.length)];
  idea.innerText = ideaText;
}

function displayContentToUser() {
  restoreAndDisplayUserSettings();
  createIdea();
}

document.addEventListener('DOMContentLoaded', displayContentToUser);

document.querySelector('#options').addEventListener("click", () => {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL('options.html'));
    }
  });
