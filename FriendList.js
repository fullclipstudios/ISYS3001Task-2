class FriendsList {
    constructor() {
        this.friends = {};
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
    
    getFriends(player) {
        return this.friends[player] ? Array.from(this.friends[player]) : [];
    }
}
