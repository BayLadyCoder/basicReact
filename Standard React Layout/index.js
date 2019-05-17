class App extends React.Component {
	render() {
		return (
			<div>
				<HelloWorld />
				<NumPicker />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));