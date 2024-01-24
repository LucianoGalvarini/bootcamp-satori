import {useState} from 'react';
import {Message} from "./Message";

export const EffectCleanUp = () => {
    const [showComponent, setShowComponent] = useState(false);

    const handleShowComponent = () => {
        setShowComponent(!showComponent);
    }

    return (
        <>
            <h1>Effect Clean Up</h1>
            <hr/>

            <h3>Componente:{' '}
                {
                    showComponent ? 'Componente montado' : 'Componente desmontado'

                }
            </h3>

            {showComponent && <Message/>}

            <button onClick={handleShowComponent}> {showComponent ? 'Desmontar' : 'Montar'} </button>

        </>
    )
}
