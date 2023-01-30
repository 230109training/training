import React, { Component } from 'react'

interface Props{
    message: string
}

export default class ClassComponent extends Component<Props> {

    state = {
        count: 0
    }

    increment = () => {
        // We have to use the setState method to update the state of the class
        // This will trigger a re render and update the component on the website
        // If you do not, the state will update but a render method call will not be invoked by React

        // this.state.count = this.state.count + 1;
        // console.log(this.state.count);
        this.setState({count: this.state.count + 1})
    }


  render() {
    return (
        <>
            <h2>{this.state.count}</h2>
            <button onClick={this.increment}>Increment</button>

            <div>
                <h1>Code</h1>
                <pre style={{
                    textAlign: "left",
                    backgroundColor: "black",
                    color: "white"
                }}>{
`
import React, { Component } from 'react'

interface Props{
    message: string
}

export default class ClassComponent extends Component<Props> {

    state = {
        count: 0
    }

    increment = () => {
        // We have to use the setState method to update the state of the class
        // This will trigger a re render and update the component on the website
        // If you do not, the state will update but a render method call will not be invoked by React

        // this.state.count = this.state.count + 1;
        // console.log(this.state.count);
        this.setState({count: this.state.count + 1})
    }


    render() {
        return (
            <>
                <h2>{this.state.count}</h2>
                <button onClick={this.increment}>Increment</button>
            </>

        )
    }

    componentDidMount(): void {
        console.log("Mounted!");
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("Updated!");
    }

    componentWillUnmount(): void {
        console.log("Unmounted!");
    }


}
                    `
                    }</pre>
            </div>
        </>

    )
  }

  componentDidMount(): void {
      console.log("Mounted!");
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void {
      console.log("Updated!");
  }

  componentWillUnmount(): void {
      console.log("Unmounted!");
  }


}
