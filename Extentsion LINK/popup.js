// Button 1 URL
const button1Url = 'https://example.com';

// Button 2 URL
const button2Url = 'https://google.com';

// Button 3 URL
const button3Url = 'https://openai.com';

// Button click event listeners
document.getElementById('button1').addEventListener('click', () => {
  chrome.tabs.create({ url: button1Url });
});

document.getElementById('button2').addEventListener('click', () => {
  chrome.tabs.create({ url: button2Url });
});

document.getElementById('button3').addEventListener('click', () => {
  chrome.tabs.create({ url: button3Url });
});
