/*
 Function Components
 - Used for simpler (dumb) components
 - Write logic in a JS Function
 - No render() method needed, just return content
 */
function HelloWorld() {
	/*
          Must return one element/tag
          so if you want to return multiple tags, 
          you need to wrap them all in one tag
       */
	return (
		<div>
			<h1> Hello World </h1>
			<h2> from Function Component </h2>
		</div>
	);
}

// -----------------------------------------------------------------

// Class Component
class HelloThere extends React.Component {
	render() {
		/* 
            Must return one element/tag
            so if you want to return multiple tags, 
            you need to wrap them all in one tag
             */
		return (
			<div>
				<h1> Hello There! </h1>
				<h2> from Class Component </h2>
			</div>
		);
	}
}

// -----------------------------------------------------------------

/*
 Class and Function Components:
 - Both can accept props and render content
 - Historically, function components couldn't use import features like:
    - State
    - Lifecycle Methods
 - (with Hooks, we can now write full-featured function components)
 */
