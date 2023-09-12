import React from "react";
import "./tagSettingsStyle.css";
import { TextField, Select, FormControl, InputLabel, Button } from "@mui/material";

const TagSettings: React.FC = () => {
    return (
        <div className="tagSettingsMainDiv">
            <div className="tagSettingsControls">
                <h3>Text hinzufügen</h3>
                <TextField variant="outlined" label="textKey" />
                <FormControl style={{marginTop:10, marginBottom:100}}>
                    <InputLabel>Page</InputLabel>
                    <Select label="Page">
                    </Select>
                </FormControl>
                <Button variant="contained">Hinzufügen</Button>
            </div>
        </div>
    );
}


export default TagSettings;