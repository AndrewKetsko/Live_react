import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/slice';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user.login);
    const dispatch = useDispatch();

    const logOutFunc = () => {
        dispatch(logOut());
        navigate('/login', { replace: true });

    }

  return (
    <div>
      {user}
      <button type='button' onClick={logOutFunc}>Log Out</button>
    </div>
  );
};
