

//Player class
class Player 
{
    constructor(id, rank, ping) 
  {
        this.id = id;
        this.rank = rank;
        this.ping = ping;
  }
}


//Player random 6 digit ID generation
function getId() 
{
    return Math.floor(100000 + Math.random() * 900000); 
}

//Player random ping generation (between 10ms and 300ms)
function getPing()
{
    return Math.floor(Math.random() * (300 - 10 + 1)) + 10;
}


//Player random rank generation
function getRank() 
{
    const ranks = ["Rookie", "Bronze", "Silver", "Gold","Master"];
    return ranks[Math.floor(Math.random() * ranks.length)];
}

//Generate 100 players (to simulate online users)
function generatePlayers() 
{
    const players = [];
    for (let i = 0; i < 100; i++) 
    {
        const id = getId();
        const rank = getRank();
        const ping = getPing();
        players.push(new Player(id, rank, ping));
    }
    displayPlayers(players);
}


// Display generated players
function displayPlayers(players) 
{
    const onlineplayersDiv = document.getElementById('onlineplayers');

    // Clear previous list
    playersDiv.innerHTML = ''; 
  
    players.forEach(player =>
      {
          const onlineplayersDiv = document.createElement('div');
          onlineplayersDiv.classList.add('player');
          onlineplayersDiv.innerHTML = `Player ID: ${player.id} - Rank: ${player.rank} - Current Ping: ${player.ping}ms`;
          onlineplayersDiv.appendChild(playerDiv);
      });
}




