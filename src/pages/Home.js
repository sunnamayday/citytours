import React from 'react';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import Info from '../Components/Information/Info';

/**
* @author
* @function Home
**/

const Home = (props) => {
    return (
        <div>
            <Banner />
            <Info />
            <Footer />
        </div>
    )

}

export default Home