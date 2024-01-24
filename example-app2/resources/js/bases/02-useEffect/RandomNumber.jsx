import {useState, useEffect} from "react";

const handleFetchRandomNumber = async () => {
    const url = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';
    const response = await fetch(url);
    const data = await response.text();
    return +data;
}
export const RandomNumber = () => {
    const [number, setNumber] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        handleFetchRandomNumber()
            .then(setNumber);
    }, []);

    useEffect(() => {
        if (number) setIsLoading(false);
    }, [number]);

    return (
        <>
            {
                isLoading
                    ? <h1>Loading...</h1>
                    : <h1>Random Number: {number}</h1>
            }
        </>
    )
}
