import { GetUserOnAuthStateChanged } from "../redux/actions/AuthActions";
import { useDispatch } from "react-redux";
import { useEffect} from "react";
export default function GetUserOnAuthStateChangedHook(){
    const dispatch=useDispatch(); 
    useEffect(()=>{
      dispatch(GetUserOnAuthStateChanged());
    },[])
    return[]
}