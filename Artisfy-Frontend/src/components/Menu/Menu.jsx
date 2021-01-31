import styles from './_menu.module.scss';
import manageToken from '../../utils/manageJWT';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect, useState } from 'react';
import Countdown from "react-countdown";
import LogoDark from '../../images/logo-dark.png';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert2';
import { logOut } from '../../redux/userDucks';



const Menu = () => {
    const distpach = useDispatch();
    const history = useHistory();
    const loged = useSelector(store => store.users.loged);
    const { diffActual } = manageToken();

    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            return <span>Session expired</span>
        } else {
            return (
                <span>
                    Session expires in  {minutes}:{seconds}
                </span>
            );
        }
    };

    const onComplete = () => {
        distpach(logOut())
    }

    useEffect(() => {
        if (loged === false) {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User incorrect!',
            })
            history.push('/login')
        }

    }, [loged])



    return (
        <Fragment>
            <div className={styles.navbar}>
                <div className={`${styles.navbar_content} container`}>
                    <div className={styles.navbar_content_left}>
                        <img src={LogoDark} alt="logo" />
                    </div>
                    <ul className={styles.navbar_content_right}>
                        <li>
                            <Link to="">Option 1</Link>
                            <Link to="">Option 2</Link>
                            <Countdown date={Date.now() + diffActual * 1000} renderer={renderer} onComplete={onComplete} />
                        </li>
                    </ul>
                </div>
            </div>
            <br></br>
            <br></br>
            {
                loged === false ?
                    (
                        <p>FUENTES</p>
                    ) :
                    (
                        <p>LOGUEADO</p>
                    )
            }
        </Fragment>

    );
}

export default Menu;