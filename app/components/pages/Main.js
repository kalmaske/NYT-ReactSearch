// Include React 
var React = require('react');

// Component creation
var Form = React.createClass({

	getInitialState: function(){
		return {
			topic: "",
			startYear: "",
			endYear: ""
		}
	},

	// function should respond to the user input 
	handleChange: function(event){

    	// create syntax to capture any change in text to the query terms
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

	// When a user submits... 
	handleClick: function(){
	
		this.props.setTerm(this.state.topic, this.state.startYear, this.state.endYear);

	},

	// render function
	render: function(){

		return(

			<div className="panel panel-primary">
				<div className="panel-heading">
					<h2 className="panel-title text-center"><strong>Search</strong></h2>
				</div>
				<div className="panel-body text-center">

						<form>
							<div className="form-group">
								<h4 className=""><strong>Topic</strong></h4>
								<input type="text" className="form-control text-center" id="topic" onChange= {this.handleChange} required/>
								<br />

								<h4 className=""><strong>Start Year</strong></h4>
								<input type="text" className="form-control text-center" id="startYear" onChange= {this.handleChange} required/>
								<br />

								<h4 className=""><strong>End Year</strong></h4>
								<input type="text" className="form-control text-center" id="endYear" onChange= {this.handleChange} required/>
								<br />
								
								<button type="button" className="btn btn-primary" onClick={this.handleClick}>Search</button>
							</div>

						</form>
				</div>
			</div>
		)
	}
});


module.exports = Form;