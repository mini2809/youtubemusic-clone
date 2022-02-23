import './index.css';
import image from '../../public/cardsong.jpg';

let songDetails=[
    { 
        "id":1,
        "name":"Kabhi Tumhe",
        "artist":"Javed & Palak Muchhal"
    },
    { 
        "id":2,
        "name":"Tum Hi Aana",
        "artist":"Jubin Nautiyal"
    },
    { 
        "id":3,
        "name":"Naina",
        "artist":"Arijit Singh"
    },
    { 
        "id":4,
        "name":"Phir Se ud Chala",
        "artist":"Mohit Chauhan"
    },
    { 
        "id":5,
        "name":"EK Tukda",
        "artist":"Javed & Palak Muchhal"
    },
    { 
        "id":6,
        "name":"Choo lo",
        "artist":"The Local Train"
    },
    { 
        "id":7,
        "name":"Makhna",
        "artist":"Tanishk Bagchi"
    },
    { 
        "id":8,
        "name":"Rangi Saari",
        "artist":"Kavitha Seth"
    }
]

export function Card(){
    return(
    <div>
        <div className="cardContainer">
            {songDetails.map((song)=>(
                <div>
                    <div className="imageSection"> <img src={image} className="imageDimension" /></div>
                    <div className="descriptionSection">
                        <div className="songName">{song.name}</div>
                        <div className='artist'>Song <div className="whiteDot"></div>{song.artist}</div>
                    </div>
                </div>
        ))}
        </div>
    </div>)
}