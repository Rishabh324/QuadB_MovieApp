import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav-cont'>
            <p className='brand'>
                <Link to='/'>
                    <p>TvMaze</p>
                </Link>
            </p>
            <div className='link-cont'>
                <div className='link1'>
                    <Link to='/'><p>Home</p></Link>
                </div>
                <div className='link2'>
                    <Link to='/about'><p>About us</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;