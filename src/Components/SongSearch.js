import React, { useState, useEffect } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import Error404 from "../pages/Error404";
import Song from "../pages/Song";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import SongsTable from "./SongsTable";

let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];
const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInit);
  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      //console.log(artistUrl, songUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      //console.log(artistRes, songRes);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fetchData();

    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }, [search, mySongs]);

  const handleSaveSongs = () => {
    alert("Guardado en favoritos");
    let current = { search, lyric, bio },
      songs = [...mySongs, current];
    setMySongs((mySongs) => [...mySongs, current]);
    setSearch(null);
    localStorage.setItem("mySongs", JSON.stringify(songs));
  };
  const handleDeleteSongs = (id) => {
    let isDelete = window.confirm(
      `¿Estas seguro de eliminar la cancion con el id= ${id}`
    );

    if (isDelete) {
      let songs = mySongs.filter((el, index) => index !== id);
      setMySongs(songs);
      localStorage.setItem("mySongs", JSON.stringify(songs));
    }
  };
  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <div className="songSearch">
      <HashRouter>
        <header>
          <h2>Song Search</h2>
          <Link to="/songs">Home</Link>
        </header>
        <article className="grid-1-2">
          <Routes>
            <Route path="/" element={<></>} />
            <Route
              path="/songs"
              element={
                <>
                  <SongForm
                    handleSearch={handleSearch}
                    handleSaveSongs={handleSaveSongs}
                  />
                  {loading && <Loader />}
                  <SongsTable
                    mySongs={mySongs}
                    handleDeleteSongs={handleDeleteSongs}
                  />

                  {search && !loading && (
                    <SongDetails search={search} lyric={lyric} bio={bio} />
                  )}
                </>
              }
            />
            <Route path="/songs/:id" element={<Song mySongs={mySongs} />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </article>
      </HashRouter>
    </div>
  );
};

export default SongSearch;
