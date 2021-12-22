import Swal from 'sweetalert2';

import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { finishLoading, startLoading } from './ui';
import { firebaseErrors } from '../helpers/firebaseErrors';

export const startLoginEmailPassword = ( email, password ) => {
    return (dispatch) => {
        dispatch(startLoading());

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName));
                
                dispatch(finishLoading());
            })
            .catch(e => {
                console.log(e['code']);
    
                dispatch(finishLoading());

                firebaseErrors(e);
            })
    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return ( dispatch ) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then( async({ user }) => {
                await updateProfile(user, { displayName: name });
                
                dispatch(
                    login(user.uid, user.displayName)
                )

                Swal.fire('Welcome!','Your account has been created','success');
            })
            .catch(e => {
                console.log(e['code']);

                firebaseErrors(e);
            })
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider )
            .then( ({user}) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            });
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return async( dispatch ) => {
        const auth = getAuth();
        await signOut(auth);

        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout
})