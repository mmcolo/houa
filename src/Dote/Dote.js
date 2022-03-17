import './Dote.css';
import { Link} from 'react-router-dom';

const Dote = (props) =>{
    let active ="active";

    return(
    <div className="dote-box">
            <div className={`dote ${active}`}>
                <Link to='/home/DoteOne'>
                    <div className="dote-link active"></div>
                </Link>
            </div>
            <div className="dote">
                <Link to='/home/DoteTwo'>
                    <div className="dote-link"></div>
                </Link>
            </div>
            <div className="dote">
                <Link to='/home/DoteTree'>
                    <div className="dote-link"></div>
                </Link>
            </div>
    </div>)
}

export default Dote;