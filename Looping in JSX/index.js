class App extends React.Component {
    render() {
        return (
            <div>
                <Friends 
                    name="Katniss"
                    hobbies={["playing", "napping", "eating", "purring"]}
                />
                <Friends2 
                    name="Sammy"
                    hobbies={["spying", "meowing", "eating", "purring"]}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));