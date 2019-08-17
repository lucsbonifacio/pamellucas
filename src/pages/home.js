import React, { Component } from 'react';

import { smoothScroll } from '../providers/smoothScroll';

import Gift from '../components/gift';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Modal from '../components/modal';
import './home.css';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }

        this.gifts = [
            {
                icon: 'croissant.png',
                title: 'Croissants na boulangerie da esquina',
                priceInReal: 25,
                priceInEuro: 5,
                url: 'https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=181978185-40565c7d-9e25-49c6-88e5-9b1f7669407f'
            },
            {
                icon: 'patinete.png',
                title: 'Passeio de patinete pela cidade',
                priceInReal: 50,
                priceInEuro: 10,
                url: 'https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=181978185-a02eb801-4f9a-4949-906c-50499d8e3383'
            },
            {
                icon: 'livros.png',
                title: 'Material para as aulas de francês',
                priceInReal: 100,
                priceInEuro: 20,
                url: 'https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=181978185-8aad55c7-5341-43e8-bce3-50c12f5851f3'
            },
            {
                icon: 'piquenique.png',
                title: 'Piquenique no jardim de Versailles',
                priceInReal: 150,
                priceInEuro: 30,
                url: 'https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=181978185-28eae47c-aa77-42c8-8506-fc3308e5b429'
            },
            {
                icon: 'supermercado.png',
                title: 'Compras da semana no "supermarché"',
                priceInReal: 250,
                priceInEuro: 50,
                url: 'https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=181978185-3d749e5c-aa78-4b72-b164-50b8794e962e'
            },
            {
                icon: 'jantar.png',
                title: 'Jantar no topo da Torre Eiffel',
                priceInReal: 500,
                priceInEuro: 100,
                url: 'https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=181978185-06dd9241-bdda-404a-bc36-87109c8374a4'
            }
        ];
    }

    componentDidMount() {
        //https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize');
    }

    openLink(link, target) {
        window.open(link, target);
    }

    renderGifts() {
        return this.gifts.map(gift => {
            const { icon, title, priceInReal, priceInEuro, url } = gift;
            return (<Gift key={title} icon={icon} title={title} priceInReal={priceInReal} priceInEuro={priceInEuro} url={url} />);
        });
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal }, () => {
            const overflow = this.state.showModal ? 'hidden' : 'auto';
            const body = document.body;
            body.style.overflow = overflow;
        });
    }

    render() {
        return (
            <main className="home">
                <section className="picture">
                    <Menu />
                    <Logo />
                    <button className="button button--details button--primary" type="button" onClick={() => smoothScroll('detalhes')}>
                        <span class="button__label">Detalhes</span>
                        <svg class="chevron-bottom" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path id="path-1" d="M11.6667 18.75 0 30.416664 50 80.416664 100 30.416664 88.3333 18.75 50 57.083364z"></path>
                        </svg>
                    </button>
                </section>
                <section id="detalhes" className="sidebar">
                    <article id="data" className="information">
                        <h2>06.10.2019</h2>
                        <p>Domingo, 15h</p>
                    </article>
                    <article id="endereco" className="information">
                        <h2>Buffet Jabuticá</h2>
                        <p>Rua Harmonia, 896</p>
                        <p>Vila Madalena</p>
                        <p>São Paulo/SP</p>
                        <button className="button button--default" type="button" onClick={() => this.openLink('https://goo.gl/maps/4E2ShLMS6jcas1Zf8', '_blank')}>Ver no mapa</button>
                    </article>
                    <article id="lista-de-presentes" className="information information__gifts">
                        <h2>Envie um presente</h2>
                        <p>Por questões de logística, não fizemos uma lista “convencional” de presentes de casamento, já que não será possível levar tudo conosco para outro país. No entanto, criamos essa outra opção para que nossos convidados, caso se sintam à vontade, possam contribuir com algum valor. </p>
                        <p>A quantia adquirida será usada para terminarmos de mobiliar e decorar nosso apê.</p>
                        <button className="button button--primary" type="button" onClick={() => this.toggleModal()}>Ver opções</button>
                    </article>
                </section>
                <Modal show={this.state.showModal} onClose={() => this.toggleModal()}>
                    <div className="modal__content">
                        <h1>Envie um presente</h1>
                        <p>Os itens são ilustrativos e essas quantias são algumas sugestões. Se quiser contribuir com algum outro valor que não esteja abaixo, entre em contato conosco.</p>

                        <div className="gift__list">
                            { this.renderGifts() }
                        </div>
                    </div>
                </Modal>
            </main>            
        )
    }
}