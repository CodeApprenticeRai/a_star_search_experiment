
function init(canvas, ctx) {

  N=15;
  num_rows= N ? N: 5;
  num_columns=N ? N: 5;

  var grid = new Grid(canvas, num_rows, num_columns);

  var grid_margin = 0;
  row_step = canvas.height / num_rows;
  column_step = canvas.width / num_columns;

  // draw gridlines
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

  // it erate squres, do some conditional logic on to format each based on the board state
  // for ( var i=0; i < grid.board_state.length; i++){
  //   for (var j=0; j < grid.board_state[i].length; j++){
  //     sqaure_state = grid.board_state[i][j];
  //     if (square_state == 1){
  //       ctx.fillStyle = 'green';
  //       ctx.fillRect( i*column_step, j*row_step,column_step, row_step);
  //     }
  //     else if (square_state == 2){
  //       ctx.fillStyle = 'grey';
  //       ctx.fillRect( i*column_step, j*row_step,column_step, row_step);
  //     }
  //     else if (square_state == 3){
  //       ctx.fillStyle = 'red';
  //       ctx.fillRect( i*column_step, j*row_step,column_step, row_step);
  //     }
  //   }
  // }
  // ctx.fillStyle = 'grey';
  // ctx.fillRect( 5*column_step, 5*row_step,column_step, row_step);
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc( 5*column_step + column_step/2, 5*row_step + row_step/2, column_step-30, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}


class Grid {
  constructor(canvas, num_columns, num_rows){ // height and width are ints denoting the number of squares in column and row respectively
    this.nuw_rows = num_rows;
    this.num_columns = num_columns;

    this.board_state = new Array(num_rows);

    for (var i=0; i < num_rows; i++){
      this.board_state[i] = new Array(num_columns);
      for (var j=0; j < num_columns; j++){
          this.board_state[i][j] = 0;
      }
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
