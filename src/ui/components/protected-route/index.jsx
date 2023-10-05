/* eslint-disable react/prop-types */
import { Navigate } from "react-router"

const ProtectedRoute = ({ role, isAllowed, redirectPath = "/home", children }) => {
    if(role !== isAllowed) {
        return <Navigate to={redirectPath} />
    }

    return children;
}

export default ProtectedRoute;