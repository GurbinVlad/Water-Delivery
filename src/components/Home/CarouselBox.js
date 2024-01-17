import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import FirstImage from '../../images/Home/FirstHomeImage.jpg'
import SecondImage from '../../images/Home/SecondHomeImage.jpg'
import ThirdImage from '../../images/Home/ThirdHomeImage.jpg'
import FourthImage from '../../images/Home/FourthHomeImage.jpg'
import FiftfImage from '../../images/Home/FiftfHomeImage.jpg'
import '../../styles/Home/CarouselBox.css'


class CarouselBox extends Component {
    render() {
        return (
            <Carousel className='carousel-box' nextIcon="" prevIcon="" indicators={false}>

                <Carousel.Item>
                    <img
                        className="d-block"
                        src={ FirstImage }
                        alt='ImgCarouselBox'
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block"
                        src={ SecondImage }
                        alt='ImgCarouselBox'
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block"
                        src={ ThirdImage }
                        alt='ImgCarouselBox'
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block"
                        src={ FourthImage }
                        alt='ImgCarouselBox'
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block"
                        src={ FiftfImage }
                        alt='ImgCarouselBox'
                    />
                </Carousel.Item>

            </Carousel>
        );
    }
}

export default CarouselBox;