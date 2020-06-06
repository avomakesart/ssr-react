import React, { useState, useEffect } from "react";
import {
  HeadPhonesIcon,
  MuteIcon,
  AudioButton,
} from "../components/Layout/Footer/Footer.styles";

const useMultiAudio = (urls) => {
  const [sources] = useState(
    urls.map((url) => {
      return {
        url,
        audio: new Audio(url),
      };
    })
  );

  const [players, setPlayers] = useState(
    urls.map((url) => {
      return {
        url,
        playing: true,
      };
    })
  );

  const toggle = (targetIndex) => () => {
    const newPlayers = [...players];
    const currentIndex = players.findIndex((p) => p.playing === true);
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false;
      newPlayers[targetIndex].playing = true;
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false;
    } else {
      newPlayers[targetIndex].playing = true;
    }
    setPlayers(newPlayers);
  };

  useEffect(() => {
    sources.forEach((source, i) => {
      players[i].playing ? source.audio.play() : source.audio.pause();
    });
  }, [sources, players]);

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener("ended", () => {
        const newPlayers = [...players];
        newPlayers[i].playing = true;
        setPlayers(newPlayers);
      });
    });
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener("ended", () => {
          const newPlayers = [...players];
          newPlayers[i].playing = false;
          setPlayers(newPlayers);
        });
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [players, toggle];
};

const MultiPlayer = ({ urls }) => {
  const [players, toggle] = useMultiAudio(urls);

  return (
    <div>
      {players.map((player, i) => (
        <Player key={i} player={player} toggle={toggle(i)} />
      ))}
    </div>
  );
};

const Player = ({ player, toggle }) => (
  <div className="flex-fixed">
    <AudioButton onClick={toggle}>
      {player.playing ? <MuteIcon /> : <HeadPhonesIcon />}
    </AudioButton>
  </div>
);

export default MultiPlayer;
