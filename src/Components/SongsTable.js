import React from "react";
import SongsTableRows from "./SongsTableRows";

const SongsTable = ({ mySongs, handleDeleteSongs }) => {
  return (
    <section>
      <h2>Tus Favoritas</h2>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Artista</th>
            <th>Cancion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mySongs.length > 0 ? (
            mySongs.map((el, index) => (
              <SongsTableRows
                key={index}
                el={el}
                id={index}
                handleDeleteSongs={handleDeleteSongs}
              />
            ))
          ) : (
            <>
              <tr>
                <td colSpan="4">Sin canciones</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default SongsTable;
