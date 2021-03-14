import React from 'react';
import { useSelector } from 'react-redux';


// Displays stored name, email, and scrambled password.
export const Dashboard = () => {
    const name = useSelector(state => state.name);
    const email = useSelector(state => state.email);
    const password = useSelector(state => state.password);

    return (
        <section>
            <article>
                <h3>{name}</h3>
                <h3>{email}</h3>
                <h3>{password}</h3>
            </article>
        </section>
    )
};