import React, { Component } from 'react';


class Working extends Component {

	constructor() {
  		super();
		this.state = {
  			working: true
					};
}
Click = () => {
this.setState({ working: !this.state.working });
}


  	render() {
    	const homer = this.state.working ? 'working' : 'break';
    		return (
				<div>
					<h1>{this.props.name} is</h1>

	
				<button onClick={this.Click} className={homer}>{homer}</button>

				</div>
    );
  }
}

export default Working;