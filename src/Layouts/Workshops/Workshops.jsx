import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Button, SubpageNavbar } from '../../components';
import { workshopsNavItems } from '../../constants/subNavItems';

import './Workshops.scss';

export function Workshops() {
	return (
		<div className="layout-content">
			<SubpageNavbar navElements={workshopsNavItems} />
			<Switch>
				<Route exact path="/szkolenia">
					<h2>Workshops</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eligendi natus nulla ratione quam
						aspernatur consequuntur doloribus iste repellendus molestias cum incidunt, dignissimos dolorum
						possimus provident quidem nostrum laudantium. Nemo!
					</p>
				</Route>
				<Route exact path="/szkolenia/projektant-doradztwa">
					<p>doradztwo</p>
				</Route>
				<Route exact path="/szkolenia/mistrz-wykonawca">
					<p>wykonawca</p>
				</Route>
				<Route exact path="/szkolenia/phpp">
					<p>phpp</p>
				</Route>
				<Route exact path="/szkolenia/mostki-cieplne">
					<p>mostki</p>
				</Route>
			</Switch>
			<Button textContent={'Workshops button'} />
		</div>
	);
}
