import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "redux/slice";

export const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitForm = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.elements.login.value);
        dispatch(logIn(e.currentTarget.elements.login.value));
        e.currentTarget.reset();
        navigate('/dashboard', { replace: true });
    };
  return (
    <form onSubmit={submitForm}>
      <input type="text" name="login"></input>
      <button type="submit">Log In</button>
    </form>
  );
};
