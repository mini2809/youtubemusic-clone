/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable global-require */
import './index.css';
import { Carousel } from './Carousel';
import { Heading } from './Heading';

const songDetails = [
  {
    id: 1,
    name: 'The Hills',
    img: require('../../public/songs/1.png'),
    artist: 'The New Sounds',
  },
  {
    id: 2,
    name: 'Every-Thing Good',
    img: require('../../public/songs/2.png'),
    artist: 'Aaron Loeb',
  },
  {
    id: 3,
    name: 'Alone',
    img: require('../../public/songs/3.png'),
    artist: 'Shane Mercy',
  },
  {
    id: 4,
    name: 'True Love',
    img: require('../../public/songs/4.png'),
    artist: 'Aaron Loeb',
  },
  {
    id: 5,
    name: 'Don\'t stop',
    img: require('../../public/songs/5.png'),
    artist: 'Sacha Dubois',
  },
  {
    id: 6,
    name: 'Soul Spotlight',
    img: require('../../public/songs/6.png'),
    artist: 'Olivia Wilson',
  },
  {
    id: 7,
    name: 'Window',
    img: require('../../public/songs/7.png'),
    artist: 'Hannah Morales',
  },
  {
    id: 8,
    name: 'Dream High',
    img: require('../../public/songs/8.png'),
    artist: 'Kyrie Patrakis',
  },
];

const songDetails1 = [
  {
    id: 9,
    name: 'Escape room',
    img: require('../../public/songs/9.png'),
    artist: 'Benjamin Shah',
  },
  {
    id: 10,
    name: 'Starry Nights',
    img: require('../../public/songs/10.png'),
    artist: 'Rachelle Beaudry',
  },
  {
    id: 11,
    name: 'Starboy',
    img: require('../../public/songs/11.png'),
    artist: 'Morgan Maxwell',
  },
  {
    id: 12,
    name: 'Heatin up',
    img: require('../../public/songs/12.png'),
    artist: 'Chidi Eze',
  },
  {
    id: 13,
    name: 'High',
    img: require('../../public/songs/13.png'),
    artist: 'Anna Katrina Marchesi',
  },
  {
    id: 14,
    name: 'Static Dreams of Love',
    img: require('../../public/songs/14.png'),
    artist: 'Morgan Maxwell',
  },
  {
    id: 15,
    name: 'Rap God',
    img: require('../../public/songs/15.png'),
    artist: 'Lorem Ipsum',
  },
  {
    id: 16,
    name: 'Sundown',
    img: require('../../public/songs/16.png'),
    artist: 'Helene Paquet',
  },
];

const songDetails2 = [
  {
    id: 17,
    name: 'Details',
    img: require('../../public/songs/17.png'),
    artist: 'Samira Hadid',
  },
  {
    id: 18,
    name: 'Broken',
    img: require('../../public/songs/16.png'),
    artist: 'Adeline Palmestrone',
  },
  {
    id: 6,
    name: 'Soul Spotlight',
    img: require('../../public/songs/6.png'),
    artist: 'Olivia Wilson',
  },
  {
    id: 7,
    name: 'Window',
    img: require('../../public/songs/7.png'),
    artist: 'Hannah Morales',
  },
  {
    id: 8,
    name: 'Dream High',
    img: require('../../public/songs/8.png'),
    artist: 'Kyrie Patrakis',
  },
  {
    id: 14,
    name: 'Static Dreams of Love',
    img: require('../../public/songs/14.png'),
    artist: 'Morgan Maxwell',
  },
  {
    id: 15,
    name: 'Rap God',
    img: require('../../public/songs/15.png'),
    artist: 'Lorem Ipsum',
  },
  {
    id: 16,
    name: 'Sundown',
    img: require('../../public/songs/16.png'),
    artist: 'Helene Paquet',
  },
];

export function Block(props) {
  return (
    <div>
      <Heading small="" main="Listen again" />
      <Carousel id="A" setSelectedSong={props.setSelectedSong} setPlayerVisible={props.setPlayerVisible} songDetails={songDetails} />
      <Heading small="START RADIO FROM A SONG" main="Quick picks" />
      <Carousel id="B" setSelectedSong={props.setSelectedSong} setPlayerVisible={props.setPlayerVisible} songDetails={songDetails1} />
      <Heading small="STRUM. HUM. TAP. REPEAT" main="Winters, Unplugged!" />
      <Carousel id="C" setSelectedSong={props.setSelectedSong} setPlayerVisible={props.setPlayerVisible} songDetails={songDetails2} />
    </div>
  );
}
