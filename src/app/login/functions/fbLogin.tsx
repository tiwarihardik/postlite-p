import { auth } from '../../../config/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

interface authError {
    code?: string;
    message?: string;
};

const authenticate = async (email: string, password: string, action: () => void): Promise<object | authError> => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Call the action after successful sign-in
        action();

        // Return user object
        return user;
    } catch (error) {
        // Type assertion to specify the expected structure of the error
        const authError = error as { code: string; message: string };

        const formattedError: authError = {
            code: authError.code,
            message: authError.message,
        };

        // Return error object
        return formattedError;
    }
};

export default authenticate;
export type { authError };