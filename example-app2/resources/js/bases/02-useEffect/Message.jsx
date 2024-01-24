import {useEffect} from 'react';

export const Message = () => {

    useEffect(() => {
        const handleMouseMove = () => {
            console.log(':)');
        }

        window.addEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <h1>Me renderice</h1>
        </>
    )
}
