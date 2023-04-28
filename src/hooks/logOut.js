import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const useLogOut = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { replace: true });
    }
  }, [navigate, isLoggedIn]);
};
