class FriendsList {
    constructor() {
        this.friends = {};
        this.blocked = {};
        this.avoided = {};
    }

    addFriend(player, friend) {
        if (!this.friends[player]) {
            this.friends[player] = new Set();
        }
        this.friends[player].add(friend);
    }

    removeFriend(player, friend) {
        if (this.friends[player]) {
            this.friends[player].delete(friend);
            if (this.friends[player].size === 0) {
                delete this.friends[player];
            }
        }
    }

    isFriend(player, friend) {
        return this.friends[player]?.has(friend) || false;
    }


    blockPlayer(player, blockedPlayer) {
        if (!this.blocked[player]) {
            this.blocked[player] = new Set();
        }
        this.blocked[player].add(blockedPlayer);
    }

    isBlocked(player, blockedPlayer) {
        return this.blocked[player]?.has(blockedPlayer) || false;
    }

        avoidPlayer(player, avoidedPlayer) {
        if (!this.avoided[player]) {
            this.avoided[player] = new Map();
        }
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);
        this.avoided[player].set(avoidedPlayer, expirationDate);
    }

    isAvoided(player, avoidedPlayer) {
        if (!this.avoided[player]?.has(avoidedPlayer)) return false;
        const expirationDate = this.avoided[player].get(avoidedPlayer);
        if (new Date() > expirationDate) {
            this.avoided[player].delete(avoidedPlayer);
            return false;
        }
        return true;
    }

    getFriends(player) {
        return this.friends[player] ? Array.from(this.friends[player]) : [];
    }
}
