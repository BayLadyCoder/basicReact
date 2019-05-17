
function getNum() {
	return Math.floor(Math.random() * 10 + 1);
}

function NumPicker() {
	const num = getNum();
	let msg;
	if (num === 7) {
		msg = (
			<img src="https://media1.giphy.com/media/xThuWpoG470Q0stGmI/source.gif" />
		);
	} else {
		msg = <p>Don't give up!</p>;
	}
	return (
		<div>
			<h2>Number Picker</h2>
			<h3>Your Number is {num}</h3>
			<p>{msg}</p>
		</div>

	);
}