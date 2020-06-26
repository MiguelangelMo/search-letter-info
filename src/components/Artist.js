import React from 'react';

const Artists = ({ info }) => {
    if (Object.keys(info).length < 1) return null;

    const { strArtistThumb, strArtist, strGenre, strBiographySE } = info;

    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información Artista
            </div>
            <div className="card-body">
                <h2 className="card-text h2">{strArtist}</h2>
                <img src={strArtistThumb} alt="Imagen Del Artista" />
                <div className="card-text"> Genero: {strGenre}</div>
                <div className="card-text font-weigth-bold"> Biografia: </div>
                <div className="card-text"> {strBiographySE}</div>
            </div>
        </div>
    );
}

export default Artists;