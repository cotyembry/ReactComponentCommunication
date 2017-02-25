import React from 'react';

import Child from './Child.jsx';

export default class Parent extends React.Component {
	constructor(props) {
		super(props);

		//I will keep the store within the Parent.jsx component and Child.jsx will update it through callbacks
		this.store = {};
		this.Children = [];

		for(var i = 0; i < this.props.numberOfChildren; i++) {
			//use a hash so this strategy can be used for 'n' number of elements
			//pass in the callback function to be able to have a handle in this Parent component for when the child component's state changes
			
			var callback = function(key, newValue) {
				// var newValue = self.getNewValue();
				console.log(key, newValue)
				this.store[key] = newValue;
				console.log(this.store)
			}

			//make sure the callback's `this` value is the Parent.jsx component so it can properly access the correct `this` value that holds the store
			callback = callback.bind(this);

			//initialize the value that the data is in the store for this particular <Child /> component that is right about to be created and pushed onto the Children array
			this.store['childElement' + i] = 'defaultValue';

			//note keyId is used with the store to know where to look for this component and the updateStoreCallback function also relies on this so it can pass this keyId value up to the Parent component from the Child component
			this.Children.push(<Child keyId={'childElement' + i} key={'childElement' + i} updateStoreCallback={callback} />)
		}
	}
	render() {
		return (
			<div>
				{ this.Children.map((ChildElement) => ChildElement) }
			</div>
		)
	}
}
