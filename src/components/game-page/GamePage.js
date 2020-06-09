import React, { useState } from "react";
import CompareDogs from "../compare-dogs/CompareDogs";
import { useHistory } from "react-router-dom";

function GamePage() {
  const history = useHistory();
  const handleNext = (index) => {
    console.log(currRound, nextRound);
    if (currRound.length === 0) {
      if (nextRound.length === 0) {
        history.push(`/winner/${index}`);
      } else {
        const [dog1, dog2, ...restOfNextRound] = [...nextRound, index];
        setCurrMatchUp({ dog1, dog2 });
        setCurrRound(restOfNextRound);
        setNextRound([]);
      }
    } else {
      setNextRound([...nextRound, index]);
      const [dog1, dog2, ...restOfCurrRound] = currRound;
      setCurrMatchUp({ dog1, dog2 });
      setCurrRound(restOfCurrRound);
    }
  };

  const [{ dog1, dog2 }, setCurrMatchUp] = useState({ dog1: 1, dog2: 2 });
  const [currRound, setCurrRound] = useState([3, 4]);
  const [nextRound, setNextRound] = useState([]);

  return <CompareDogs dogIndex1={dog1} dogIndex2={dog2} onNext={handleNext} />;
}

export default GamePage;
