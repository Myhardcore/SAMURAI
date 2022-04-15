import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../assets/image/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png";
import axios from "axios";

class Users extends React.Component {

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            });

        }
    }

    render() {
        return <div>
            <button onClick={this.getUsers}>Get users</button>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                                 alt=""/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    }
}

export default Users;