import { useEffect, useState } from "react";
import Popularcard from "../../../Components/Popularcard";
import Headline from "../../../Shared/Headline";

const Popular = () => {
  const [loadpopular, setLoadpopular] = useState([]);

  useEffect(() => {
    fetch("camps.json")
      .then((res) => res.json())
      .then((data) => setLoadpopular(data));
  }, []);
  return (
    <div>
      <Headline title={"Popular Camp"}></Headline>
      <div className="max-w-6xl gap-4 mx-auto  grid grid-cols-1, md:grid-cols-2 lg:grid-cols-3">
       
       {loadpopular.slice(0, 6).map((data, index) => (
         <Popularcard key={index} data={data}></Popularcard>
       ))}
     </div>
    </div>
  );
};

export default Popular;
