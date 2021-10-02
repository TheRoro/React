import React from 'react';
import {Spring} from 'react-spring/renderprops';

export default function Component1() {
    return(
        <Spring
            from={{marginLeft: -5000 }}
            to={{marginLeft: 0 }}
        >
            { props => (
                <div style={props}>
                    <div style={c1Style}> 
                        <h1>Component 1</h1>
                        <p>lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Possimus
                            nobis adipisci eun minima deserunt at
                            porro, veritatis officia commodi itaque
                            voluptates vel suscipit assumenda soluta.
                        </p>
                        <Spring
                            from={{number: 0}}
                            to={{number: 10}}
                            config={{delay: 3000, duration: 10000}}
                        >
                            {props => (
                                <div style={props}>
                                    <h1 style={counter}>
                                        {props.number.toFixed()}
                                    </h1>
                                </div>
                            )}
                        </Spring>
                    </div>
                </div>
            )}
        </Spring>
    )
}

const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}

const counter = {
    background: '#333',
    textAlign: 'center',
    width: '100px',
    borderRadius: '50%',
    margin: '1rem auto'
};