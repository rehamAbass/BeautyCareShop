import './music.css'
import { useState, useEffect } from 'react'
import { MdPlayArrow, MdPause } from 'react-icons/md'
import  React  from 'react'
import ed from "./ed.mp3";

const aud = new Audio(ed);

const Music = () => {
    const [flagPlaying, setIsActive] = useState(false);
    const handleClick = (value) => {
        setIsActive(value); 
        if (value === true) { 
            aud.loop = true;
            aud.play();
        } else { 
            aud.pause();
            aud.loop = false;
        }
    }

    return (<div className='myAudio'>
        {(flagPlaying === false) &&
            <MdPlayArrow
                className='btnAudio'
                onClick={() => {
                    if (flagPlaying === false) {
                        handleClick(true);
                    }
                }}
            />
        }
        {(flagPlaying === true) &&
            <MdPause
                className='btnAudio'
                style={{color:'black'}}
                onClick={() => {
                    if (flagPlaying === true) {
                        handleClick(false);
                    }
                }}
            />
        }
    </div>
    )
}


export default Music;


