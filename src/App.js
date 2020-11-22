import './App.css';
import React, {Component} from "react";
import background from './assets/background.jpg';
import data from './data';
import StarContainer from './components/Star/StarContainer';
import Legend from "./components/misc/Legend";

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isModalOpen: false,
            modalContent: {}
        }
    }

    componentWillMount() {
        this.setState({
            data: data
        })
    }

    openModal = (content) => {
        // content: {name, status, messages, dependencies}
      this.setState({
          isModalOpen: true,
          modalContent: content
      })
    };

    render() {
        const {data, isModalOpen, modalContent} = this.state;
        return (
            <div className="App">

                <div className="root">
                    <p>STARRY METHODS</p>
                    <StarContainer openModal={this.openModal} data={data}/>
                    <div className="modal" style={{display: isModalOpen? 'block' : 'none'}}>
                        <div className="modal-content">
                            <span className="close" onClick={() => this.setState({ isModalOpen: false })}>&times;</span>
                            <h1>{modalContent.name}</h1>
                            <br/>
                            <h3>Status: {modalContent.status}</h3>
                            {modalContent.messages && modalContent.messages.map(msg => {
                                return <h3>{msg}</h3>
                            })}
                        </div>
                    </div>
                </div>
                <Legend/>
                <img src={background} className="background" alt="background"/>
            </div>
        );
    }

}

export default App;
