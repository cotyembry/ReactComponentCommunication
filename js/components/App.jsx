import React from 'react';

import Parent from './Parent.jsx';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Parent numberOfChildren={7} />
			</div>
		)
	}
}
