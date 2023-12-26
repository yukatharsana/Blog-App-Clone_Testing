import {
 FireStore
} from './Fire';
import {
collection, getDocs
} from 'firebase/firestore'

     const userCollection =  collection(FireStore, "user");
export const loginwhithEmailPassword = async ({
    email,
    password
}) => {
    try {

    } catch (error) {

    }

}
export const logout = async () => {
    try {

    } catch (error) {

    }

}
export const add = async ({
    username,
    email,
    isOnline,
    profile,
    join
}) => {
    try {

    } catch (error) {

    }

}
export const edit = async ({
    username,
    email,
    isOnline,
    profile,
    join,
    uid
}) => {
    try {

    } catch (error) {

    }

}

export const remove = async ({
    uid
}) => {
    try {

    } catch (error) {

    }

}
export const all = async () => {
    try
    {

        const usersSnapshots = await getDocs(userCollection);
        const users = usersSnapshots.docs;
       return  users.map(ele =>
        {
            return { uid: ele.id, ...ele.data() };
        })

    } catch (error) {
        throw error;
    }

}
export const oneUser = async ({
    uid
}) => {
    try {

    } catch (error) {

    }

}
export const resetpassword = async ({
    email
}) => {
    try {

    } catch (error) {

    }

}
