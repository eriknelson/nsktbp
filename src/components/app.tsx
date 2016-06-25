import * as React from 'react';
import Hello from './hello'
import Counter from './counter'

class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Hello />
        <Counter />
      </div>
    )
  }
}

export default App;
