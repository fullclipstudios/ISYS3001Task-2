// Player class
class Player {
    constructor(id, rank, ping, elo) {
        this.id = id;
        this.rank = rank;
        this.ping = ping;
        this.elo = elo;
    }
}

// Generate random 6-digit ID
function generateId() {
    return Math.floor(100000 + Math.random() * 900000);
}

// Generate random Elo (1000-3000)
function generateElo() {
    return Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
}

// Generate random rank
function generateRank() {
    const ranks = ["Rookie", "Bronze", "Silver", "Gold", "Master"];
    return ranks[Math.floor(Math.random() * ranks.length)];
}

// Generate random ping (10-300ms)
function generatePing() {
    return Math.floor(Math.random() * (300 - 10 + 1)) + 10;
}

// Create and rank players
function createAndRankPlayers() {
    // Generate 100 players
    const players = Array.from({ length: 100 }, () => {
        return new Player(
            generateId(),
            generateRank(),
            generatePing(),
            generateElo()
        );
    });

    // Sort players by Elo (descending order)
    const rankedPlayers = players.sort((a, b) => b.elo - a.elo);

    // Get top 10 players
    const top10 = rankedPlayers.slice(0, 10);

    // Display results
    displayTopPlayers(top10);
}

// Display top 10 players
function displayTopPlayers(players) {
    const container = document.getElementById('leaderboard');
    
    const list = document.createElement('div');
 
    players.forEach((player, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="name">${index + 1}. </span>
            <span class="id">ID: ${player.id}</span>
            <span class="elo">Elo: ${player.elo}</span>
            <span class="rank">${player.rank}</span>
        `;
        list.appendChild(listItem);
    });

    container.appendChild(list);
}

// Initialize when rank players is clicked
document.getElementById('rankPlayers').addEventListener('click', createAndRankPlayers);
