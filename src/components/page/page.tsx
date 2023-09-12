import React, { useEffect, useRef, useState } from "react";
import "./pageStyle.css";
import pic from "../page/1.png";
import {useSelector} from "react-redux";

const A4_HEIGHT:number = 11.7;  //inch
const A4_WIDTH:number = 8.3;
const DPI:number = 82;

type PageProps= {

    image:string
    pageNumber:number,
    onPositionChange:(x:number, y:number) => void,
    onClick:(pageNr:number) => void

}

const Page:React.FC<PageProps> = ({onPositionChange, onClick ,pageNumber ,image}) => 
{
    
    const [calculatedHeight, setCalculatedHeight] = useState<number>(0);
    const [calculatedWidth, setCalculatedWidth] = useState<number>(0);
    
    const element:any = useRef<any>();

    const dpiStore = useSelector((state:any) => state.dpi.value);

    useEffect(() => {
       
        calculatePageSize();
        
        element.current.addEventListener("mousemove", (e:any) => {
            calculateMousePosition(e);
        });


    },[]);


    const calculatePageSize = () => 
    {
        setCalculatedHeight(A4_HEIGHT * dpiStore.dpi);
        setCalculatedWidth(A4_WIDTH * dpiStore.dpi);
    }

    const calculateMousePosition = (e:any) => 
    {
        let rect = e.target.getBoundingClientRect();
        let relativeX:number = e.clientX - rect.left;
        let relativeY:number = e.clientY - rect.top;
        onPositionChange(parseFloat(relativeX.toFixed(2)), parseFloat(relativeY.toFixed(2)));
    }
    


    return(
    <div ref={element} className="pageMainDiv" style={{width:calculatedWidth, height:calculatedHeight}} onClick={() => {onClick(pageNumber)}}>
        <img src={image} style={{maxWidth:"100%", maxHeight:"100%"}}/>

    </div>
    );
}

export default Page;