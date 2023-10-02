import React, { useState } from "react";
import Board from "../core";
import Message from "./message";

const BoardView = () => {
  const [board, setBoard] = useState(new Board());

  return (
    <div className="flex justify-between items-center min-w-[360px]">
      <Message message="New Game" />
      <Message message={`Score: ${board.score}`} />
    </div>
  );
};

export default BoardView;
