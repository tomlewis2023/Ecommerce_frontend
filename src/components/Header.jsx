import { Link } from "react-router-dom";


const Header = ({ authenticated, setAuthenticated }) => {
    const handleLogout = () => {
      setAuthenticated(false); // Reset authentication state
      alert("Logged out successfully!");
    };
  
    return (
      <header className="header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {authenticated && <li><Link to="/products">Products</Link></li>}
            {!authenticated && <li><Link to="/login">Login</Link></li>}
            {!authenticated && <li><Link to="/signup">Signup</Link></li>}
            {authenticated && (
              <li>
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  };

  export default Header