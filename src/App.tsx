import { useEffect, useState } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Wallpaper from './components/Wallpaper';
import axios from 'axios';

async function getCharacterName() {
  try {
    const characterId = Math.floor(Math.random() * (826 - 1 + 1)) + 1;
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    return response.data.name;
  } catch (error) {
    console.error(error);
  }
}

function App() {
  const [characterName, setCharacterName] = useState(null);

  useEffect(() => {
    getCharacterName().then((character) => {
      setCharacterName(character);
    });
  }, []);

  return (
    <>
      <Header />
      {characterName && <Button text={characterName} />}
      <Wallpaper />
    </>
  );
}

export default App;
