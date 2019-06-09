
function init(canvas, ctx) {

  N=15;
  num_rows= N ? N: 5;
  num_columns=N ? N: 5;

  var grid = new Grid(canvas, num_rows, num_columns);

  var grid_margin = 0;
  row_step = canvas.height / num_rows;
  column_step = canvas.width / num_columns;
  // draw column lines
  for ( var i=0; i < canvas.width; i += this.column_step){
    ctx.beginPath();
    ctx.moveTo(i, grid_margin);
    ctx.lineTo(i, canvas.height-grid_margin);
    ctx.stroke();
  }

  for ( var j=0; j < canvas.height; j += this.row_step){
    ctx.beginPath();
    ctx.moveTo(grid_margin, j);
    ctx.lineTo(canvas.width-grid_margin, j);
    ctx.stroke();
  }

  // iterate squres, do some conditional logic on to format each based on the board state

}


class Grid {
  constructor(canvas, num_columns, num_rows){ // height and width are ints denoting the number of squares in column and row respectively
    this.nuw_rows = num_rows;
    this.num_columns = num_columns;

    this.board_state = new Array(num_rows);

    for (var i=0; i < num_rows; i++){
       this.board_state[i] = new Array(num_columns);
    }
  }
}


class BoardObject{
}

class FailureSquare extends BoardObject {

}

class GoalSquare extends BoardObject {

}

class BlockedSqaure extends BoardObject {

}

class Agent extends BoardObject{

}


//main
var canvas = document.getElementById('mainCanvas');
var ctx = canvas.getContext('2d');
init(canvas, ctx);
//end of main
