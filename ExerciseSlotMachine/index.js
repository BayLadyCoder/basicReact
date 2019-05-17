class App extends React.Component {
	render() {
		return ( 
			<div>
			<h1>Slot Machines!</h1>
			<SlotMachine pos1="&#9883;" pos2="&#9752;" pos3="&#9732;" />
			<SlotMachine pos1="&#9883;" pos2="&#9883;" pos3="&#9883;" />
			<SlotMachine pos1="&#9732;" pos2="&#9752;" pos3="&#9883;" />
			</div>
		);
	}
}

ReactDOM.render( < App / > , document.getElementById("root"));