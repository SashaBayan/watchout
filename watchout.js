var circles = [1,2,3,4,5,6,7,8,9]
var playerData = [1]

var gameBoard = {
  height: 750,
  width:750,
};

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
            .attr('cx', gameBoard.width/2)
            .attr('cy', gameBoard.height/2)
            .attr('r', 10)

player.x = gameBoard.width/2
player.y = gameBoard.height/2

var addEnemies = board.selectAll('circle')
            .data(circles)
            .enter()
            .append('circle')
            .style('fill', function(d){return 'red'})
            .attr('class', 'enemies')
            .attr('cx', function(d){ return randomX() })
            .attr('cy', function(d){ return randomY() })
            .attr('r', 10)
            .attr('transform', function(d){
              setTimeout(d, function(){
                this.attr('cx', function(d){ return randomX() })
                    .attr('cy', function(d){ return randomY() })
              }, 1000)
            })

var moveEnemies = function(){
  board.selectAll('.enemies')
  .transition()
  .duration(2000)
  .attr('cx', function(d){ return randomX() })
  .attr('cy', function(d){ return randomY() })
  .style('fill', function(d){ return 'blue'})
  .style('fill', function(d){ return 'green'})
}

setInterval(moveEnemies, 3000)

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
