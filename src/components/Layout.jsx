// import { useSelector, useDispatch } from 'react-redux';

import { Outlet } from 'react-router-dom';
import { AppBar } from './Appbar';

export const Layout = () => {
  // const dispatch = useDispatch();
  // const value = useSelector(state => state);

  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};
