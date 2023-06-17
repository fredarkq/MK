import { useState } from "react";
import FighterSelection from "./pages/FighterSelection/FighterSelection";
import VSpage from "./pages/VSpage/VSpage";

const App = () => {
  const [allFightersSelected, setAllFightersSelected] = useState(false);
  const [fightersInfo, setFightersInfo] = useState({});

  return (
    <>
      {!allFightersSelected ? (
        <FighterSelection
          setAllFightersSelected={setAllFightersSelected}
          setFightersInfo={setFightersInfo}
        />
      ) : (
        <VSpage
          fightersInfo={fightersInfo}
          setAllFightersSelected={setAllFightersSelected}
        />
      )}
    </>
  );
};

export default App;
