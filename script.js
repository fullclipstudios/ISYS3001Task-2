

//Player class
export class Player 
{
    constructor(id, rank, ping, elo) 
  {
        this.id = id;
        this.rank = rank;
        this.ping = ping;
        this.elo = elo;
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

function getElo()
{
    return Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
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
        const elo = getElo();
        players.push(new Player(id, rank, ping, elo));
    }
    displayPlayers(players);
}


// Display generated players
function displayPlayers(players)
{
    const onlineplayersDiv = document.getElementById('onlineplayers'); 

    // Clear previous list
    onlineplayersDiv.innerHTML = ''; 

    
    players.forEach(player =>
        {
        const playerDiv = document.createElement('div'); 
        playerDiv.classList.add('player');
        playerDiv.innerHTML = `Player ID: ${player.id} - Rank: ${player.rank} - Current Ping: ${player.ping}ms - Elo: ${player.elo}`;
        onlineplayersDiv.appendChild(playerDiv); 
        });
}

// Event listeners on buttons
document.getElementById('generatePlayers').addEventListener('click', () => 
    {
        generatePlayers();
    });

document.getElementById('matchmake').addEventListener('click', () =>
    {
        alert('Matchmaking feature is not yet implemented.');
    });






