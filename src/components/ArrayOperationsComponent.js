import React, { useState } from "react";
import useArrayOperations from "./useArrayOperations";

const ArrayOperationsComponent = () => {
    const [newValue, setNewValue] = useState("");
    const { array, sumArray, addToArray } = useArrayOperations([]);

    const handleAddClick = () => {
        const parsedValue = parseInt(newValue, 10);
        if (!isNaN(parsedValue)) {
            addToArray(parsedValue);
            setNewValue("");
        }
    };

    return (
        <div>
            <h2>Компонент с массивом и операциями</h2>
            <p>Array: {JSON.stringify(array)}</p>
            <p>Sum of Array (мемоизировано): {sumArray}</p>
            <input
                type="text"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
            />
            <button onClick={handleAddClick}>Добавить в массив</button>
        </div>
    );
};

export default ArrayOperationsComponent;
