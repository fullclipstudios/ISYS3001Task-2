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

    getFriends(player) {
        return this.friends[player] ? Array.from(this.friends[player]) : [];
    }
}
