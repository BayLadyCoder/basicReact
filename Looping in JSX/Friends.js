class Friends extends React.Component {
    render() {
        const {name, hobbies} = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>

        );
    }
}



class Friends2 extends React.Component {
    render() {
        const {name, hobbies} = this.props;
        const list =  hobbies.map(h => <li>{h}</li>)
        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {list}
                </ul>
            </div>

        );
    }
}
