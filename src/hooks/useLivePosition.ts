import { useDispatch, useSelector } from "react-redux";
import { updatePosition } from "../features/livePosition";
import {useState, useEffect} from "react";



export default function useLivePosition()
{
    const [currentPosition, setCurrentPosition] = useState<{x:Number, y:Number, page:number}>({x:0, y:0, page:0});

    const posRedux:any = useSelector((state:any) => state.livePosition.value);

    useEffect(() => {
        setCurrentPosition(posRedux)
    },[posRedux]);


    const updatePos = (x:number, y:number, page:number) => 
    {
        dispatch(updatePosition({x:x, y:y , page:page}));
    }


    const dispatch = useDispatch();

    return {currentPosition, updatePos}

}

