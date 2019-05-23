class App extends React.Component {
    render() {
        return (
            <div className="flex-column center">
                <h1>My Pets</h1>
                <Friends 
                    name="Katniss"
                    hobbies={["playing", "napping", "eating", "purring"]}
                    animal="rat"
                />
                <Friends2 
                    name="Sammy"
                    hobbies={["spying", "meowing", "eating", "purring"]}
                    lastname="Lady"
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));