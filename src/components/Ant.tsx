import * as React from "react"

export interface AntProps {
  name: string
  company: string
}

class Ant extends React.Component<AntProps, {}> {
  render() {
    return (
      <h1>
        Hello, I am {this.props.name}, I in {this.props.company} now!
      </h1>
    )
  }
}

export default Ant
