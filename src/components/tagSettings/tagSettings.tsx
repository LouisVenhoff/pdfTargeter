import React, { useState } from "react";
import "./tagSettingsStyle.css";
import { TextField, Select, FormControl, InputLabel, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { startNewPos } from "../../features/position";


const TagSettings: React.FC = () => {
    
    const [currentKey, setCurrentKey] = useState<string>("");
    
    
    const dispatch = useDispatch();
    
    const writeNewKey = () => 
    {
        dispatch(startNewPos(currentKey));
        setCurrentKey("");
    }

    
    return (
        <div className="tagSettingsMainDiv">
            <div className="tagSettingsControls">
                <h3>Text hinzufügen</h3>
                <TextField variant="outlined" label="textKey" value={currentKey} onChange={(e:any) => {setCurrentKey(e.target.value)}} />
                <FormControl style={{marginTop:10, marginBottom:100}}>
                    <InputLabel>Page</InputLabel>
                    <Select label="Page">
                    </Select>
                </FormControl>
                <Button variant="contained" onClick={() => {writeNewKey()}}>Hinzufügen</Button>
            </div>
        </div>
    );
}


export default TagSettings;