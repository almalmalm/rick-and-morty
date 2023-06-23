import { useEffect, useState } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Wallpaper from './components/Wallpaper';
import axios from 'axios';
import Character from './components/Character';

async function getCharacterName() {
  try {
    const characterId = Math.floor(Math.random() * (826 - 1 + 1)) + 1;
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

function App() {
  const [characterName, setCharacterName] = useState(null);
  const [characterImg, setCharacterImg] = useState(null);
  const [character, setCharacter] = useState(false);

  const characterHandler = (status: boolean) => {
    setCharacter(!status);
  };

  useEffect(() => {
    getCharacterName().then((character) => {
      setCharacterName(character.name);
      setCharacterImg(character.image);
    });
  }, []);

  return (
    <div className=" bg-[#04061c] tablet:bg-[#1c1f1a]">
      {!character && (
        <>
          <Header />
          {characterName && (
            <Button
              text={characterName}
              color="#fbfcff"
              onClick={() => {
                characterHandler(character);
              }}
            />
          )}
          <Wallpaper />
        </>
      )}
      {character && characterImg && characterName && (
        <>
          <Character img={characterImg} name={characterName} />
          <Button
            text="Back"
            color="#fbfcff"
            onClick={() => {
              characterHandler(character);
            }}
          />
        </>
      )}
    </div>
  );
}

export default App;
