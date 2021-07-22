import React from 'react'

class App extends React.Component {

  setData() {
    let obj = { name: 'John', age: 12, email: 'myemail@mail.com' }
    localStorage.setItem('myData', JSON.stringify(obj))

    sessionStorage.setItem('mySessionData', JSON.stringify(obj))
  }

  getData() {
    let data = sessionStorage.getItem('mySessionData')
    data = JSON.parse(data)
    console.log(data)
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setData()}>Set Data</button>
        <button onClick={() => this.getData()}>Get Data</button>
      </div>
    );
  }
}

export default App;
