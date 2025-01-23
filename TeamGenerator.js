class TeamGenerator {
    constructor(players = []) {
        this.players = players; 
    }


    addPlayer(player) {
        this.players.push(player);
    }

    generateTeams(teamSize) {
        if (teamSize <= 0) {
            throw new Error("Team size must be greater than zero.");
        }


        const shuffledPlayers = [...this.players].sort(() => Math.random() - 0.5);
        const teams = [];

        while (shuffledPlayers.length > 0) {
            teams.push(shuffledPlayers.splice(0, teamSize));
        }

        return teams;
    }

    clearPlayers() {
        this.players = [];
    }
} 
