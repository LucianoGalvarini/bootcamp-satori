import {ReactBootcamp} from "./ReactBootcamp";

require("./bootstrap");

import React from "react";
import {createRoot} from "react-dom/client";
import {Evaluation} from "./bases/Evaluation/Evaluation";

export const App = () => {
    return (
        <div style={{margin: "0 auto"}}>
            <Evaluation />
        </div>
    );
};

createRoot(document.getElementById("root")).render(<App/>);
