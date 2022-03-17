import './Page.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import DoteOne from '../Home/Dotes/DoteOne';
import DoteTwo from '../Home/Dotes/DoteTwo';
import DoteTree from '../Home/Dotes/DoteTree';

const Page = () =>{

    return(
    <div className="page">
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="/" element={<DoteOne active={true}/>}/>
                </Route>
                <Route path="/home" element={<Home mainActive={true}/>}>
                    <Route path="/home" element={<DoteOne/>}/>
                    <Route path="/home/DoteOne" element={<DoteOne active={true}/>}/>
                    <Route path="/home/DoteTwo" element={<DoteTwo active={true}/>}/>
                    <Route path="/home/DoteTree" element={<DoteTree active={true}/>}/>
                </Route>
            </Routes>
        </Router>
    </div>)
}

export default Page;