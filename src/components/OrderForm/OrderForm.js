import React, {Component} from 'react';
import '../../styles/OrderForm/OrderForm.css'
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sideImgOrderFormRight1 from "../../images/OrderForm/sideImgOrderFormRigth1.png";
import axios from 'axios';
import ModalWindow from './ModalWindow'

class OrderForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pib: '',
            phoneNumber: '(+380)',
            address: '',
            waterLiters: 18,
            dateOrder: new Date(0),
            statusOrder: 'Очікується'
        }

        this.modalRef = React.createRef();
        this.handlePressInputPhoneNumber = this.handlePressInputPhoneNumber.bind(this);
        this.handleInputChange = {
            handleInputChangePib: this.handleInputChange.handleInputChangePib.bind(this),
            handleInputChangePhoneNumber: this.handleInputChange.handleInputChangePhoneNumber.bind(this),
            handleInputChangeAddress: this.handleInputChange.handleInputChangeAddress.bind(this),
            handleInputChangeWaterLiters: this.handleInputChange.handleInputChangeWaterLiters.bind(this)
        }
        this.handleForbiddenKeys = {
            handleForbiddenKeysPib: this.handleForbiddenKeys.handleForbiddenKeysPib.bind(this),
            handleForbiddenKeysWaterLiters: this.handleForbiddenKeys.handleForbiddenKeysWaterLiters.bind(this)
        }
        this.validateForm = {
            validateFormEmptyRows: this.validateForm.validateFormEmptyRows.bind(this),
            validateFormCheckNumberPhone: this.validateForm.validateFormCheckNumberPhone.bind(this),
            validateFormCheckWaterLiters: this.validateForm.validateFormCheckWaterLiters.bind(this)
        }
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    };

    handlePressInputPhoneNumber = (event) => {
        const input = event.target.value;
        const onlyDigits = /^\(\+380\)\d*$/.test(input);

        if (input.length <= 15 && onlyDigits) { // "(+380)" + 9 digits
            this.setState({ phoneNumber: input });
        } else { event.target.value = this.state.phoneNumber; }
    };


    handleInputChange = {
        handleInputChangePib: (event) => {
            this.setState({
                [event.target.name]: event.target.value
            });
        },

        handleInputChangePhoneNumber: (event) => {
            this.setState({
                [event.target.name]: event.target.value
            });
        },

        handleInputChangeAddress: (event) => {
            this.setState({
                [event.target.name]: event.target.value
            });
        },
        handleInputChangeWaterLiters: (event) => {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
    };


    handleForbiddenKeys = {
        handleForbiddenKeysPib: (event) => {
            const forbiddenChars = /[^a-zA-Zа-яА-ЯїЇіІєЄґҐэЭъЪёЁ'` -]/; // Дозволені символи

            if (forbiddenChars.test(event.key)) {
                event.preventDefault();
            }
        },

        handleForbiddenKeysWaterLiters:(event) => {
            const forbiddenChars = ['.', ',', '-', '+', 'e']; // Заборонені символи

            if (forbiddenChars.includes(event.key)) {
                event.preventDefault();
            }
        }
    };


    validateForm = {
        validateFormEmptyRows() {
            let inputs = document.getElementsByTagName('input');
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].value === "") {
                    toast("Будь ласка, заповніть всі обов'язкові поля");
                    return false;
                }
            }
            return true;
        },

        validateFormCheckNumberPhone() {
            let inputs = document.getElementsByTagName('input');
                if (inputs[1].value.length !== 15 ) {
                    toast("Введений номер телефону не відповідає стандартам! Перевірте будь ласка його на коректність!");
                    return false;
                }

            return true;
        },

        validateFormCheckWaterLiters() {
            let inputs = document.getElementsByTagName('input');
            if ( inputs[3].value < 18 || inputs[3].value > 150) {
                toast("Некоректно вказано к-сть води! Введіть інше значення!");
                return false;
            }
            return true;
        }
    };

    handleSubmitForm = (event) => {
        event.preventDefault();
        if (
            this.validateForm.validateFormEmptyRows() &&
            this.validateForm.validateFormCheckNumberPhone() &&
            this.validateForm.validateFormCheckWaterLiters()
        ) {
            // Зберігаємо поточний час у стані dateOrder
            const date = new Date();
            const formattedDate = date.toLocaleDateString('uk-UA', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
            const formattedTime = date.toLocaleTimeString('uk-UA', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });
            this.setState({ dateOrder: `${formattedDate} - ${formattedTime}` }, () => {

                // Код для обробки даних форми
                let inputs = document.getElementsByTagName('input');
                for (let i = 0; i < inputs.length; i++) {
                    console.log(inputs[i].name + ": " + inputs[i].value);
                }

                // Відправка даних форми на сервер
                axios.post('http://localhost:3001/form-data', this.state, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => {
                    console.log(response.data);
                })
                    .catch(error => {
                        console.error('Error:', error);
                    });

                // Відкриття модального вікна
                this.modalRef.current.openModal();

                // Очистка полів форми
                this.handleClearForm();
            });
        }
    };


    handleClearForm = () => {
        this.setState({
            pib: '',
            phoneNumber: '(+380)',
            address: '',
            waterLiters: 18
        })
    };


    render() {
        return (
            <div className='margin-bottom'>

                <div className='divOrderForm' id='delivery'>
                    <h1 className='headerOrderForm'>Доставка</h1>
                </div>

                <div>
                    <img
                        className='sideImgOrderFormRight1'
                        src={sideImgOrderFormRight1 || 'ErrorImg'}
                        alt='imgOrderFormRigth1'
                    />
                </div>

                <div className='divOrderFormText1'>
                    <p>
                        Зробіть своє перше замовлення просто зараз!
                        Наша команда готова опікатися вами та забезпечити якісне обслуговування.
                        Заповніть форму нижче та ми зв'яжемось з вами найближчим часом.
                    </p>
                </div>

                <div className="divOrderFormMain">
                    <form onSubmit={this.handleSubmitForm} method="POST">

                        <div className="form-group inputStyle">
                            <label htmlFor="pibHtml"> <b style={{color: 'red'}}>*</b>Прізвище та ім'я:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="pib"
                                placeholder="Пусте поле"
                                name="pib"
                                maxLength="50"
                                title='Заповніть це поле'
                                value={this.state.pib}
                                onChange={this.handleInputChange.handleInputChangePib}
                                onKeyPress={this.handleForbiddenKeys.handleForbiddenKeysPib}
                                required
                            />
                        </div>

                        <div className="form-group inputStyle">
                            <label htmlFor="phoneNumberHtml"> <b style={{color: 'red'}}>*</b>Номер телефону:</label>
                            <input
                                type="tel"
                                className="form-control" id="phoneNumberssss" placeholder="Пусте поле"
                                name="phoneNumber"
                                pattern="\(+380)[0-9]{9}"
                                title="Будь ласка, введіть рівно 9 цифр"
                                value={this.state.phoneNumber}
                                onInput={this.handlePressInputPhoneNumber}
                                onChange={this.handleInputChange.handleInputChangePhoneNumber}
                                required
                            />
                        </div>

                        <div className="form-group inputStyle">
                            <label htmlFor="addressHtml"> <b style={{color: 'red'}}>*</b>Адреса доставки:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                placeholder="Пусте поле"
                                name="address"
                                maxLength="250"
                                title='Заповніть це поле'
                                value={this.state.address}
                                onChange={this.handleInputChange.handleInputChangeAddress}
                                required
                            />
                        </div>

                        <div className='noteText1'>Увага! Замовлення доставки води здійснюється виключно від 18(л) до
                            150(л)!
                        </div>

                        <div className="form-group inputStyle">
                            <label htmlFor="waterLitersHtml"> <b style={{color: 'red'}}>*</b>К-сть води (л):</label>
                            <input
                                type="number"
                                className="form-control SelectWaterInput"
                                id="waterLiters"
                                placeholder="0"
                                name="waterLiters"
                                min="18"
                                max="150"
                                title='Заповніть це поле'
                                value={this.state.waterLiters}
                                onKeyPress={this.handleForbiddenKeys.handleForbiddenKeysWaterLiters}
                                onChange={this.handleInputChange.handleInputChangeWaterLiters}
                                required
                            />
                        </div>

                        <button type="submit" className="buttonSubmit" onClick={this.handleSubmitForm}>Підтвердити</button>
                        <button type="reset" className="buttonReset" onClick={this.handleClearForm}>Очистити</button>

                        <ModalWindow ref={this.modalRef} />

                    </form>
                </div>

                <ToastContainer />

            </div>
        );
    }
}

export default OrderForm
