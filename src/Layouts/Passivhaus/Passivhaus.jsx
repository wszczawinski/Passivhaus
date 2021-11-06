import React from 'react';
import './Passivhaus.scss';
import { Button, SubpageNavbar } from '../../components';
import { Switch, Route } from 'react-router-dom';

export function Passivhaus() {
    const navElements = [
        { name: 'Charakterystyka', path: '/budynek-pasywny/charakterystyka' },
        { name: 'Wymagania', path: '/budynek-pasywny/wymagania' },
        { name: 'Instrukcja', path: '/budynek-pasywny/instrukcja' },
    ];

    return (
        <div className="layout-content">
            <SubpageNavbar navElements={navElements} />

            <Switch>
                <Route exact path="/budynek-pasywny/charakterystyka">
                    <p>charakterystyka</p>
                </Route>
                <Route exact path="/budynek-pasywny/wymagania">
                    <p>wymagania</p>
                </Route>
                <Route exact path="/budynek-pasywny/instrukcja">
                    <p>instrukcja</p>
                </Route>
            </Switch>

            <h2>Passivhaus</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eligendi natus nulla
                ratione quam aspernatur consequuntur doloribus iste repellendus molestias cum
                incidunt, dignissimos dolorum possimus provident quidem nostrum laudantium. Nemo!
            </p>
            <Button textContent={'Passivehaus button'} />
        </div>
    );
}
