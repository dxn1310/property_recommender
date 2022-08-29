import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Slide_img1 from '../Images/Slide_img1.jpg';
import Slide_img2 from '../Images/Slide_img2.jpg';
import Slide_img3 from '../Images/Slide_img3.jpg';
import Slide_img4 from '../Images/Slide_img4.jpg';
import Slide_img5 from '../Images/Slide_img5.jpg';
import Slide_img6 from '../Images/Slide_img6.jpg';
import Navbar from '../components/Navbar.js'

const fadeImages = [
    {
        url: Slide_img1,
        caption: 'First Slide'
    },
    {
        url: Slide_img2,
        caption: 'Second Slide'
    },
    {
        url: Slide_img3,
        caption: 'Third Slide'
    },
    {
        url: Slide_img4,
        caption: 'Fourth Slide'
    },
    {
        url: Slide_img5,
        caption: 'Fifth Slide'
    },
    {
        url: Slide_img6,
        caption: 'Sixth Slide'
    },
];

export default function Slideshow() {
    return (
        <div className="slide-container">
            <Navbar />
            <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div className="each-fade" key={index}>
                        <div className="image-container">
                            <img src={fadeImage.url} className="slideshow-image" />
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    )
}
