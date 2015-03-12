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
  // var board = new Board({n: n});
  // var boardArray = board.rows();
  // var solutionCount = 0;
  // var rookCount = 0;
  // var row = 0;
  // var col = 0;

  //   var boardExplorer = function(){

  //     boardArray.togglePiece(row, col);
  //     rookCount++;

  //     if ( boardArray.hasColConflictAt(col) ) {
  //       boardArray.togglePiece(row, col);
  //       rookCount--;
  //       col++;
  //       boardExplorer();
  //     }
  //     else {
  //       row++;
  //       if (rookCount === n) {
  //         solutionCount++;
  //       }
  //       boardExplorer();
  //     }
  //   };

  //   boardExplorer();
  // };
  // iterate over board row 0 (0-n)
    // toggle piece
    // test for conflict
    // if conflict, then toggle off and continue
    // else, test for solution
      // if solution, increment count
      // if no solution, skip to the next row and recurse

  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
