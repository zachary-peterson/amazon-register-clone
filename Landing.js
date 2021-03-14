import React from 'react';
import { Footer } from '../../Common/Footer';
import { Header } from '../../Common/Header';
import { Body } from './Body';

// Container component for Landing
export const Landing = () => {


    return (
        <section>
            <Header />
            <Body />

            <hr className="hr__two"/>

            <Footer />
        </section>
    )
};