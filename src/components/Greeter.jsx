import React from "react";
// console.log(React)
// This is a class-base component which require a render() rather than just a return
// React.Component is the object factory
// extends the object for us to interact with
// react is a giant object that we create other objects within
// class-based comps require a render to be rendered
class Greeter extends React.Component { 
    // constructors must be built to take in props
    render() {
        return(
            <>
            <h2>Hello Again! My name is {this.props.name}.</h2>
            <p>I am {this.props.age} years old.</p>
            </>
        )
    }
}

export default Greeter;