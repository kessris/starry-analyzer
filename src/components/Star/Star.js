import React, {Component} from "react";
import './Star.css';
import Xarrow from "react-xarrows";

class Star extends Component{

    constructor(props) {
        super(props);
        this.state = {
            x: null,
            y: null
        }
    }

    componentWillMount() {
        let temp = [];
        this.props.dependencies.forEach(method => {
            temp.push({
                targetId: method,
                targetAnchor: 'top',
                sourceAnchor: 'bottom',
                style: { strokeColor: 'black', strokeWidth: 1 },

            })
        });
        this.setState({
           arrows: temp
        })
    }

    getRandomPosition = () => {
        const xBoundary = window.innerWidth - 300;
        const yBoundary = window.innerHeight - 300;

        let randomX = Math.floor(Math.random() * window.innerWidth);
        let randomY = Math.floor(Math.random() * window.innerHeight);

        while (randomX < 0 || randomX > xBoundary || randomY < 100 || randomY > yBoundary) {
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
        const {x, y, arrows} = this.state;

        if (this.state.x === null || this.state.y === null) this.getRandomPosition();
        console.log(name)
        console.log(arrows)
        return (
            <div className="star" style={{top: y+'px', left: x+'px'}} id={name}>
                <div className="method-name" onClick={() => this.props.openModal({name: name, status: status, messages: messages, dependencies: dependencies})}
                     style={{animation: status === 'ok'? 'glow-green 1s ease-in-out infinite alternate' :
                             status==='warning'? 'glow-yellow 1s ease-in-out infinite alternate' : 'glow-red 1s ease-in-out infinite alternate'}}>
                    {name}
                </div>
                {dependencies.map(d => {
                    return <Xarrow start={name} end={d} color='white' strokeWidth='1' headSize='20' path='straight'/>
                })}
            </div>
        );
    }

}

export default Star;
