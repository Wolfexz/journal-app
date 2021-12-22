import Swal from 'sweetalert2';

export const firebaseErrors = (e) => {
    
    switch (e['code']) {
        case 'auth/user-not-found':
            return Swal.fire('Error', 'User not found', 'error');
            
        case 'auth/wrong-password':
            return Swal.fire('Error', 'Wrong password', 'error');

        case 'auth/invalid-email':
            return Swal.fire('Error', 'Invalid email', 'error');

        case 'auth/email-already-in-use':
            return Swal.fire('Error', 'Email already in use', 'error');
    
        default:
            return Swal.fire('Error', 'An error has ocurred', 'error');
    }
}