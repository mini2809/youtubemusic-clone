import './index.css';

export function Card(props){
    return(
            <div id={props.id} className="songDetails">
                <div className="imageSection"> <img alt="cover" src={props.img} className="imageDimension" /></div>
                <div className="descriptionSection">
                    <div className="songName">{props.name}</div>
                    <div className='artist'>Song <div className="whiteDot"></div>{props.artist}</div>
                </div>
            </div>
            
        )
}


