class Hi extends React.Component {
	render() {
		
		console.log(this.props);
		const props = this.props;
		return <h1>Hi {props.to}, from {props.from}!</h1>;
	}
}

/*
	 Props are immutable
	 for example,
		this.props.to = "Ringo"
		this.props.age = 9
	these code will not work, it will give you an error
	 
	props is read-only

 */