import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a> */}
                 <span>My Website</span>
                <Link to="/">Home</Link>
                {/* <Link to="/users">Users</Link> */}
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            
        </div>
    );
};

export default Header;