import { useEffect, useState } from "react";
import Availablecard from "../../Components/Availablecard";

const Available = () => {
    const [loadall, setLoadall]= useState([])
    useEffect(()=>{
        fetch('camps.json')
        .then(res =>res.json())
        .then(data => setLoadall(data) )
    },[])
    return (
        <div className="py-32 grid max-w-6xl mx-auto gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                loadall.map((data, index) => <Availablecard key={index} data={data}></Availablecard>)
            }
        </div>
    );
};

export default Available;