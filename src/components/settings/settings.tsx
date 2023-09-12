import React, { useState } from "react";
import "./settingsStyle.css";
import { TextField,Button } from "@mui/material";
import {useDispatch} from "react-redux";
import { changeDpi } from "../../features/dpi";

const Settings:React.FC = () => 
{
    const dispatch = useDispatch();

    const [currentDpi, setCurrentDpi] = useState<number>(0);

    
    const updateDpi = () => 
    {
        dispatch(changeDpi(currentDpi));
    }
    


    return(
    <div className="settingsMainDiv">
        <h3>Grundeinstellungen</h3>
        <div className="settingsControls">
            <TextField variant="outlined" label="Display-DPI" onChange={(e:any) => {setCurrentDpi(parseInt(e.target.value))}}/>
            <Button variant="contained" onClick={updateDpi}>Refresh</Button>
        </div>
    </div>);
}

export default Settings;