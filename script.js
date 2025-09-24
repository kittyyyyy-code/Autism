// Firebase Config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let playerId = null;
let lobbyId = null;
let playerName = "";
let coins = 0;
let boardSize = 10;
let board = [];

// Lobby Functions
function createLobby() {
  const name = document.getElementById("lobbyName").value;
  const password = document.getElementById("lobbyPassword").value;
  db.collection('lobbies').add({
    name, password, players: [], turn: null, board: Array(100).fill(null)
  }).then(doc => {
    lobbyId = doc.id;
    document.getElementById("lobby-screen").style.display="none";
    document.getElementById("character-selection").style.display="block";
  });
}

function joinLobby() {
  const name = document.getElementById("lobbyName").value;
  const password = document.getElementById("lobbyPassword").value;
  db.collection('lobbies').where("name","==",name).get().then(snapshot => {
    snapshot.forEach(doc => {
      const data = doc.data();
      if(data.password === password){
        lobbyId = doc.id;
        document.getElementById("lobby-screen").style.display="none";
        document.getElementById("character-selection").style.display="block";
      }
    });
  });
}

// Character Selection
function startGame() {
  const select = document.getElementById("characters").value;
  const custom = document.getElementById("customName").value;
  playerName = custom || select;
  playerId = Math.random().toString(36).substr(2, 9);
  document.getElementById("playerName").textContent = `Player: ${playerName}`;
  document.getElementById("character-selection").style.display="none";
  document.getElementById("game-screen").style.display="block";
  initBoard();
}

// Initialize Board
function initBoard() {
  const boardDiv = document.getElementById("board");
  boardDiv.innerHTML = "";
  board = Array(100).fill(null);
  for(let i=0;i<10;i++) board[Math.floor(Math.random()*100)] = "coin";
  for(let i=0;i<5;i++) board[Math.floor(Math.random()*100)] = "demon";
  for(let i=0;i<5;i++) board[Math.floor(Math.random()*100)] = "spirit";

  for(let i=0;i<100;i++){
    const div = document.createElement("div");
    div.className = "tile";
    div.id = "tile-"+i;
    if(board[i]) div.classList.add(board[i]);
    boardDiv.appendChild(div);
  }
}

// Dice Roll
let position = 0;
function rollDice() {
  const roll = Math.floor(Math.random()*6)+1;
  log(`${playerName} rolled a ${roll}`);
  movePlayer(roll);
}

// Move Player
function movePlayer(roll) {
  document.getElementById("tile-"+position).classList.remove("player");
  position += roll;
  if(position>=100) position=99;
  document.getElementById("tile-"+position).classList.add("player");
  handleTile(position);
}

// Tile Effects
function handleTile(pos) {
  const tile = board[pos];
  if(tile==="coin") { coins+=5; document.getElementById("coins").textContent=coins; log("Collected 5 Fishies!"); board[pos]=null; }
  if(tile==="demon") log("Fight Demon!"); 
  if(tile==="spirit") log("Help Spirit!"); 
}

// Logging
function log(msg) { document.getElementById("log").textContent=msg; }
