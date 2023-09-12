import React, {useCallback, useState} from "react";
import "./dragDropStyle.css";
import { useDropzone } from "react-dropzone";


type DragDropProps=
{
    fileCallback:(data:any) => void;
}



const DragDrop:React.FC<DragDropProps> = ({fileCallback}) => {
    
    
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const [objects, setObjects] = useState<any>();


    
    const onDrop = useCallback((acceptedFiles:any) => {
        
        let objectArr:any[] = [];

        for(let i = 0; i < acceptedFiles.length; i++)
        {
            objectArr.push(URL.createObjectURL(acceptedFiles[i]));
        
        }

        setObjects(objectArr);

        fileCallback(objectArr);
        setIsVisible(false);
    },[])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
    
    return (
        <div  style={{display: isVisible? "" : "none"}}className="dragDropMainDiv" {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </div>
      )
}

export default DragDrop;