import React, { Fragment, useState } from 'react'


const Song = ({cancion}) => {

    if (cancion.length < 1) return null;
    return (
        <Fragment>
            <h2> Letra de canción </h2>
            <p className="letra">{cancion}</p>
        </Fragment>
    );
};

export default Song;