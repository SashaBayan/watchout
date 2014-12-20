var circles = [1,2,3,4,5,6,7,8,9]


var gameBoard = {
  height: 750,
  width:750,
};

var Enemy = {

};

var player = {};

var board = d3.select('body')
            .append('svg')
            .attr('class', 'SVG')
            .attr('height', gameBoard.height)
            .attr('width', gameBoard.width)





var addEnemies = board.selectAll('circle')
            .data(circles)
            .enter()
            .append('circle')
            .style('fill', function(d){return 'red'})

            .attr('cx', function(d){ return Math.floor(Math.random() * gameBoard.width)})
            .attr('cy', function(d){ return Math.floor(Math.random() * gameBoard.height)})
            .attr('r', 10)
            .call(force.drag)

/*d3.select('.gameBoard')
  .append('svg:svg')
  .attr('width', gameBoard.width)
  .attr('height', gameBoard.height)
  .append('animate')
  .attr('from', -100)
  .attr('to', 120)
  .attr('repeatCount', 'indefinite')
*/
