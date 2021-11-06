import React from 'react';
import './Firm.scss';
import { Announcements, Button, SubpageNavbar } from '../../components';
import { Switch, Route } from 'react-router-dom';

export function Firm() {
    const navElements = [
        ['Aktualności', '/firma/aktualnosci'],
        ['O nas', '/firma/onas'],
        ['Partnerzy', '/firma/partnerzy'],
    ];

    return (
        <div className="layout-content">
            <SubpageNavbar navElements={navElements} />
            <Announcements />

            <Switch>
                <Route exact path="/firma/aktualnosci">
                    <p>aktualnosci</p>
                </Route>
                <Route exact path="/firma/onas">
                    <p>onas</p>
                </Route>
                <Route exact path="/firma/partnerzy">
                    <p>Partnerzy</p>
                </Route>
            </Switch>

            <h2>Firma</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, nihil est
                repellat consequatur quam enim! Error asperiores doloribus voluptatum eos
                consequuntur id animi nostrum. Vel consectetur explicabo officia atque natus!
            </p>
            <Button textContent={'Text'} />
        </div>
    );
}
