class Board {
  constructor() {
    this.score = 0;
    this.finish = false;
    this.size = 4;
    this.cells = new Array(this.size * this.size).fill(undefined);

    this.addRandomCell();
    this.addRandomCell();
  }

  canMoveOrMerge(from, to) {
    let max = this.size * this.size;
    if (from >= max || from < 0 || to >= max || to < 0) {
      return false;
    }
    if (this.cells[from] === undefined || this.cells[to] === undefined) {
      return true;
    } else if (this.cells[from] === this.cells[to]) {
      return true;
    }
    return false;
  }

  freshFinish() {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        let index = i * this.size + j;
        if (
          (j !== 0 && this.canMoveOrMerge(index, index - 1)) ||
          (i !== 0 && this.canMoveOrMerge(index, index - this.size))
        ) {
          this.finish = false;
          return;
        }
      }
    }
    this.finish = true;
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

  mergeCellTo(from, to) {
    let max = this.size * this.size;
    if (from >= max || from < 0 || to >= max || to < 0) {
      return false;
    }
    if (this.cells[to] === undefined || this.cells[from] === undefined) {
      return false;
    }
    if (this.cells[to] === this.cells[from]) {
      this.cells[to] += this.cells[from];
      this.cells[from] = undefined;
      this.score += this.cells[to];
      return true;
    }
    return false;
  }

  moveCel(direction) {
    // 0 -> left, 1 -> up, 2 -> right, 3 -> down
    let from = [
      (i, j) => i * this.size + j,
      (i, j) => j * this.size + i,
      (i, j) => i * this.size + (this.size - j - 1),
      (i, j) => (this.size - j - 1) * this.size + i,
    ];
    let to = [
      (from) => (from % this.size === 0 ? -1 : from - 1),
      (from) => from - this.size,
      (from) => ((from + 1) % this.size === 0 ? -1 : from + 1),
      (from) => from + this.size,
    ];

    for (let i = 0; i < this.size; i++) {
      // move
      for (let j = 0; j < this.size; j++) {
        let f = from[direction](i, j);
        let t = to[direction](f);
        while (this.moveCellTo(f, t)) {
          f = t;
          t = to[direction](f);
        }
      }
      // merge
      for (let j = 0; j < this.size; j++) {
        let f = from[direction](i, j);
        let t = to[direction](f);
        this.mergeCellTo(f, t);
      }
      //move again
      for (let j = 0; j < this.size; j++) {
        let f = from[direction](i, j);
        let t = to[direction](f);
        while (this.moveCellTo(f, t)) {
          f = t;
          t = to[direction](f);
        }
      }
    }
  }
}

export default Board;