class TeamGenerator {
    constructor(players = []) {
        this.players = players;
    }

    addPlayer(name, rank) {
        this.players.push({ name, rank });
    }

    generateTeams(teamSize) {
        if (teamSize <= 0) {
            throw new Error("Team size must be greater than zero.");
        }

        const sortedPlayers = [...this.players].sort((a, b) => b.rank - a.rank);
        const teams = [];

        while (sortedPlayers.length > 0) {
            teams.push(sortedPlayers.splice(0, teamSize));
        }

        return teams;
    }

    sortTeamsByRank(teams) {
        return teams.map(team => team.sort((a, b) => b.rank - a.rank));
    }

    clearPlayers() {
        this.players = [];
    }
}
