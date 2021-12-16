import React from 'react';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Zaktualizuj stan, aby następny render pokazał zastępcze UI.
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// Możesz także zalogować błąd do zewnętrznego serwisu raportowania błędów
		//TODO wyslij bład do serwera (??)
	}

	render() {
		if (this.state.hasError) {
			// Możesz wyrenderować dowolny interfejs zastępczy.
			return <h1>Something went wrong.</h1>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
