class Friends extends React.Component {

    // default props
    static defaultProps = {
        lastname: 'Grove',
        animal: 'cat'
    };


    render() {
        const {name, hobbies, lastname, animal} = this.props;
        const colors = { backgroundColor: 'rgb(28, 28, 28)', color: 'rgb(255, 190, 25)'};
        const isCat = animal === 'cat';
        return (
            <div className={`flex-column center + ${isCat ? 'cat' : 'noneCat'}`} style={colors}>
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
        const colors = { backgroundColor: 'rgb(210, 117, 3)', color: 'rgb(255, 255, 255'};
        const isCat = animal === 'cat';

        return (
            <div className={`flex-column right + ${isCat ? 'cat' : 'noneCat'}`} style={colors}>
                <h1>{name} {lastname}, {animal}</h1>
                <ul>
                    {list}
                </ul>
            </div>

        );
    }
}
