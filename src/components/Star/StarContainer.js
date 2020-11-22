import React, {Component} from "react";
import Star from "./Star";
import { ArcherContainer, ArcherElement } from 'react-archer';

class StarContainer extends Component{

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        console.log(this.props.data)
        return (
            <div style={{maxWidth: '100%', display: 'flex'}}>
                {this.props.data.methods.map(method => {
                    return <Star openModal={this.props.openModal} name={method.name} status={method.status}
                                 messages={method.messages} dependencies={method.dependencies}/>
                })}
            </div>
        );
    }
}

export default StarContainer;
