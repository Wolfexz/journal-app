import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { useSelector } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    
    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if( isFormValid() ) {
            dispatch( startRegisterWithEmailPasswordName(email, password, name) );
        }
    }

    const isFormValid= () => {

        if( name.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0
            || password2.trim().length === 0) {

            dispatch(setError('Fill in all the fields'));
            return false;

        } else if(!validator.isEmail(email)) {
            dispatch(setError('Enter a valid email'));
            return false;

        } else if( password !== password2 || password.length < 6) {
            dispatch(setError('Password should be at least 6 characters and match each other'));
            return false;
        }

        dispatch(removeError());

        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            
            <form 
                onSubmit={handleRegister}
                className="animate__animated animate__fadeIn animate__faster"
            >
                
                {
                    msgError && 
                    (
                        <div className="animate__animated animate__fadeIn auth__alert-error">
                            { msgError }
                        </div>
                    )
                }

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    onChange={ handleInputChange }
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
