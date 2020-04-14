import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Player } from './pig-dice.js';
import { toss } from './pig-dice.js';

//user business logic
$(document).ready(function(){
  $("#play-game").submit(function(event){
    event.preventDefault();
    $("#player2-roll").attr('disabled','disabled');
    $("#player2-hold").attr('disabled','disabled');
    var player1Input = $("#player1").val();
    var player2Input = $("#player2").val();
    $("#intro").hide();
    $("#player-console").show();
    
    var player1 = new Player();
    player1.name = player1Input;
    $(".player1Name").text(player1.name);

    var player2 = new Player();
    player2.name = player2Input;
    $(".player2Name").text(player2.name);

    //get random number for player1
    $("#player1-roll").click(function(event){
      event.preventDefault();
      player1.roll = toss();
      $(".die-roll-1").text( player1.roll);
      player1.scoreCheck();
      $(".round-total-1").text(player1.tempScore);

      if( player1.roll === 1){
        $("#player1-roll").attr('disabled','disabled');
        $("#player1-hold").attr('disabled','disabled');
        $("#player2-roll").removeAttr('disabled');
        $("#player2-hold").removeAttr('disabled');
 
      } 
    });

    // hold for player1 
    $("#player1-hold").click(function(){
      player1.hold();
      $(".total-score-1").text(player1.totalScore);
      $("#player2-roll").removeAttr('disabled');
      $("#player2-hold").removeAttr('disabled');
      //disable player1 
      $("#player1-roll").attr('disabled','disabled');
      $("#player1-hold").attr('disabled','disabled');
    });

    //player 2
    $("#player2-roll").click(function(event){
      event.preventDefault();
      player2.roll = toss();
      $(".die-roll-2").text( player2.roll);
      player2.scoreCheck();
      $(".round-total-2").text(player2.tempScore);

      if( player2.roll === 1){
        $("#player2-roll").attr('disabled','disabled');
        $("#player2-hold").attr('disabled','disabled');
        $("#player1-roll").removeAttr('disabled');
        $("#player1-hold").removeAttr('disabled');
      } 
    });

    $("#player2-hold").click(function(event){
      event.preventDefault();
      player2.hold();
      $(".total-score-2").text(player2.totalScore);
      $("#player1-roll").removeAttr('disabled');
      $("#player1-hold").removeAttr('disabled');
      $("#player2-roll").attr('disabled','disabled');
      $("#player2-hold").attr('disabled','disabled');
    });
  });
});

