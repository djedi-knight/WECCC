import React, {PropTypes} from 'react';

class LoginForm extends React.Component{
		constructor(props, context){
			super(props, context);

			this.state = {
				name: {fname: ""}
			};
	

	this.onFnameChange = this.onFnameChange.bind(this);
	this.onClickSave = this.onClickSave.bind(this);

}

onFnameChange(event) {
	const name = this.state.name;
	name.fname = event.target.value;
	this.setState({name: name});
}


onClickSave() {
	alert('Saving ${this.state.name.fname}');
}

	render() {
		return(
			<div>
				
				<h2> Login Form</h2>
				<input type= "text" onChange={this.onFnameChange} value={this.state.name.fname}/>

				<input type="submit" value="save" onClick={this.onClickSave}/>
			</div>

		);
	}
}

export default LoginForm;