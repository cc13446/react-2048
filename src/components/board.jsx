import React, { useState, useEffect } from "react";
import Board from "../core";
import Cell from "./cell";
import Message from "./message";

const BoardView = () => {
  const [board, setBoard] = useState(new Board());

  const cells = board.cells.map((n, index) => {
    return <Cell key={index} number={n} />;
  });

  const copyScoreToClipboard = () => {
    navigator.clipboard.writeText("Your best score is " + board.score);
  };

  const resetGame = () => {
    setBoard(new Board());
  };

  const handleKeyDown = (event) => {
    if (board.finish) {
      return;
    }

    if (event.keyCode >= 37 && event.keyCode <= 40) {
      let direction = event.keyCode - 37;
      let newBoard = Object.assign(
        Object.create(Object.getPrototypeOf(board)),
        board
      );
      newBoard.moveCel(direction);
      newBoard.addRandomCell();
      newBoard.freshFinish();
      setBoard(newBoard);
    }
  };

  const useEvent = (event, handler, passive = false) => {
    useEffect(() => {
      window.addEventListener(event, handler, passive);

      return function cleanUp() {
        window.removeEventListener(event, handler, passive);
      };
    });
  };

  useEvent("keydown", handleKeyDown);

  return (
    <div className="w-[440px] h-[600px] flex flex-col justify-start items-center">
      <div className="w-[420px] mb-5 flex justify-between items-center">
        <Message message="New Game" onClick={resetGame} />
        <Message
          message={`Score: ${board.score}`}
          onClick={copyScoreToClipboard}
        />
      </div>
      <div className="w-[440px] h-[440px] p-[5px] mb-5 bg-teal-700 flex flex-wrap justify-around items-center rounded-xl">
        {cells}
      </div>
      <div hidden={!board.finish}>
        <Message message="Done" onClick={resetGame} />
      </div>
    </div>
  );
};

export default BoardView;
