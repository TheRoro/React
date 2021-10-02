import React, {Component} from 'react';
import {Spring} from 'react-spring/renderprops';

export class Component2 extends Component {
    render(){
        return(
            <Spring
                from={{opacity: 0 }}
                to={{opacity: 1 }}
                config={{delay: 1000, duration: 1500}}
            >
                { props => (
                    <div style={props}>
                        <div style={c2Style}> 
                            <h1>Component 2</h1>
                            <p>lorem ipsum dolor sit, amet
                                consectetur adipisicing elit. Possimus
                                nobis adipisci eun minima deserunt at
                                porro, veritatis officia commodi itaque
                                voluptates vel suscipit assumenda soluta.
                            </p>
                            <button style={btn} onClick={this.props.toggle}>Toggle Component 3</button>
                        </div>
                    </div>
                )}
            </Spring>
        )
    }
}

const c2Style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.5rem'
}

const btn = {
    background: '#333',
    color: '#fff',
    padding: '1rem 2rem',
    border: 'none',
    textTransform: 'uppercase',
    margin: '15px 0'
};

export default Component2;