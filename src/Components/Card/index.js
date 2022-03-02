import './index.css';
import forward from '../../public/scroll-forward.png';
import back from "../../public/scroll-back.png";

let songDetails=[
    { 
        "id":1,
        "name":"Kabhi Tumhe",
        "img":require('../../public/songs/kabhitumhe.jpg'),
        "artist":"Javed & Palak Muchhal"
    },
    { 
        "id":2,
        "name":"Tum Hi Aana",
        "img":require('../../public/songs/tumhiaana.jpg'),
        "artist":"Jubin Nautiyal"
    },
    { 
        "id":3,
        "name":"Naina",
        "img":require('../../public/songs/naina.jpg'),
        "artist":"Arijit Singh"
    },
    { 
        "id":4,
        "name":"Phir Se ud Chala",
        "img":require('../../public/songs/phirseud.jpg'),
        "artist":"Mohit Chauhan"
    },
    { 
        "id":5,
        "name":"EK Tukda",
        "img":require('../../public/songs/ektukda.jpg'),
        "artist":"Javed & Palak Muchhal"
    },
    { 
        "id":6,
        "name":"Choo lo",
        "img":require('../../public/songs/choolo.jpg'),
        "artist":"The Local Train"
    },
    { 
        "id":7,
        "name":"Makhna",
        "img":require('../../public/songs/makhna.jpg'),
        "artist":"Tanishk Bagchi"
    },
    { 
        "id":8,
        "name":"Rangi Saari",
        "img":require('../../public/songs/rangisaari.jpg'),
        "artist":"Kavitha Seth"
    }
]
let startId = 1;

export function Card(){
    return(
    <div className='cardWrapper'>
        <div className='arrow backward' id="arrow-backward" >
            <img alt="backward-arrow" src={back} className="arrow-dimension" />
        </div>
        <div className="cardContainer">
            {songDetails.map((song)=>(
                <div id={song.id} >
                    <div className="imageSection"> <img alt={song.id} src={song.img} className="imageDimension" /></div>
                    <div className="descriptionSection">
                        <div className="songName">{song.name}</div>
                        <div className='artist'>Song <div className="whiteDot"></div>{song.artist}</div>
                    </div>
                </div>
        ))}
        </div>
        <div className='arrow forward' >
            <img alt="forward-arrow" src={forward} className="arrow-dimension" onClick={ ()=>handleForwardArrow()}/>
        </div>
    </div>)
}

function handleForwardArrow(){
    
    let range=3;
    document.getElementById('arrow-backward').style.visibility = "visible";
    document.getElementById(`${startId+range}`).scrollIntoView({'block':'nearest',behavior: "smooth"});;
    startId = startId+range;
    if(startId > songDetails.length)
        startId=songDetails.length-1;
    
}