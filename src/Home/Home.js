import './Home.css';
import DoteOne from './Dotes/DoteOne';

import { Outlet } from 'react-router-dom';
import NavBar from '../Nav-bar/Nav-bar';
import Dote from '../Dote/Dote';

const Home = () =>{
    let active=0
    return(
    <div className="home">
        <NavBar active={active}/>
        <Outlet/>
        <Dote/>
    </div>)
}

export default Home;
