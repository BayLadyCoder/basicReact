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

/* connect component with HTML */
ReactDOM.render(<HelloWorld />, document.getElementById("root"));
