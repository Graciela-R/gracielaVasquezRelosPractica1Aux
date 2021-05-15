let equipo1=new Array();
let equipo2=new Array();
let allplayers=new Array();
let players1Final=new Array();
let gkequipo1:String='Lewandoski';

equipo1= [ ['Never','pavard','Martinez','Alaba','Davies'],     
         [ 'Kimmich','Goretza','Coman','Muller','Gnarby'] ];
equipo2= [ ['Burky','Schulz','Humels','Akanji','Hakimi' ],
          ['Weigl','Witsel','Hazard','Brandt','Sancho' ] ];

allplayers=[['Never','pavard','Martinez','Alaba','Davies',     
           'Kimmich','Goretza','Coman','Muller','Gnarby','Lewandoski'],
           ['Burky','Schulz','Humels','Akanji','Hakimi' ,
            'Weigl','Witsel','Hazard','Brandt','Sancho','Gotze']];
players1Final=[['Thiago','Counthingo','Perisic'],
                ['suplente4','suplente5','suplente6']];

const game :{
     team1 : String | number;
     team2 : String | number;
     empate: String,
     players,
     score:string,
     Scored:[String,String,String,String],
     date:String,
     odds

}={
 team1:'Bayern Munich',
 team2:'Borrusia Dortmund',
 empate:'',
 players:[['Never','pavard','Martinez','Alaba','Davies',     
         'Kimmich','Goretza','Coman','Muller','Genarby','Lewandosky'],
         ['Burky','Schulz','Humels','Akanji','Hakimi' ,
         'Weigl','Witsel','Hazard','Brandt','Sancho','Gotze']],
 score:'4:0',
 Scored:['Lewandosky','Genarby','Lewandosky','Humeles'],
 date:'Nov  8th,2037',
 odds:{
     team1:1.33,
     team2:6.5,
     x:3.25
 }
};
let goles=0;
const printGoals=function(numero:number){
    let result=game.players[0][numero];
    for(let i=0;i<game.Scored.length;i++){
         if(game.Scored[i]==result){
             goles ++;
         }
    }
   return result +" Numero de goles ->"+goles;
}
console.log(printGoals(9));
//Es mas probable que gane el equipo con la cuota mas baja
//console.log("\n");
console.log("el equipo que gana es el equipo 1-> "+ game.odds.team1);








