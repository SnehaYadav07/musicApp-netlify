import { useEffect, useState } from "react";
import Player from "./components/Player";
import './components/style.css'
function App() {
  const [songs]=useState([
    {
      title:"Nach Meri Rani",
      artist:"Guru Randhava",
      img_src:"./images/nach-meri-rani.jpg",
      src:"./music/public_music_Naach Meri Rani.mp3"
    },
    {
      title:"Patola",
      artist:"Guru Randhava,",
      img_src:"./images/blackmail-2018-250.jpg",
      src:"./music/320kbps_Blackmail 2018 - Patola.mp3"
    },
    {
      title:"Baby Girl",
      artist:"Guru Randhava,",
      img_src:"./images/Baby Girl-15192-hd.jpg",
      src:"./music/Baby Girl-5f85caebf2490.mp3"
    },
    {
      title:"Suit Suit",
      artist:"Guru Randhava,",
      img_src:"./images/hindi-medium-2017-250.jpg",
      src:"./music/bollywood_HM 2017 - Suit Suit.mp3"
    },
    {
      title:"Ishq Tera",
      artist:"Guru Randhava,",
      img_src:"./images/id3Picture_995462699.jpg",
      src:"./music/Ishq Tera - Guru Randhawa 128 Kbps.mp3"
    },
    {
      title:"Downtown",
      artist:"Guru Randhava,",
      img_src:"./images/downtown-guru-randhawa-250.jpg",
      src:"./music/new_192_Downtown - Guru Randhawa.mp3"
    },
    {
      title:"Ishare Tere",
      artist:"Guru Randhava,",
      img_src:"./images/ishare-tere-guru-randhawa-250.jpg",
      src:"./music/new_192_Ishare Tere - Guru Randhawa.mp3"
    },
    {
      title:"Lahore",
      artist:"Guru Randhava,",
      img_src:"./images/lahore-guru-randhawa-250.jpg",
      src:"./music/new_192_Lahore - Guru Randhawa.mp3"
    },
    {
      title:"Nach Meri Rani",
      artist:"Guru Randhava,",
      img_src:"./images/nach-meri-rani.jpg",
      src:"./music/public_music_Naach Meri Rani.mp3"
    }
    
  ])

  const [currentSongIndex,setCurrentSongIndex]=useState(0);
  const [nextSongIndex,setNextSongIndex]=useState(0);

  useEffect(() => {
     setNextSongIndex(() => {
      if(currentSongIndex+1>songs.length-1){
        return 0
      }else{
        return currentSongIndex+1
      }
     })
  },[currentSongIndex,songs.length])

  return (
    <>
    <div className="App">
      <div className="app-content">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
        />
      </div>
      
    </div>
    </>
  );
}

export default App;
