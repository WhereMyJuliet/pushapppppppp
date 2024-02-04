import { useState, useMemo, useCallback } from "react";

const useArrayOperations = (initialArray) => {
    const [array, setArray] = useState(initialArray);

    const sumArray = useMemo(() => {
        console.log("Calculating sumArray");
        return array.reduce((acc, value) => acc + value, 0);
    }, [array]);

    const addToArray = useCallback(
        (value) => {
            setArray((prevArray) => [...prevArray, value]);
        },
        [setArray]
    );

    return { array, sumArray, addToArray };
};

export default useArrayOperations;
