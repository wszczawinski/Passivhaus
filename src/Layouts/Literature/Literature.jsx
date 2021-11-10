import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Button, SubpageNavbar } from '../../components';
import { literatureNavItems } from '../../constants/subNavItems';

import './Literature.scss';

export function Literature() {
	return (
		<div className="layout-content">
			<SubpageNavbar navElements={literatureNavItems} />
			<Switch>
				<Route exact path="/literatura+narzedzia">
					<h2>Literatura</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eligendi natus nulla ratione quam
						aspernatur consequuntur doloribus iste repellendus molestias cum incidunt, dignissimos dolorum
						possimus provident quidem nostrum laudantium. Nemo!
					</p>
				</Route>
				<Route exact path="/literatura+narzedzia/wyszukiwarka-budynkow-pasywnych">
					<p>wyszukiwarka</p>
				</Route>
			</Switch>

			<Button textContent={'Literature button'} />
		</div>
	);
}
