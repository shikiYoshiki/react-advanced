import { useState } from "react";
import "./App.css";
import { profiles } from "./data/profiles.js";
import { ProfileCard } from "./ProfileCard.jsx";

function App() {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    if (index + 1 < profiles.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <>
      <ProfileCard {...profiles[index]} />
      <button onClick={handleClick}>次のプロフィール</button>
    </>
  );
}

export default App;
