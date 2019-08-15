import React, { Component } from 'react';

import Gift from '../components/gift';
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
                icon: '🥐',
                title: 'Croissants na boulangerie da esquina',
                priceInReal: 25,
                priceInEuro: 5,
                url: 'http://google.com.br'
            },
            {
                icon: '🛴',
                title: 'Passeio de patinete pela cidade',
                priceInReal: 50,
                priceInEuro: 10,
                url: 'http://google.com.br'
            },
            {
                icon: '📚',
                title: 'Material para as aulas de francês',
                priceInReal: 100,
                priceInEuro: 20,
                url: 'http://google.com.br'
            },
            {
                icon: '🧺',
                title: 'Piquenique no jardim de Versailles',
                priceInReal: 150,
                priceInEuro: 30,
                url: 'http://google.com.br'
            },
            {
                icon: '🛒',
                title: 'Compras da semana no "supermarché"',
                priceInReal: 250,
                priceInEuro: 50,
                url: 'http://google.com.br'
            },
            {
                icon: '🍽',
                title: 'Jantar no topo da Torre Eiffel',
                priceInReal: 500,
                priceInEuro: 100,
                url: 'http://google.com.br'
            }
        ]
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

    render() {
        return (
            <main className="home">
                <section className="picture">
                    <Menu />
                    <button className="button button--primary" type="button" onClick={() => this.openLink('#details', '_self')}>Detalhes</button>
                </section>
                <section id="details" className="sidebar">
                    <article className="information">
                        <h2 id="date">06.10.2019</h2>
                        <p>Domingo, 15h</p>
                    </article>
                    <article className="information">
                        <h2 id="address">Buffet Jabuticá</h2>
                        <p>Rua Harmonia, 896</p>
                        <p>Vila Madalena</p>
                        <p>São Paulo/SP</p>
                        <button className="button button--default" type="button" onClick={() => this.openLink('https://goo.gl/maps/4E2ShLMS6jcas1Zf8', '_blank')}>Ver no mapa</button>
                    </article>
                    <article className="information information__gifts">
                        <h2 id="gifts">Envie um presente</h2>
                        <p>Por questões de logística, não fizemos uma lista “convencional” de presentes de casamento, já que não será possível levar tudo conosco para outro país. No entanto, criamos essa outra opção para que nossos convidados, caso se sintam à vontade, possam contribuir com algum valor. </p>
                        <p>A quantia adquirida será usada para terminarmos de mobiliar e decorar nosso apê.</p>
                        <button className="button button--primary" type="button" onClick={() => this.setState({ showModal: true })}>Ver opções</button>
                    </article>
                </section>
                <Modal show={this.state.showModal} onClose={() => this.setState({ showModal: !this.state.showModal })}>
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