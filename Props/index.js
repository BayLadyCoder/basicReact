class App extends React.Component {
	render() {
		return ( 
			<div>
			<Hi to="Katniss" from="Bay" />
			<Hi to="Sammy" from="Andrew" />
			</div>
		);
	}
}

ReactDOM.render( < App / > , document.getElementById("root"));