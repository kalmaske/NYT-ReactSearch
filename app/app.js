// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Include the Main Component
var Main = require('./Components/pages/Main')

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(

	<Main />,
	<Saved />,
	<Search />,
	document.getElementById('app')
)