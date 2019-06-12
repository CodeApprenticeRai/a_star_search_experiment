class App {
  constructor(){
    this.canvas = document.getElementById('mainCanvas');
    this.ctx = this.canvas.getContext('2d');

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    var N=15;
    this.num_rows= N ? N: 5;
    this.num_columns=N ? N: 5;

    // initialize the board state as a 2d array
    this.board_state = new Array(this.num_rows);

    for (var i=0; i < this.num_rows; i++){
      this.board_state[i] = new Array(this.num_columns);
      for (var j=0; j < this.num_columns; j++){
          this.board_state[i][j] = 0;
      }
    }

    this.grid_margin = 0;
    this.row_step = this.canvas.height / this.num_rows;
    this.column_step = this.canvas.width / this.num_columns;

    // draw gridlines
    for ( var i=0; i < this.canvas.width; i += this.column_step){
      this.ctx.beginPath();
      this.ctx.moveTo(i, this.grid_margin);
      this.ctx.lineTo(i, this.canvas.height-this.grid_margin);
      this.ctx.stroke();
    }
    for ( var j=0; j < this.canvas.height; j += this.row_step){
      this.ctx.beginPath();
      this.ctx.moveTo(this.grid_margin, j);
      this.ctx.lineTo(this.canvas.width-this.grid_margin, j);
      this.ctx.stroke();
    }

    // it erate squres, do some conditional logic on to format each based on the board state
    // for ( var i=0; i < grid.board_state.length; i++){
    //   for (var j=0; j < grid.board_state[i].length; j++){
    //     sqaure_state = grid.board_state[i][j];
    //     if (square_state == 1){
    //       this.ctx.fillStyle = 'green';
    //       this.ctx.fillRect( i*this.column_step, j*this.row_step,this.column_step, this.row_step);
    //     }
    //     else if (square_state == 2){
    //       this.ctx.fillStyle = 'grey';
    //       this.ctx.fillRect( i*this.column_step, j*this.row_step,this.column_step, this.row_step);
    //     }
    //     else if (square_state == 3){
    //       this.ctx.fillStyle = 'red';
    //       this.ctx.fillRect( i*this.column_step, j*this.row_step,this.column_step, this.row_step);
    //     }
    //   }
    // }
    // this.ctx.fillStyle = 'grey';
    // this.ctx.fillRect( 5*this.column_step, 5*this.row_step,this.column_step, this.row_step);

    this.ctx.beginPath();
    this.ctx.fillStyle = 'black';
    this.ctx.arc( 5*this.column_step + this.column_step/2, 5*this.row_step + this.row_step/2, this.column_step-30, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
  }
}


function keyDownHandler(event){
  if (event.keyCode == 38){
    upPressed = true;
  }
  else if (event.keyCode == 40){
    downPressed = true;
  }
  else if (event.keyCode == 37){
    leftPressed = true;
  }
  else if (event.keyCode == 39){
    rightPressed = true;
  }
}

function keyUpHandler(event){
  if (event.keyCode == 38){
    upPressed = false;
  }
  else if (event.keyCode == 40){
    downPressed = false;
  }
  else if (event.keyCode == 37){
    leftPressed = false;
  }
  else if (event.keyCode == 39){
    rightPressed = false;
  }
}

// class Grid {
//   constructor(this.canvas, this.num_columns, num_rows){ // height and width are ints denoting the number of squares in column and row respectively
//     this.nuw_rows = num_rows;
//     this.this.num_columns = this.num_columns;
//
//     this.board_state = new Array(num_rows);
//
//     for (var i=0; i < num_rows; i++){
//       this.board_state[i] = new Array(this.num_columns);
//       for (var j=0; j < this.num_columns; j++){
//           this.board_state[i][j] = 0;
//       }
//     }
//   }
// }


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
var app = new App();
//end of main
