import './index.css';
import avatar from '../../public/avatar.png';
import logo from '../../public/youtube.png';
import network from '../../public/network.png';

export function Header(){
    return (<div>
        <div className='headerContainer'>
            <div className="logo">
                <img className='avatar' src={logo}/>
                <div classname="label">Music</div>
            </div>
            <div className='nav'>
                <div>Home</div>
                <div>Explore</div>
                <div>Library</div>
                <div>Search</div>
            </div>
            <div className='avatarDiv'>
            <div className='avatarWrapper'>
                    <img className="avatar" src={network}/>
                </div>
                <div className='avatarWrapper'>
                    <img className="avatar" src={avatar}/>
                </div>
            </div>
        </div>
    </div>);
}