import React, {Component} from 'react';
import CarouselBox from './CarouselBox';
import '../../styles/Home/Home.css'
import Emblem from '../../images/Home/Emblem.png'

class Home extends Component {
    render() {
        return (
            <div id='home'>

                <div className="companyLogo">
                    <h1 className='h1'>Water Harbor</h1>
                </div>

                <div> <CarouselBox/> </div>

                <div className='companyText'>
                    <p>Ласкаво просимо на наш сайт з продажу та доставки найкращої води в Одесі! Ми пропонуємо широкий
                        вибір води для різних потреб - від пиття до виробництва.
                        Замовлення здійснюються легко та швидко. Зробіть звичку пити якісну воду!</p>
                </div>

                <a className="btn btn-lg button-style" href='#delivery'>Оформити доставку</a>

                <div className='emblemStyle'>
                    <img
                    src={Emblem || 'ErrorImg'}
                    alt='Emblem'
                    />
                </div>

            </div>
        );
    }
}

export default Home;