class TeamGenerator {
    constructor(players = []) {
        this.players = players;
    }

    addPlayer(name, rank, isBanned = false) {
        this.players.push({ name, rank, isBanned });
    }

    generateTeams(teamSize) {
        if (teamSize <= 0) {
            throw new Error("Team size must be greater than zero.");
        }

        const sortedPlayers = [...this.players]
            .filter(player => !player.isBanned)
            .sort((a, b) => b.rank - a.rank);
        const teams = [];

        while (sortedPlayers.length > 0) {
            teams.push(sortedPlayers.splice(0, teamSize));
        }

        return teams;
    }

    sortTeamsByRank(teams) {
        return teams.map(team => team.sort((a, b) => b.rank - a.rank));
    }

    removeBannedPlayers() {
        this.players = this.players.filter(player => !player.isBanned);
    }

    redoMatchmaking(teamSize) {
        this.removeBannedPlayers();
        return this.generateTeams(teamSize);
    }

    clearPlayers() {
        this.players = [];
    }
}
