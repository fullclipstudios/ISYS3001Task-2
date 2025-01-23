class TeamGenerator {
    constructor(players = []) {
        this.players = players;
    }

    addPlayer(name, rank, groupSize = 1, isBanned = false) {
        this.players.push({ name, rank, groupSize, isBanned });
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

    pairTeamsByGroupSize(teams) {
        const groupedTeams = {};
        const pairedTeams = [];

        for (const team of teams) {
            const groupSize = team.length;
            if (!groupedTeams[groupSize]) {
                groupedTeams[groupSize] = [];
            }
            groupedTeams[groupSize].push(team);
        }

        for (const groupSize in groupedTeams) {
            const group = groupedTeams[groupSize];
            while (group.length > 1) {
                pairedTeams.push([group.pop(), group.pop()]);
            }
        }

        return pairedTeams;
    }

    clearPlayers() {
        this.players = [];
    }
}
