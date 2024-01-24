import { useState } from "react";

const Form = () => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.target.search.value);
    };

    return (
        <>
            <h1>Formularios Controlados</h1>
            <hr />

            <form onSubmit={handleSubmit}>
                <input type="text" name="search" autoComplete="off" />
                <button type="submit">Buscar</button>
                <p>Busqueda Pokemon: {search}</p>
            </form>
        </>
    );
};

export default Form;
