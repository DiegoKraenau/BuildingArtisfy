import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction ,verifyUser} from '../../redux/userDucks';
import MusicLogo from '../../images/Music.svg';
import './_login.scss';
import { Link, useHistory } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import Navbar from '../LandingPage/Navbar/Navbar';
import {
    useFirebaseApp
} from 'reactfire';
import firebase from "firebase/app";
import "firebase/auth";// 👈 this could also be in your `firebase.js` file




const Login = () => {

    //Para mostrar si ya esta conectada la app con firebase
    //const firebase = useFirebaseApp();
    //console.log(firebase);

    const { register, handleSubmit } = useForm();
    const distpach = useDispatch();
    const history = useHistory();
    const token = useSelector(store => store.users.token);

    useEffect(() => {

        if (token) {
            history.push('/menu')
        }
        
    }, [token, history])

    const onSubmit = (data, e) => {

        distpach(loginAction(data));

    }

    const socialLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                var user = result.user;
                const userData = {
                    email:user.email,
                    name: user.displayName
                }
                distpach(verifyUser(userData))
                // ...
            }).catch((error) => {
                console.log(error)
            });
    }

    return (
        <Fragment>
            <Navbar></Navbar>
            <div className="login-form container">
                <div className="login-form-left">
                    <div className="login-form-left-title">
                        <h2>Sing in to</h2>
                        <h2>Artisfy</h2>
                    </div>
                    <div className="login-form-left-subtitle">
                        <h4>If you don´t have a account </h4>
                        <h4>You can register in <Link to="">Register Here</Link></h4>
                    </div>
                    <img src={MusicLogo} alt="musiclogo"></img>
                </div>
                <div className="login-form-right">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Enter a email"
                            type="email"
                            ref={
                                register({
                                    required: { value: true, message: 'You need to enter a email' }
                                })
                            }
                            name="email"
                        ></input>
                        <input placeholder="Enter a password"
                            type="password"
                            ref={
                                register({
                                    required: { value: true, message: 'You need to enter a password' }
                                })
                            }
                            name="password"></input>
                        <button type="submit">Sign in</button>
                        <hr></hr>
                        <button type="submit" onClick={() => socialLogin()}>Register</button>
                    </form>
                </div>
            </div>

        </Fragment>



    );
}

export default Login;