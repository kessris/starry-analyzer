import React, {Component} from "react";
import './Star.css';

class Star extends Component{

    constructor(props) {
        super(props);
        this.state = {
            x: null,
            y: null
        }
    }

    getRandomPosition = () => {
        const xBoundary = window.innerWidth - 300;
        const yBoundary = window.innerHeight - 300;

        let randomX = Math.floor(Math.random() * window.innerWidth);
        let randomY = Math.floor(Math.random() * window.innerHeight);

        while (randomX < 0 || randomX > xBoundary || randomY < 0 || randomY > yBoundary) {
            randomX = Math.floor(Math.random() * window.innerWidth);
            randomY = Math.floor(Math.random() * window.innerHeight);
        }

        this.setState({
            x: randomX,
            y: randomY
        })
    };

    render() {
        const {name, status, messages, dependencies} = this.props;
        const {x, y} = this.state;

        if (this.state.x === null || this.state.y === null) this.getRandomPosition();

        return (
            <div className="star" style={{top: y+'px', left: x+'px'}}>
                <div className="method-name" onClick={() => this.props.openModal({name: name, status: status, messages: messages, dependencies: dependencies})}
                     style={{animation: status === 'ok'? 'glow-green 1s ease-in-out infinite alternate' :
                             status==='warning'? 'glow-yellow 1s ease-in-out infinite alternate' : 'glow-red 1s ease-in-out infinite alternate'}}>
                    {name}
                </div>
            </div>
        );
    }

}

export default Star;
