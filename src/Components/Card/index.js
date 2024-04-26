import './index.css';

export function Card(props){
    return(
            <div id={props.id} className="songDetails" onClick={()=>handleClick(props)}>
                <div className="imageSection"> <img alt="cover" src={props.img} className="imageDimension" /></div>
                <div className="descriptionSection">
                    <div className="songName">{props.name}</div>
                    <div className='artist'>Song <div className="whiteDot"></div>{props.artist}</div>
                </div>
            </div>
            
        )
}

function handleClick(props){
    props.setSelectedSong({name:props.name,image: props.img,artist: props.artist})
    props.setPlayerVisible(true);
}


