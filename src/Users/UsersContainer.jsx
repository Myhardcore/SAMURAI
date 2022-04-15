import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUserAC, unfollowAC} from "../Redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let MapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUserAC(users))
        }

    }
}
export default connect(mapStateToProps, MapDispatchToProps)(Users)