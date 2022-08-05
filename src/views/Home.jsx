import { LeftSide, RightSide } from "../components";
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

export const Home = function () {
    const [data, setData] = useState({})
    const {name} = useParams(); 

  useEffect( () => {
    axios.get(`/api/resume/${name}`)
    .then(response => {
      setData(response.data)
    })
  }, [])
    return (
        <div className="home-page">
            <LeftSide data={data}/>
            <RightSide data={data}/>
        </div>
    )
}