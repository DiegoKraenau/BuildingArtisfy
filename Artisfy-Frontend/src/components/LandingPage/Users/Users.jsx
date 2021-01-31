import "./_users.scss";
import User from "../../../images/user.png";
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction } from '../../../redux/userDucks';
import { useEffect } from 'react';

const Users = () => {

    const distpach = useDispatch();
    const users = useSelector(store => store.users.array);

    useEffect(() => {
        distpach(getUsersAction())
    }, [distpach])


    return (
        <div className="users">
            <div className="container">
                <div className="users-content">
                    <h2>Users with Artisfy</h2>
                    {
                        users.lenght !== 0 ? (
                            users.map(user => {
                                return (
                                    <div className="user-card" key={user.name}>
                                        <img src={User} alt="user-card"></img>
                                        <h4 className="user-card-name">{user.name+' '+user.surname}</h4>
                                    </div>
                                )
                            })
                        ) : (
                                <p>No hay usuarios</p>
                            )
                    }

                </div>
            </div>
        </div>
    );
}

export default Users;