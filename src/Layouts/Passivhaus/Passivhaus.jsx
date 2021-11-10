import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Button, SubpageNavbar } from '../../components';
import { passivhausNavItems } from '../../constants/subNavItems';

import './Passivhaus.scss';

export function Passivhaus() {
	return (
		<div className="layout-content">
			<SubpageNavbar navElements={passivhausNavItems} />

			<Switch>
				<Route exact path="/budynek-pasywny">
					<h2>Passivhaus</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eligendi natus nulla ratione quam
						aspernatur consequuntur doloribus iste repellendus molestias cum incidunt, dignissimos dolorum
						possimus provident quidem nostrum laudantium. Nemo!
					</p>
				</Route>
				<Route exact path="/budynek-pasywny/charakterystyka">
					<p>charakterystyka</p>
				</Route>
				<Route exact path="/budynek-pasywny/wymagania">
					<p>wymagania</p>
				</Route>
				<Route exact path="/budynek-pasywny/instrukcja">
					<p>instrukcja</p>
				</Route>
				<Route exact path="/budynek-pasywny/passipedia">
					<p>passipedia</p>
				</Route>
				<Route exact path="/budynek-pasywny/historia">
					<p>historia</p>
				</Route>
			</Switch>
			<Button textContent={'Passivehaus button'} />
		</div>
	);
}
