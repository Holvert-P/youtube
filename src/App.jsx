import Basics from "./Components/Basics";
import CrudApi from "./Components/CrudApi";
import Memorization from "./Components/Memorization";
import SongSearch from "./Components/SongSearch";

const App = () => {
  return (
    <>
      <Basics />
      <CrudApi />
      <SongSearch />
      <Memorization />
    </>
  );
};

export default App;
