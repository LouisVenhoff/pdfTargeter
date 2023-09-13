import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";


export default function usePosition()
{
    
    const posRedux:any = useSelector((state:any) => state.position.value);
    
    const [infoKey, setInfoKey] = useState<string>("");
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

    useEffect(() => {
        setInfoKey(posRedux.infoKey);
        setX(posRedux.x);
        setY(posRedux.y);
    },[posRedux])


    return {infoKey, x, y}
}