import React from 'react';

import Menu from '../components/menu';
import './home.css';

const Home = () => (
    <main className="home">
        <section className="picture">
            <Menu />
            <button className="button button--primary" type="button">Detalhes</button>
        </section>
        <section className="sidebar"></section>
    </main>
);

export default Home;