import React from "react";
import CompareDogs from "../compare-dogs/CompareDogs"

const handleNext = () => {
    // Fill this in
}

function GamePage() {
  return (
      <CompareDogs dogIndex1={3} dogIndex2={2} onNext={handleNext} />
  );
}

export default GamePage;
