// Initialize Firebase – replace with your config values
const config = {
  apiKey: "YOUR_API-KEY",
  authDomain: "YOUR_ID.firebaseapp.com",
  databaseURL: "https://YOUR_ID.firebaseio.com",
  projectId: "YOUR_ID",
  appId: "APP_ID"
};
firebase.initializeApp(config);
const db = firebase.database();

// Elements
const messagesDiv = document.getElementById('messages');
const nameInput = document.getElementById('nameInput');
const textInput = document.getElementById('textInput');

// Listen for new messages and render live
db.ref('messages').on('child_added', snap => {
  const msg = snap.val();
  const msgEl = document.createElement('div');
  msgEl.className = 'msg';
  const time = new Date(msg.timestamp).toLocaleTimeString();
  msgEl.textContent = `${msg.name} [${time}]: ${msg.text}`;
  messagesDiv.appendChild(msgEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

// Post a new message
function postMessage() {
  const name = nameInput.value.trim();
  const text = textInput.value.trim();
  if (!name || !text) return alert('Enter your name & message');

  const message = { name, text, timestamp: Date.now() };
  db.ref('messages').push(message);
  textInput.value = '';
}
