import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import AuthenticateContext from "../context/context";

const PrivateRoute = ({ childern, ...rest }) =>{
    let { user } = useContext(AuthenticateContext);
    return <Route {...rest}>{!user ? <Redirect to="/login"/>: childern}</Route>
};

export default PrivateRoute;