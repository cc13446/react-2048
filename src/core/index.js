class Board {
    constructor() {
        this.score = 0;
        this.finish = false;
        this.size = 4;
        this.cells = new Array(this.size * this.size).fill(1024);
    }
}

export default Board;