import React from "react";
import ReactDOM from "react-dom/client";
import Board from "./components/board";

import github from "./images/github.svg"

import "./index.css";

const App = () => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center bg-gradient-to-r from-cyan-800 to-emerald-600">
            <div className="h-fit w-[440px] flex justify-center items-center flex-col">
                <h1 className="text-5xl text-white mb-10">React 2048</h1>
                <Board />
            </div>
            <div className="flex justify-center items-center text-gray-300">
                About:
                <a className="inline-block ml-2" href="http://github.com/cc13446">
                    <img alt="github" class="w-6 h-6" src={github} />{" "}
                </a>{" "}
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
