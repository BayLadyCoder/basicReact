class Friends extends React.Component {

    // default props
    static defaultProps = {
        lastname: 'Grove',
        animal: 'cat'
    }

    render() {
        const {name, hobbies, lastname, animal} = this.props;
        return (
            <div>
                <h1>{name} {lastname}, {animal}</h1>
                <ul>
                    {hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>

        );
    }
}



class Friends2 extends React.Component {
    // default props
    static defaultProps = {
        lastname: 'Grove',
        animal: 'cat'
    }
    render() {
        const {name, hobbies, lastname, animal} = this.props;
        const list =  hobbies.map(h => <li>{h}</li>)
        return (
            <div>
                <h1>{name} {lastname}, {animal}</h1>
                <ul>
                    {list}
                </ul>
            </div>

        );
    }
}
