import React from 'react';

// var self;

export default class Child extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		}

		// self = this;


		// console.log('here', this.props.updateStoreCallback)

		//by passing in the prop to this Child component of what the keyId is, this allows me to access the Parent's store by using this keyId prop value (since this keyId value is the hash key to the Child's state)
		//I will set updateStore up as a local method tied to this component
		this.updateStore = this.props.updateStoreCallback;

	}
	_onChange() {
		var newCountValue = this.state.count + 1;

		this.setState({
			count: newCountValue
		})

		//here is where I update the store (that is located in the Parent.jsx object)
		//note the this.props.keyId is crucial to getting this to update the correct component, and I pass the new value along with it
		this.updateStore(this.props.keyId, newCountValue)
	}
	render() {
		return (
			<div style={styles.root} onClick={this._onChange.bind(this)}>
				Child Element: {this.state.count}
			</div>
		)
	}
}

var styles = {
	root: {
		width: 200,
		height: 100,
		backgroundColor: 'orange',
		border: '1px solid black',
		boxSizing: 'border-box',
		cursor: 'pointer'
	}
}
