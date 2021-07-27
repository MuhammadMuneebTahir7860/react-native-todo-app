import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { GetCurrentUserUid} from "../redux/actions/AuthActions";

export default function GetCurrentUserUidHook(){
    const[loading,setLoading]=useState(true);
    const[uid,setUid]=useState('');
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(GetCurrentUserUid(setLoading,setUid))
    },[])
    return[loading,uid]
}