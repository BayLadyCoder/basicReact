class App extends React.Component {
	render() {
		return ( 
			<div>
			<Hi 
			to="Katniss" 
			from="Bay" 
			age={3}
			friends={["Sammy", "Ringo","Percy"]}
			isCute={true}
			bangs={5}
			/>
			</div>
		);
	}
}

ReactDOM.render( < App / > , document.getElementById("root"));