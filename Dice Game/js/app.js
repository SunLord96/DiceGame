/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// luật chơi
// 1. có 2 người chơi là : player 1 và player 2
// 2. có 6 con súc sắc được đánh dấu và mang giá trị từ 1-6, mỗi lần nhấn button ROLE DICE 
//     thì điểm current += số chấm nhận được, giá trị nhận được sau mỗi lần quay là random.
//     và số chấm trên súc sức  cũng hiển thị lên màn hình
// 3. Khi nào nhấn nút HOLD thì phần chơi chuyển sang người khác, số điểm sẽ += với số điểm current 
//    và quyền chơi thuộc về người còn lại
// 4. Trong trường hợp quay phải 1 chấm (giá trị là 1) thì số điểm current ==0 
//      và quyền chơi thuộc về người kia, số điểm của người chơi giữa nguyên.
// 5. Khi đến lượt người chơi nào thì người đó là active, nền chuyển màu xám, có chấm đỏ.
// 6. ai chạm điểm 100 trước sẽ trở thành người chiến thắng.


var sp0=0; // Score of player 1
var sp1=0; // Score of player 2
var cp0=0; // Current score of player 1
var cp1=0; // Current socre of player 2
var player=1;
var rollDicenum=0;//This number roll dice in turn
var diceimg=['img/dice-1.png','img/dice-2.png','img/dice-3.png','img/dice-4.png','img/dice-5.png','img/dice-6.png']
function updateScore(){
	//Renew value score player 1,2 current player 1,2 show in HTML
	document.querySelector('#score-0').innerHTML=sp0;
	document.querySelector('#current-0').innerHTML=cp0;
	document.querySelector('#score-1').innerHTML=sp1;
	document.querySelector('#current-1').innerHTML=cp1;
}
function newGame(){
	//Reset value in game
	sp0=0;
	sp1=0;
	cp0=0;
	cp1=0;
	updateScore();
};
function rollDice(){
		rollDicenum = Math.floor((Math.random() * 6) + 1);
		document.querySelectorAll('.dice')[0].setAttribute("src", diceimg[rollDicenum-1]);
		console.log(rollDicenum);
		if (rollDicenum==1) {
			player==1?cp0=cp0*0:cp1=cp1*0;
			//Show current score
			switch(player){
						case 1: 
							document.querySelector('#current-0').innerHTML=cp0;		
						break;
						default:
							document.querySelector('#current-1').innerHTML=cp1;
						break;
					}
			//Switch player if roll dice is 1 !!!
			player==1? player=2:player=1;
			console.log('Lượt của người chơi '+player);
			switch(player){
				case 1: 
					document.querySelectorAll('.player-1-panel.active')[0].setAttribute("class", "player-1-panel");
					document.querySelectorAll('.player-0-panel')[0].setAttribute("class", "player-0-panel active");			
				break;
				default:
					document.querySelectorAll('.player-0-panel.active')[0].setAttribute("class", "player-0-panel");
					document.querySelectorAll('.player-1-panel')[0].setAttribute("class", "player-1-panel active");	
				break;
			}
			alert('Switch Turn')
		}
		if (rollDicenum==2||rollDicenum==3||rollDicenum==4||rollDicenum==5||rollDicenum==6) {
			player==1?cp0=cp0+rollDicenum:cp1=cp1+rollDicenum;
			switch(player){
				case 1: 
					document.querySelector('#current-0').innerHTML=cp0;		
				break;
				case 2:
					document.querySelector('#current-1').innerHTML=cp1;
				break;
				default:
					console.log('Hack cmnr game rồi');
				break;
			}
		}
		
};
function holdUp(){
	//Calculator for current score to score of player
	player==1?sp0=sp0+cp0:sp1=sp1+cp1;
	player==1?cp0=0:cp1=0;
	updateScore();
	//Check score more than 100 then player win
	if (sp0>100) {
		alert('Player 1 Win');
		newGame();
	};
	if (sp1>100) {
		alert('Player 2 Win');
		newGame();
	}
	player==1? player=2:player=1;
	console.log('Lượt của người chơi '+player);
	switch(player){
			case 1: 
				document.querySelectorAll('.player-1-panel.active')[0].setAttribute("class", "player-1-panel");
				document.querySelectorAll('.player-0-panel')[0].setAttribute("class", "player-0-panel active");			
			break;
			case 2:
				document.querySelectorAll('.player-0-panel.active')[0].setAttribute("class", "player-0-panel");
				document.querySelectorAll('.player-1-panel')[0].setAttribute("class", "player-1-panel active");	
			break;
			default:
			console.log('Hack cmnr game rồi');
			break;
		}
	
}
