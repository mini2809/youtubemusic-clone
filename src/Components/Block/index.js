import './index.css';
import { Carousel } from '../Block/Carousel';
import{ Heading } from './Heading';

export function Block(props){
    return(
        <div>
            <Heading small="" main="Listen again" />
            <Carousel id="A" setSelectedSong={props.setSelectedSong} setPlayerVisible={props.setPlayerVisible}/>
            <Heading small="START RADIO FROM A SONG" main="Quick picks"/>
            <Carousel id="B" setSelectedSong={props.setSelectedSong} setPlayerVisible={props.setPlayerVisible}/>
            <Heading small="STRUM. HUM. TAP. REPEAT" main="Winters, Unplugged!"/>
            <Carousel id="C" setSelectedSong={props.setSelectedSong} setPlayerVisible={props.setPlayerVisible}/>
        </div>
    )
}