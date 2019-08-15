import React from 'react';

import Menu from '../components/menu';
import './home.css';

const Home = () => (
    <main className="home">
        <section className="picture">
            <Menu />
            <button className="button button--primary" type="button">Detalhes</button>
        </section>
        <section className="sidebar">
            <article className="information">
                <h2 id="date">06.10.2019</h2>
                <p>Domingo, 15h</p>
            </article>
            <article className="information">
                <h2 id="address">Buffet Jabuticá</h2>
                <p>Rua Harmonia, 896</p>
                <p>Vila Madalena</p>
                <p>São Paulo/SP</p>
                <button className="button button--default" type="button">Ver no mapa</button>
            </article>
            <article className="information information__gifts">
                <h2 id="gifts">Envie um presente</h2>
                <p>Por questões de logística, não fizemos uma lista “convencional” de presentes de casamento, já que não será possível levar tudo conosco para outro país. No entanto, criamos essa outra opção para que nossos convidados, caso se sintam à vontade, possam contribuir com algum valor. </p>
                <p>A quantia adquirida será usada para terminarmos de mobiliar e decorar nosso apê.</p>
                <button className="button button--primary" type="button">Ver opções</button>
            </article>
        </section>
    </main>
);

export default Home;