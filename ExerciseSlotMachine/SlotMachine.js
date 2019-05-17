class SlotMachine extends React.Component {
	render() {
		
		console.log(this.props);
		const {pos1, pos2, pos3} = this.props;
		/*
		let msg;
			if (pos1 === pos2 && pos2 === pos3) {
				msg = "You Win!";
			} else {
				msg = "You Lose!";
			} 

			<p>{msg}</p>
		*/
		let winning = (pos1 === pos2 && pos2 === pos3);
		return (
			<div>
				<p>{pos1} {pos2} {pos3}</p>
				<p>{ winning ? "You Win!" : "You Lose!"}</p>
				<hr/>
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