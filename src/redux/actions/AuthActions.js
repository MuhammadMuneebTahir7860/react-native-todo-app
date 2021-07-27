import { userAuth, db } from '../../config/Firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const doLogin = (userData, navigation, setLoginLoading) => async (dispatch) => {
    try {
        setLoginLoading(true)
        const userCredential = await userAuth.signInWithEmailAndPassword(userData?.email, userData?.password);
        const user = userCredential.user;
        dispatch(
            {
                type: 'LOGIN',
                payload: user,
            }
        );
    }
    catch (error) {
        Alert.alert(error.toString())
    }
    finally {
        setLoginLoading(false)
    }
}

// Above Code for Login Action

export const doSignUp = (userData, navigation, setSignUpLoading) => async (dispatch) => {
    try {
        setSignUpLoading(true)
        const userCredential = await userAuth.createUserWithEmailAndPassword(userData?.email, userData?.password);
        const user = userCredential.user;
        const saveUserToDB = await db.collection('users').add({ ...userData, Uid: user.uid })
        dispatch(
            {
                type: 'SIGN_UP',
                payload: user,
            }
        );
    }
    catch (error) {
        Alert.alert(error.toString())
    }
    finally {
        setSignUpLoading(false)
    }
}

// Above Code for SignUp Action

export const doLogout = (navigation) => async (dispatch) => {
    try {
        navigation.closeDrawer();
        await userAuth.signOut();
        await AsyncStorage.removeItem('User');
        dispatch(
            {
                type: 'LOGOUT',
            }
        );
    }
    catch (error) {
        Alert.alert(error.toString())
    }
}

// Above Code for Logout Action

export const GetUserOnAuthStateChanged = () => async (dispatch) => {
    try {
        await userAuth.onAuthStateChanged((user) => {
            if (user) {
                dispatch({
                    type: "GET_USER_ON_AUTH_STATE_CHANGED",
                    payload: user,
                })
            }
        })
    }
    catch (error) {
        Alert.alert(error.toString())
    }
    finally {
    }
}

// Above Code for GetUserOnAuthStateChanged Action


export const GetCurrentUserUid = (setLoading,setUid) => async (dispatch) => {
    try {
        await userAuth.onAuthStateChanged((user) => {
            if (user) {
                setUid(user.uid)
            }
        })
        setLoading(false)
    }
    catch (error) {
        Alert.alert(error.toString())
    }
    finally {
        setLoading(false)
    }
}

// Above Code for GetCurrentUserUid Action



export const GetCurrentUserData = (setUserDetailsLoading) => async (dispatch) => {
    try {
        setUserDetailsLoading(true)
        const data = await db.collection('users').get();
        const userDataArray = [];
        data.forEach(item => {
            userDataArray.push({ docId: item.id, ...item.data() });
        });
        dispatch(
            {
                type: 'GET_CURRENT_USER_DATA',
                payload: userDataArray,
            }
        )
    }
    catch (error) {
        Alert.alert(error.toString())
    }
    finally {
        setUserDetailsLoading(false)
    }
}

// Above Code for GetCurrentUserData Action
