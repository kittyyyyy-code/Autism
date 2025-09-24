<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nekoshi Board Game</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<h1>Nekoshi Adventures: Board Game</h1>

<!-- Lobby Screen -->
<div id="lobby-screen">
  <h2>Create or Join Lobby</h2>
  <input type="text" id="lobbyName" placeholder="Lobby Name">
  <input type="text" id="lobbyPassword" placeholder="Password (Optional)">
  <button id="createBtn">Create Lobby</button>
  <button id="joinBtn">Join Lobby</button>
  <h3>Public Lobbies</h3>
  <ul id="publicLobbies"></ul>
</div>

<!-- Character Selection -->
<div id="character-selection" style="display:none;">
  <h2>Select Your Character</h2>
  <select id="characters">
    <option>REN MORIKAWA</option>
    <option>YUI MIZUKI</option>
    <option>EMILIANO MORALES</option>
    <option>HUNTER WHITMORE</option>
    <option>JASPER VOSS</option>
    <option>MIO TOJO</option>
  </select>
  <input type="text" id="customName" placeholder="Custom Character">
  <button id="startBtn">Start Game</button>
</div>

<!-- Game Screen -->
<div id="game-screen" style="display:none;">
  <h2 id="playerName"></h2>
  <p>Coins: <span id="coins">0</span></p>
  <p>Turn: <span id="currentTurn">Waiting...</span></p>
  <button id="rollBtn">Roll Dice</button>
  <div id="board"></div>
  <div id="log"></div>
</div>

<script src="script.js"></script>
</body>
</html>
