import '../App.css';
import {Link} from 'react-router-dom';

const Header = () =>{
    const isAuthenticated = localStorage.getItem('authenticated');
    const handleLogout = () =>{
        localStorage.clear();
    }
    return (
        <div className="containerFluid">
            <nav className="navbar navbar-expand-lg navbar-fixed">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                   <h1 className='text-danger'> Flicked</h1>
                </Link>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar"
                aria-controls="navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                {isAuthenticated &&
                <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link className="nav-link link" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link link" to="/create">Create</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link link" to="/profile">Profile</Link>
                    </li>
                    {/* <li className="nav-item">
                    <Link className="nav-link link" to="/details/:id">Details</Link>
                    </li> */}
                    <li className="nav-item">
                    <Link className="nav-link link" to="/" onClick={handleLogout}>Logout</Link>
                    </li>
                </ul>
                </div>}
            </div>
            </nav> 
      </div>
    ) 
   
}
export default Header;


