import { useDispatch } from "react-redux";
import { setAlert } from "../../Redux/CreateInstitute";
import { useEffect } from "react";
import { Alert } from "@mui/material";

const AlertWrapper = ({alertmessage, alerttype}:any)=>{

    const dispatch = useDispatch();
  
    const handleClose = ()=>{
        dispatch(setAlert(false));
    }
    
    useEffect(() => {
        const timer = setTimeout(() => {
            handleClose();
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Alert sx={{position:"fixed", right:0, bottom:0, zIndex:999}} severity={alerttype} onClose={() => {}}>
            {alertmessage}
        </Alert>
    )

}
export default AlertWrapper;