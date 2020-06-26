import React, { useState } from 'react';
import Error from './Error'

const Form = (props) => {

    const [artista, handleArtista] = useState({
        art: '',
        letter: ''
    });

    const [error, errorState] = useState(false);

    const handleSend = (e) => {
        e.preventDefault();
        if (art.length < 1 && letter.length < 1) {
            errorState(true);
        } else {
            errorState(false);
            props.setstate(artista)
        };
    };

    const handleState = (e) => {
        handleArtista({
            ...artista,
            [e.target.name]: e.target.value,
        })
    };

    const { art, letter } = artista;

    return (
        <div className="bg-info">
            {error ? <Error title="Todos los campos deben estar completados" /> : null}
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={handleSend}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-5 ">
                        <fieldset>
                            <legend className="text-center">
                                {props.title}
                            </legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="artista">
                                            Artista
                                    </label>
                                        <input
                                            type="search"
                                            className="form-control"
                                            name="art"
                                            id="art"
                                            placeholder="Nombre del Artista"
                                            onChange={handleState}
                                            value={art}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="artista">
                                            Canción
                                    </label>
                                        <input
                                            type="search"
                                            className="form-control"
                                            name="letter"
                                            id="letter"
                                            placeholder="Letra de la Canción"
                                            onChange={handleState}
                                            value={letter}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <button
                                        type="submit"
                                        name="enviar"
                                        id="enviar"
                                        className="btn btn-success float-rigth"
                                    >
                                        Buscar...
                                    </button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;