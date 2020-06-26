import React, { useState, useEffect } from 'react';
import Form from './Form';
import Song from './Song';
import Artists from './Artist';
import '../css/App.css';

function App() {

  const [state, setstate] = useState({});
  const [cancion, cancionState] = useState("");
  const [info, saveInfo] = useState({});

  const { art, letter } = state;

  useEffect(() => {

    if (Object.keys(state).length < 1) return;

    const api = async () => {

      const [Subletterns, Subinfo] = await Promise.all([
        fetch(`https://api.lyrics.ovh/v1/${art}/${letter}`),
        fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${art}`),
      ])

      const [lettern, info] = await Promise.all([
        Subletterns.json(),
        Subinfo.json(),
      ]);
      cancionState(lettern.lyrics);
      saveInfo(info.artists[0])
    }

    api();
  }, [state, info, cancion]);

  return (
    <div className="container">
      <Form
        title="Buscar Letras de Canciones"
        setstate={setstate} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Artists
              info={info}
            />
          </div>
          <div className="col-md-6">
            <Song
              cancion={cancion}
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
