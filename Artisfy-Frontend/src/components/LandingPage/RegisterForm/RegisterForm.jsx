import "./_registerform.scss";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUserAction } from '../../../redux/userDucks';

const RegisterForm = () => {

    const { register, handleSubmit } = useForm();
    const distpach = useDispatch();

    const onSubmit = (data, e) => {
        const addUser = async(data)=>{
            distpach(registerUserAction(data))
        }

        addUser(data);

        e.target.reset();

    }

    return (
        <section className="register-form">
            <div className="container">
                <div className="register-form-content">
                    <h2 className="register-form-title">Register Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Name"
                            name="name"
                            ref={
                                register({
                                    required: { value: true, message: "Need a name" }
                                })
                            }
                        ></input>
                        <input placeholder="Surname"
                            name="surname"
                            ref={
                                register({
                                    required: { value: true, message: "Need a surname" }
                                })
                            }
                        ></input>
                        <input type="email" placeholder="Email"
                            name="email"
                            ref={
                                register({
                                    required: { value: true, message: "Need a email" }
                                })
                            }
                        ></input>
                        <input type="password" placeholder="Password"
                            name="password"
                            ref={
                                register({
                                    required: { value: true, message: "Need a password" }
                                })
                            }
                        ></input>
                        <button type="submit"> Register</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default RegisterForm;