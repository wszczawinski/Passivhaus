import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Announcements, Button, SubpageNavbar } from '../../components';
import { firmNavItems } from '../../constants/subNavItems';

import './Firm.scss';

export function Firm() {
	return (
		<div className="layout-content">
			<SubpageNavbar navElements={firmNavItems} />
			<Announcements />

			<Switch>
				<Route exact path="/firma">
					<h2>Firma</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, nihil est repellat
						consequatur quam enim! Error asperiores doloribus voluptatum eos consequuntur id animi nostrum.
						Vel consectetur explicabo officia atque natus!
					</p>
				</Route>
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
			<Button textContent={'Text'} />
		</div>
	);
}
