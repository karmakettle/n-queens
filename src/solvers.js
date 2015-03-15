/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution;
  var board = new Board({n: n});
  var rookCount = 0;
  var row = 0;
  var col = 0;

    var boardExplorer = function(){

      board.togglePiece(row, col);
      rookCount++;

      if ( board.hasColConflictAt(col) ) {
        board.togglePiece(row, col);
        rookCount--;
        col++;
        boardExplorer();
      }
      else {
        row++;
        if (rookCount === n) {
          solution = board.rows();
          return;
        }
        boardExplorer();
      }
    };

  boardExplorer();

  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  var row = 0;

  var boardExplorer = function(row){
    // if we're on row 4, we have a soln
    if ( row === n ) {
      solutionCount++;
      return;
    }
    for ( var col = 0; col < n; col++ ) {
      // place a piece, toggle it
      board.togglePiece(row, col);
      // if there's no conflict
      if ( !board.hasAnyRooksConflicts() ) {
        // recurse on row+1 so that rows will increment
        boardExplorer(row + 1);
      }
      // remove piece once we're ready to move on to the next decision
      board.togglePiece(row, col);
    }

  };

  boardExplorer(row);

  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var row = 0;
  var solnFlag = false;

  var boardExplorer = function(row){
    // if we're on row 4, we have a soln
    if ( row === n ) {
      solnFlag = true;
      return;
    }

    for ( var col = 0; col < n; col++ ) {
      // place a piece, toggle it
      board.togglePiece(row, col);
      // if there's no conflict
      if ( !board.hasAnyQueensConflicts() ) {
        // recurse on row+1 so that rows will increment
        boardExplorer(row + 1);
        if ( solnFlag ) {
          return;
        }
      }

      // remove piece once we're ready to move on to the next decision
      board.togglePiece(row, col);
    }

  };

  boardExplorer(row);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(board.rows()));
  return board.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  var row = 0;

  var boardExplorer = function(row){
    // if we're on row 4, we have a soln
    if ( row === n ) {
      solutionCount++;
      return;
    }
    for ( var col = 0; col < n; col++ ) {
      // place a piece, toggle it
      board.togglePiece(row, col);
      // if there's no conflict
      if ( !board.hasAnyQueensConflicts() ) {
        // recurse on row+1 so that rows will increment
        boardExplorer(row + 1);
      }
      // remove piece once we're ready to move on to the next decision
      board.togglePiece(row, col);
    }

  };

  boardExplorer(row);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
