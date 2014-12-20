var gameBoard = {
  height: 750,
  width:750,
};

var createEnemies = function(n){
  //takes in a number and instantiates that number of objects for the enemies
  var enemyData = [];
  for(var i = 0; i <= n; i++){
    var obj = {};
    obj.x = randomX();
    obj.y = randomY();
    obj.r = 30;
    enemyData.push(obj);
  }
  return enemyData;
}

var playerData = [{x: gameBoard.width/2, y: gameBoard.width/2, r: 10 }]

var Enemy = {

};

var randomX = function(){
  return Math.floor(Math.random() * gameBoard.width);
}

var randomY = function(){
  return Math.floor(Math.random() * gameBoard.height);
}

var currentScore = 0;
var highScore = 0;
var collisionCount = 0;

var scoreIncrementer = function(){
  setTimeout(function(){
  setInterval(function(){
    currentScore++;
    scoreBoard.text('Current Score: ' + currentScore)
    if(currentScore > highScore){
      highScore = currentScore;
      highScoreBoard.text('High Score: ' + highScore);
    }
  }, 100)
  }, 1000)
}

var collisionIncrementer = function(){
  setInterval(function(){
  if(currentScore > highScore){
      highScore = currentScore;
      highScoreBoard.text('Collisions: ' + highScore);
    }
  }, 100)
}

var resetScore = function(){
    currentScore = 0
}

scoreIncrementer();

var scoreBoard = d3.select('.current')
            .text('Current Score: ' + currentScore);

var highScoreBoard = d3.select('.high')
            .text('High Score: ' + highScore);


var board = d3.select('body')
            .append('svg')
            .attr('class', 'SVG')
            .attr('height', gameBoard.height)
            .attr('width', gameBoard.width)



/*var addPlayer = board.selectAll('circle')
            .data(playerData)
            .enter()
            .append('circle')
            .style('fill', 'black')
            .attr('class', 'draggable')
            .attr('cx', gameBoard.width/2)
            .attr('cy', gameBoard.height/2)
            .attr('r', 10)
            //.call(drag)*/

var player = board.selectAll('circle')
            .data(playerData)
            .enter()
            .append('circle')
            .style('fill', 'blue')
            .attr('class', 'playaaaaaa')
            .attr('cx', function(d){return d.x})
            .attr('cy', function(d){return d.y})
            .attr('r', function(d){return d.r})

player.x = gameBoard.width/2
player.y = gameBoard.height/2
player.r = 10

var changeSize = function(){

    return size = Math.floor(Math.random * 10)

}

var addEnemies = board.selectAll('circle')
            .data(createEnemies(1))
            .enter()
            .append('circle')
            .style('fill', function(d){return 'red'})
            .attr('class', 'enemies')
            .attr('cx', function(d){ d.x = randomX();
                                     return d.x })
            .attr('cy', function(d){ d.y = randomY()
                                     return d.y })
            .attr('r', function(d) { return d.r})

var moveEnemies = function(){
  board.selectAll('.enemies')
  .transition()
  .duration(2000)
  .attr('cx', function(d){ d.x = randomX();
                           return d.x })
  .attr('cy', function(d){  d.y = randomY()
                           return d.y })
  .style('fill', function(d){ return 'blue'})
  .style('fill', function(d){ return 'green'})
}

setInterval(moveEnemies, 3000)

var checkEnemyMovement = function(){


  board.selectAll('.enemies')
  .each(function(d){
    var diffX = Math.abs(Math.abs(d3.select('.playaaaaaa').attr('cx')) - Math.abs(d3.select('.enemies').attr('cx')));
    var diffY = Math.abs(Math.abs(d3.select('.playaaaaaa').attr('cy')) - Math.abs(d3.select('.enemies').attr('cy')));
    console.log(diffX, diffY)
    //console.log(d.x, d.y)
    var radii = player.r + d.r;

    var distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    console.log(radii, distance)
    if(distance < radii){
      console.log("HIT");
    }
  })
  }

checkEnemyMovement();

setInterval(checkEnemyMovement, 3000)

var checkCollision = function(){}



var dragmove = d3.behavior.drag()
    .on('drag', function(d,i) {
      player.attr('cx', function(){
        player.x = player.x + d3.event.dx;
        return player.x;
      })
      player.attr('cy', function(){
        player.y = player.y + d3.event.dy;
        return player.y;
      })
});

player.call(dragmove);





/*d3.select('.gameBoard')
  .append('svg:svg')
  .attr('width', gameBoard.width)
  .attr('height', gameBoard.height)
  .append('animate')
  .attr('from', -100)
  .attr('to', 120)
  .attr('repeatCount', 'indefinite')
*/

/*
 d.x += d3.event.dx
    d.y += d3.event.dy
    d3.select(this).attr('transform', function(d,i){
      return "translate( " +  [d.x , + d.y] + ")"*/
