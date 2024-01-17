import React from 'react';
import '../../styles/Footer/Footer.css'
import ReactLogo from '../../logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTiktok, faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Footer() {

    return (
        <div className="container my-5">
            <footer className="text-center text-lg-start text-white footerStyle " style={{backgroundColor: "#929fba"}} >

            <div>
                <img
                    className='reactLogo'
                    src={ReactLogo || 'ErrorImg'}
                    alt='ReactLogo'
                />
            </div>

            <div className="container p-4 pb-0">
                <section className="">

                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                Water Harbor
                            </h6>
                            <p className='motto'>
                                Відкривайте світ чистої, свіжої води з кожним ковтком, завдяки нашому
                                неперевершеному досвіду та пристрасті до якості.
                                Ми - ваш порт до здоров’я і гармонії!
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none"/>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                            <p>
                                <a className="text-white">Water Harbor Classic</a>
                            </p>
                            <p>
                                <a className="text-white">Water Harbor Sparkling</a>
                            </p>
                            <p>
                                <a className="text-white">Water Harbor Sport:</a>
                            </p>
                            <p>
                                <a className="text-white">Water Harbor Pure</a>
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none"/>

                        <hr className="w-100 clearfix d-md-none"/>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p><i className="fas fa-home mr-3"></i> Проспект Шевченка 1, Одеса, 65044</p>
                            <p><i className="fas fa-envelope mr-3"></i> waterharborinfo@gmail.com</p>
                            <p><i className="fas fa-phone mr-3"></i> (+380) 97-777-7777</p>
                            <p><i className="fas fa-print mr-3"></i> (+380) 68-888-8888</p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                            <a href="https://youtu.be/xm3YgoEiEDc?si=zGpOaaCzCqRHkAP9" className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="3x"/>
                            </a>
                            <a href="https://youtu.be/xm3YgoEiEDc?si=zGpOaaCzCqRHkAP9" className="instagram social faInsta">
                                <FontAwesomeIcon icon={faInstagram} size="3x" color='red'/>
                            </a>

                            <a href="https://youtu.be/xm3YgoEiEDc?si=zGpOaaCzCqRHkAP9" className="github social faGit">
                                <FontAwesomeIcon icon={faGithub} size="3x" color='black'/>
                            </a>
                            <br/>
                            <a href="https://youtu.be/xm3YgoEiEDc?si=zGpOaaCzCqRHkAP9" className="tiktok social faTiktok">
                                <FontAwesomeIcon icon={faTiktok} size="3x" color='black'/>
                            </a>

                            <a href="https://youtu.be/xm3YgoEiEDc?si=zGpOaaCzCqRHkAP9" className="twitter social faTwitt">
                                <FontAwesomeIcon icon={faTwitter} size="3x"/>
                            </a>

                            <a href="https://youtu.be/xm3YgoEiEDc?si=zGpOaaCzCqRHkAP9" className="linkedin social faLinkenIn">
                                <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                            </a>

                        </div>
                    </div>
                </section>
            </div>

                <div id='contact' className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}} >
                    © 2024 Copyright:
                    <a className="text-white" href="#home"> Water Harbor.com</a>
                </div>

            </footer>
        </div>
);
}

export default Footer;
