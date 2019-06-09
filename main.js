//main
init();
//end of main


function init() {
  var canvas = document.getElementById('mainCanvas');
  var ctx = canvas.getContext('2d');

  //var grid = new Grid(5, 5);

  var grid_margin = 0;

  N=15;
  num_rows= N ? N: 5;
  num_columns=N ? N: 5;
  row_step = canvas.height / num_rows;
  column_step = canvas.width / num_columns;
  // draw column lines
  for ( var i=0; i < canvas.width; i += column_step){
    ctx.beginPath();
    ctx.moveTo(i, grid_margin);
    ctx.lineTo(i, canvas.height-grid_margin);
    ctx.stroke();
  }

  for ( var j=0; j < canvas.height; j += row_step){
    ctx.beginPath();
    ctx.moveTo(grid_margin, j);
    ctx.lineTo(canvas.width-grid_margin, j);
    ctx.stroke();
  }

}


class Grid {
  constructor(num_columns, num_rows){ // height and width are ints denoting the number of squares in column and row respectively
    this.nuw_rows = num_rows;
    this.num_columns = num_columns;

    this.board_state = new Array(length);

    this.row_step = canvas.height / num_rows;
    this.column_step = canvas.width / num_columns;

    //for (var i=0; i < width; i++){
      //  this.board_state[i] = new Array(width);
      //}

      //!! idea:
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
