function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

// Helper function to find a player by name
function findPlayer(playerName) {
    const game = gameObject();
    const teams = [game.home, game.away];
    for (let team of teams) {
        if (team.players[playerName]) {
            return team.players[playerName];
        }
    }
    return null;
}

// 1. Returns the points scored by the given player
function numPointsScored(playerName) {
    const player = findPlayer(playerName);
    return player ? player.points : null;
}

// 2. Returns the shoe size of the given player
function shoeSize(playerName) {
    const player = findPlayer(playerName);
    return player ? player.shoe : null;
}

// 3. Returns an array of the team's colors
function teamColors(teamName) {
    const game = gameObject();
    const teams = [game.home, game.away];
    const team = teams.find(t => t.teamName === teamName);
    return team ? team.colors : [];
}

// 4. Returns an array of both team names
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// 5. Returns an array of jersey numbers for the given team
function playerNumbers(teamName) {
    const game = gameObject();
    const teams = [game.home, game.away];
    const team = teams.find(t => t.teamName === teamName);
    if (!team) return [];
    return Object.values(team.players).map(p => p.number);
}

// 6. Returns an object containing all stats for the given player
function playerStats(playerName) {
    return findPlayer(playerName) || {};
}

// 7. Finds the player with the largest shoe size and returns their number of rebounds
function bigShoeRebounds() {
    const game = gameObject();
    const teams = [game.home, game.away];
    let maxShoe = 0;
    let rebounds = 0;
    for (let team of teams) {
        for (let playerName in team.players) {
            const player = team.players[playerName];
            if (player.shoe > maxShoe) {
                maxShoe = player.shoe;
                rebounds = player.rebounds;
            }
        }
    }
    return rebounds;
}

module.exports = {
    numPointsScored,
    shoeSize,
    teamColors,
    teamNames,
    playerNumbers,
    playerStats,
    bigShoeRebounds
};