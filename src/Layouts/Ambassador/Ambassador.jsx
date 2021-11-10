import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Button, SubpageNavbar } from '../../components';
import { ambassadorNavItems } from '../../constants/subNavItems';

import './Ambassador.scss';

export function Ambassador() {
	return (
		<div className="layout-content">
			<SubpageNavbar navElements={ambassadorNavItems} />
			<Switch>
				<Route exact path="/ambasador">
					<h2>Ambasador</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eligendi natus nulla ratione quam
						aspernatur consequuntur doloribus iste repellendus molestias cum incidunt, dignissimos dolorum
						possimus provident quidem nostrum laudantium. Nemo!
					</p>
				</Route>
				<Route exact path="/ambasador/partnerzy">
					<p>partnerzy</p>
				</Route>
			</Switch>

			<Button textContent={'Ambasador button'} />
		</div>
	);
}
