import { auth } from './Fire';
import {signInWithEmailAndPassword} from 'firebase/auth'

export const reset = async () =>
{
    try {
        const r = await signInWithEmailAndPassword(auth, "thanumahee440@gmail.com", "Thanush126");
        console.log(r);
    } catch (error) {
console.log(error);
    }

}
