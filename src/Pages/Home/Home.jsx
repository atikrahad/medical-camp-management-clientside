import Partnership from "../About/components/Partnership";
import Activities from "./Homecomponents/Activities";
import Gallery from "./Homecomponents/Gallery";
import Header from "./Homecomponents/Header";
import Testimonials from "./Homecomponents/Testimonials";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Testimonials></Testimonials>
            <Activities></Activities>
            <Gallery></Gallery>
            <Partnership></Partnership>
        </div>
    );
};

export default Home;