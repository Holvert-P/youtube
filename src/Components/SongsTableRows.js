import React from "react";
import { useNavigate } from "react-router-dom";

const SongsTableRows = ({ id, el, handleDeleteSongs }) => {
  let { bio, search } = el;
  let avatar = bio.artists ? bio.artists[0].strArtistThumb : "";
  const navigate = useNavigate();
  return (
    <>
      <tr>
        <td>
          <img src={avatar} alt={search.artist} className="avatar" />
        </td>
        <td>{search.artist}</td>
        <td>{search.song}</td>
        <td>
          <button onClick={() => navigate(`/songs/${id}`)} className="btn-edit">
            Ver
          </button>
          <button onClick={() => handleDeleteSongs(id)} className="btn-delete">
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
};

export default SongsTableRows;
