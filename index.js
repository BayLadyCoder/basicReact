class Hello extends React.Component {
    render() {
        /* 
        render method only return one element/tag
        so if you want to return multiple tags, 
        you need to wrap them all in one tag
         */
        return (
        <div>
        <h1>Hello There!</h1>
        <h1>Hello There!</h1>
        <h1>Hello There!</h1>
        </div>
        );
    }
}

/* connect component with HTML */
ReactDOM.render(<Hello/>, document.getElementById('root'));