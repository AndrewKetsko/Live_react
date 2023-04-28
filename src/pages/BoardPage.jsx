import { useLogOut } from "hooks/logOut";
// import { useEffect } from "react";
// import { useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"

export const BoardPage = () => {
    // const navigate = useNavigate();
    // const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         navigate('/login', { replace: true })
    //     }
    // }, [navigate, isLoggedIn]);

    useLogOut();

    return <div>DASHBOARD PAGE</div>
}