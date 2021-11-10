import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Button, SubpageNavbar } from '../../components';
import { certificationNavItems } from '../../constants/subNavItems';

import './Certification.scss';

export function Certification() {
	return (
		<div className="layout-content">
			<SubpageNavbar navElements={certificationNavItems} />
			<Switch>
				<Route exact path="/certyfikacja">
					<h2>Certyfikacja</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eligendi natus nulla ratione quam
						aspernatur consequuntur doloribus iste repellendus molestias cum incidunt, dignissimos dolorum
						possimus provident quidem nostrum laudantium. Nemo!
					</p>
				</Route>
				<Route exact path="/certyfikacja/budynkow">
					<p>certyfikacja budynków</p>
				</Route>
				<Route exact path="/certyfikacja/komponentów">
					<p>komponenty</p>
				</Route>
				<Route exact path="/certyfikacja/lista-budynkow">
					<p>lista budynków</p>
				</Route>
				<Route exact path="/certyfikacja/projektanci">
					<p>projektanci</p>
				</Route>
				<Route exact path="/certyfikacja/wykonawcy">
					<p>wykonawcy</p>
				</Route>
				<Route exact path="/certyfikacja/weryfikatorzy">
					<p>weryfikatorzy</p>
				</Route>
			</Switch>

			<Button textContent={'Certyfikacja button'} />
		</div>
	);
}
