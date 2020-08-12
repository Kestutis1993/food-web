import * as React from 'react';

interface IProps {
  name: string;
}

class App extends React.Component<IProps, {}> {
  render () {
    return (
      <div>
        <h1>Welcome to React + Typescript</h1>
        <p>The color of this page is: {this.props.name}</p>
      </div>
    );
  }
}


export default App;
