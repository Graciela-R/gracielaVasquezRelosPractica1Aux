var equipo1 = new Array();
var equipo2 = new Array();
var allplayers = new Array();
var players1Final = new Array();
var gkequipo1 = 'Lewandoski';
equipo1 = [['Never', 'pavard', 'Martinez', 'Alaba', 'Davies'],
    ['Kimmich', 'Goretza', 'Coman', 'Muller', 'Gnarby']];
equipo2 = [['Burky', 'Schulz', 'Humels', 'Akanji', 'Hakimi'],
    ['Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho']];
allplayers = [['Never', 'pavard', 'Martinez', 'Alaba', 'Davies',
        'Kimmich', 'Goretza', 'Coman', 'Muller', 'Gnarby', 'Lewandoski'],
    ['Burky', 'Schulz', 'Humels', 'Akanji', 'Hakimi',
        'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']];
players1Final = [['Thiago', 'Counthingo', 'Perisic'],
    ['suplente4', 'suplente5', 'suplente6']];
var game = {
    team1: 'Bayern Munich',
    team2: 'Borrusia Dortmund',
    empate: '',
    players: [['Never', 'pavard', 'Martinez', 'Alaba', 'Davies',
            'Kimmich', 'Goretza', 'Coman', 'Muller', 'Genarby', 'Lewandosky'],
        ['Burky', 'Schulz', 'Humels', 'Akanji', 'Hakimi',
            'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']],
    score: '4:0',
    Scored: ['Lewandosky', 'Genarby', 'Lewandosky', 'Humeles'],
    date: 'Nov  8th,2037',
    odds: {
        team1: 1.33,
        team2: 6.5,
        x: 3.25
    }
};
var goles = 0;
var printGoals = function (numero) {
    var result = game.players[0][numero];
    for (var i = 0; i < game.Scored.length; i++) {
        if (game.Scored[i] == result) {
            goles++;
        }
    }
    return result + " Numero de goles ->" + goles;
};
console.log(printGoals(9));
//Es mas probable que gane el equipo con la cuota mas baja
//console.log("\n");
console.log("el equipo que gana es el equipo 1-> " + game.odds.team1);
