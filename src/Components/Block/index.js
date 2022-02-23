import './index.css';
import {Carousel} from '../Block/Carousel';
import{Heading } from './Heading';

export function Block(){
    return(
        <div>
            <Heading small="" main="Listen again"/>
            <Carousel />
            <Heading small="START RADIO FROM A SONG" main="Quick picks"/>
            <Carousel />
            <Heading small="STRUM. HUM. TAP. REPEAT" main="Winters, Unplugged!"/>
            <Carousel />
        </div>
    )
}