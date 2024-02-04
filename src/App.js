import React, { useState } from "react";
import ArrayOperationsComponent from "./components/ArrayOperationsComponent";

const App = () => {
    const [showArrayOperations, setShowArrayOperations] = useState(true);

    return (
        <div>
            <h1>Пример хуков</h1>
            <label>
                Show Array Operations Component:
                <input
                    type="checkbox"
                    checked={showArrayOperations}
                    onChange={() => setShowArrayOperations(!showArrayOperations)}
                />
            </label>

            {showArrayOperations && <ArrayOperationsComponent />}
        </div>
    );
};

export default App;
