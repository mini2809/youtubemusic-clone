import {Card} from '../../Card';
import forward from '../../../public/scroll-forward.png';
import back from "../../../public/scroll-back.png";
import React , { useEffect } from 'react';


export function Carousel(props){
    useEffect(()=>{
        calculateDynamicRangeBasedonViewPort();
    })
    return(
        <div className='cardWrapper'>
            
            <div className='arrow backward' id={props.id+"arrow-backward"} onClick={()=>handleBackwardArrow(props.id)}>
                <img alt="backward-arrow" src={back} className="arrow-dimension"  />
            </div>
            <div className="cardContainer">
                {props.songDetails.map((song)=>(
                   <Card id={props.id + song.id} name={song.name} artist={song.artist} img={song.img} setSelectedSong={props.setSelectedSong} setPlayerVisible={props.setPlayerVisible}/>
                ))}
            </div>
            <div className='arrow forward' id={props.id+"arrow-forward"} onClick={ ()=>handleForwardArrow(props.id)} >
                <img alt="forward-arrow" src={forward} className="arrow-dimension" />
            </div>
           
        </div>
    )
}

let lastId = 3;
let range;

function calculateDynamicRangeBasedonViewPort(){
    if(window.innerWidth < 500)
        range = 2;
    else if(window.innerWidth > 500 && window.innerWidth < 800)
        range = 3;
    else
        range = 5;
}


function handleForwardArrow(id, songDetails){
    document.getElementById(id+'arrow-backward').style.visibility = "visible";
    lastId = lastId+range;
    let domLastId =id+lastId;
    if(lastId > songDetails.length){
        domLastId=songDetails.length;
        domLastId =id+domLastId
        document.getElementById(id+'arrow-forward').style.visibility = "hidden";
    }
        document.getElementById(`${domLastId}`).scrollIntoView({'block':'nearest',behavior: "smooth"});
    
}
function handleBackwardArrow(id, songDetails){
    document.getElementById(id+'arrow-forward').style.visibility = "visible";
    lastId = lastId-range;
    let domLastId  = id+lastId;
    if(lastId < 1){
        domLastId=id+1;
        document.getElementById(id+'arrow-backward').style.visibility = "hidden";
    }
        document.getElementById(`${domLastId}`).scrollIntoView({'block':'nearest',behavior: "smooth"});
    
}