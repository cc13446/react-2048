class Board {
  constructor() {
    this.score = 0;
    this.finish = false;
    this.size = 4;
    this.cells = new Array(this.size * this.size).fill(undefined);

    this.deltaX = [-1, 0, 1, 0];
    this.deltaY = [0, -1, 0, 1];

    this.addRandomCell();
    this.addRandomCell();
  }

  addRandomCell() {
    let emptyCells = [];
    for (let i = 0; i < this.size * this.size; i++) {
      if (this.cells[i] === undefined) {
        emptyCells.push(i);
      }
    }
    let index = ~~(Math.random() * emptyCells.length);
    let cell = emptyCells[index];
    let newValue = Math.random() > 0.75 ? 4 : 2;
    this.cells[cell] = newValue;
  }

  moveCellTo(from, to) {
    let max = this.size * this.size;
    if (from >= max || from < 0 || to >= max || to < 0) {
        return false;
    }
    if (this.cells[to] === undefined) {
      this.cells[to] = this.cells[from];
      this.cells[from] = undefined;
      return true;
    }
    return false;
  }

  moveCel(direction) {
    // 0 -> left, 1 -> up, 2 -> right, 3 -> down
    let moveFrom = [
        (i, j) => i * this.size + j,
    ];
    let moveTo = [
        (from) => from % this.size === 0 ? -1 : from - 1
    ];

    for (let i = 0; i < this.size; i++) {
      // move
      for (let j = 0; j < this.size; j++) {
        let index = moveFrom[direction](i, j);
        let to = moveTo[direction](index);
        while(this.moveCellTo(index, to)) {
            index = to;
            to = moveTo[direction](index);
        }
      }
      // merge
      for (let j = 0; j < this.size; j++) {}
      //move again
      for (let j = 0; j < this.size; j++) {}
    }

  }
}

export default Board;