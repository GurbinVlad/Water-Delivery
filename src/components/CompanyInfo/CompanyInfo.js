import React from 'react';
import CompanyInfoRight1 from '../../images/CompanyInfo/sideImgCompanyInfoLeft1.png'
import SecondGalleryImg from '../../images/CompanyInfo/FirstGalleryImg.png'
import FirstGalleryImg from '../../images/CompanyInfo/SecondGalleryImg.png'
import ThirdGalleryImg from '../../images/CompanyInfo/ThirdGalleryImg.png'
import '../../styles/CompanyInfo/CompanyInfo.css'

function CompanyInfo() {

    return (
        <div className='margin-bottom'>

            <div className='divCompanyInfo' id='aboutUs'>
                <h1 className='headerCompanyInfo'>Про нас</h1>
            </div>

            <div className='companyInfoText1'>
                <p><b style={{color: 'red'}}>Ми -</b> команда експертів, які працюють у сфері доставки води вже протягом
                    багатьох років.
                    <b style={ {color: 'red'} }> Наша мета -</b> забезпечити якість та надійність наших послуг. Ми розуміємо
                    важливість
                    правильного
                    вибору води для наших клієнтів та готові допомогти в кожному питанні.</p>
            </div>

            <div className='deliveryCompanyInfo'>
                <h1 className='headerDeliveryCompanyInfo'>Способи доставки</h1>
            </div>

            <div>
                <img
                    className='sideImgCompanyInfoLeft1'
                    src={CompanyInfoRight1 || 'ErrorImg'}
                    alt='imgCompanyInfoRight1'
                />
            </div>

            <div className='firstDivCompanyInfo'>
                <p>
                    <center><b style={ {color: 'darkred'} }> Доставка до дверей </b></center>
                    <br/>
                    Надійна та швидка доставка прямо до ваших дверей.
                    Ми забезпечуємо безпеку та якість кожного замовлення, щоб ви могли насолодитись свіжою водою.
                </p>
            </div>

            <div className='secondDivCompanyInfo'>
                <p>
                    <center><b style={ {color: 'darkred'} }> Самовивіз </b></center>
                    Якщо ви бажаєте самостійно вибрати комплектацію та забрати воду, ми радо зустрінемо вас у нашому
                    офісі.
                    Ви зможете отримати необхідну кількість води в зручний для вас час.
                </p>
            </div>

            <div className='thirdDivCompanyInfo'>
                <p>
                    <center><b style={ {color: 'darkred'} }> Доставка в офіс </b></center>
                    <br/>
                    Ми пропонуємо доставку води в офіси для зручності наших клієнтів.
                    Фахівці забезпечать вам необхідну кількість води, щоб ви могли залишатись продуктивними протягом
                    робочого дня.
                </p>
            </div>

            <div className='purchaseUsCompanyInfo'>
                <h1 className='headerPurchaseUsCompanyInfo'> Чому варто замовляти в нас<i>?</i></h1>
            </div>

            <div className="container purchaseUsCompanyGallery">
                <div className="row">
                    <div className="col-md-4">
                        <div className="thumbnail purchaseUsCompanyGalleryDiv">
                                <img src={FirstGalleryImg || 'ErrorImg'} alt="A" style={ {width: "100%"} }/>
                            <div className="caption">
                                <h3> <center><b style={ {color: 'darkred'} }>Натуральна та свіжа</b></center> </h3> <br/>
                                <p className='purchaseUsCompanyGalleryText'>Наша питна вода - це чиста свіжість та натуральність, яку ви відчуєте з кожним
                                    ковтком</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail purchaseUsCompanyGalleryDiv">
                                <img src={SecondGalleryImg || 'ErrorImg'} alt="B" style={{width: "100%"}}/>
                            <div className="caption">
                                <h3> <center> <b style={ {color: 'darkred'} }>Корисна для здоров'я</b> </center> </h3> <br/>
                                <p className='purchaseUsCompanyGalleryText'>Вода - основа здорового способу життя.
                                    Наша вода містить необхідну кількість мінералів, які сприяють розумовій та фізичній
                                    активності.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail purchaseUsCompanyGalleryDiv">
                        <img src={ThirdGalleryImg || 'ErrorImg'} alt="C" style={{width: "100%"}}/>
                            <div className="caption">
                                <h3> <center> <b style={ {color: 'darkred'} }>Екологічна</b> </center> </h3> <br/>
                                <p className='purchaseUsCompanyGalleryText'>Ми прагнемо зберегти природні ресурси та надаємо воду без використання пластикових пляшок.
                                    Ми пропонуємо унікальну систему повторного використання контейнерів.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CompanyInfo;
