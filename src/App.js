import './App.css';
import React, {Component} from "react";
import background from './assets/background.jpg';
import data from './data';
import Star from './components/Star/Star';

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentWillMount() {
        this.setState({
            data: data
        })
    }

    render() {
        return (
            <div className="App"><Star/>
                <img src={background} className="background" alt="background" />
              <Star/>
            </div>
        );
    }

}

export default App;
