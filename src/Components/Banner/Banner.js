import React from 'react'
import 'swiper/css/swiper.css';
import './Banner.scss';
import Swiper from 'react-id-swiper';

/**
* @author
* @class Banner
**/

const Banner = () => {


    const params = {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        autoPlay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }

    return (
        
            <Swiper {...params}>
                <div className="slide-img">
                    <img src="https://images.pexels.com/photos/236940/pexels-photo-236940.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </div>
                <div className="slide-img">
                    <img src="https://images.pexels.com/photos/192320/pexels-photo-192320.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </div>
                <div className="slide-img">
                    <img src="https://images.pexels.com/photos/236940/pexels-photo-236940.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </div>
            </Swiper>
        


    )

}


export default Banner