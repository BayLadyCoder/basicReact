class HelloThere extends React.Component {
	render() {
		/* 
        Must return one element/tag
        so if you want to return multiple tags, 
        you need to wrap them all in one tag
         */
		return (
			<div>
				<h1>Hello There!</h1>
				<h2>from Class Component</h2>
			</div>
		);
	}
}

function HelloWorld() {
	/*
        Must return one element/tag
        so if you want to return multiple tags, 
        you need to wrap them all in one tag
     */
	return (
		<div>
			<h1>Hello World</h1>
			<h2>from Function Component</h2>
			<img src="http://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg" />
		</div>
	);
}

// -------------------------------------------------------

function getMood() {
	const moods = ["Happy", "Silly", "Angry", "Sad", "Hungry"];
	return moods[Math.floor(Math.random() * moods.length)];
}

function JSXDemo() {
	return (
		<div>
			<h1>JSX Demo</h1>
			<h2>from Function Component</h2>

			<div>
				<h3>Embeded JSX</h3>
				<h4>
					Calculating with JS: {4 * 5}, {80 - 9}
				</h4>
			</div>
			<hr />
			<div>
				<h3>JS functions</h3>
				<h4>My Current Mood is: {getMood()}</h4>
			</div>
			<img src="http://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg" />
		</div>
	);
}

// -------------------------------------------------------

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
			<h1>Conditional in JSX</h1>
			<h3>Your Number is {num}</h3>
			<p>{msg}</p>
		</div>
		/* 
           {num === 7 ? (
				<img src="https://media1.giphy.com/media/xThuWpoG470Q0stGmI/source.gif" />
			) : null}

            OR (if the first condition is True, img will show, else img not show)

            {num === 7 && 
				<img src="https://media1.giphy.com/media/xThuWpoG470Q0stGmI/source.gif" />
			}
         */
	);
}

/* connect component with HTML */
ReactDOM.render(<JSXDemo />, document.getElementById("root"));
