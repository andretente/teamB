class Player extends Base{

  defaults(){
    return{
      name: 'Player Name',
      type: 'Human or Robot',
      hiScore: 'Highest score'
    }
  }

  addPlayers(){
     players.push(new Player({
      name: $('#playerName1').val(),
      type: $('#type1').val(),
      hiScore: 0
    }));
    players.push(new Player({
     name: $('#playerName2').val(),
     type: $('#type2').val(),
     hiScore: 0
   }));
   JSON._save('players.json', players);
   $('#playerName1').val('');
   $('#playerName2').val('');
  }
}
