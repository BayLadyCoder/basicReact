class Hi extends React.Component {
	render() {
		
		console.log(this.props);
		const props = this.props;
		let bangs = "!".repeat(this.props.bangs)
		let isTrue;
		if(props.isCute){
			isTrue = "true";
		} else {
			isTrue = "flase";
		}
		return (
			<div>
				<h1>Hi {props.to}, who is {props.age} years old. Her friends are {props.friends}, and it's {isTrue} that she is cute.</h1>
				<h1>I love you so much{bangs} from {props.from}</h1>
			</div>
		);
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