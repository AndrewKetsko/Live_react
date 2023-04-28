import { Link } from 'react-router-dom';
import { UserMenu } from './UserMenu';
import { useSelector } from 'react-redux';


export const AppBar = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
      }}
    >
      <nav>
        {!isLoggedIn && <Link to="/login">Log In</Link>}
        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
