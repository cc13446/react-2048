import React, { useState, useEffect, useCallback } from "react";
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

    const move = useCallback(
        (direction) => {
            let newBoard = Object.assign(
                Object.create(Object.getPrototypeOf(board)),
                board
            );
            newBoard.moveCel(direction);
            newBoard.addRandomCell();
            newBoard.freshFinish();
            setBoard(newBoard);
        },
        [board, setBoard]
    );

    const handleKeyDown = (event) => {
        if (board.finish) {
            return;
        }

        if (event.keyCode >= 37 && event.keyCode <= 40) {
            let direction = event.keyCode - 37;
            move(direction);
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

    useEffect(() => {
        let firstX = 0;
        let firstY = 0;

        const touchStart = (event) => {
            event.stopPropagation();
            event.preventDefault();
            firstX = event.touches[0].clientX;
            firstY = event.touches[0].clientY;
        };

        const touchEnd = (event) => {
            event.stopPropagation();
            event.preventDefault();
            console.log(event);
            let moveX = event.changedTouches[0].clientX - firstX;
            let moveY = event.changedTouches[0].clientY - firstY;
            if (Math.abs(moveX) > 100 || Math.abs(moveY) > 100) {
                if (Math.abs(moveX) > Math.abs(moveY)) {
                    let direction = moveX > 0 ? 2 : 0;
                    move(direction);
                } else {
                    let direction = moveY < 0 ? 1 : 3;
                    move(direction);
                }
            }
        };

        let b = document.getElementById("board");
        b.addEventListener("touchstart", touchStart, { passive: false });
        b.addEventListener("touchend", touchEnd, { passive: false });

        return function cleanUp() {
            b.removeEventListener("touchstart", touchStart, { passive: false });
            b.removeEventListener("touchend", touchEnd, { passive: false });
        };
    }, [move]);

    return (
        <div className="w-[440px] h-[600px] flex flex-col justify-start items-center">
            <div className="w-[420px] mb-5 flex justify-between items-center">
                <Message message="New Game" onClick={resetGame} />
                <Message
                    message={`Score: ${board.score}`}
                    onClick={copyScoreToClipboard}
                />
            </div>
            <div
                id="board"
                className="w-[440px] h-[440px] p-[5px] mb-5 bg-teal-700 flex flex-wrap justify-around items-center rounded-xl"
            >
                {cells}
            </div>
            <div hidden={!board.finish}>
                <Message message="Done" onClick={resetGame} />
            </div>
        </div>
    );
};

export default BoardView;
