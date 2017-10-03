import React, { Component } from 'react';
import Layout from './Components/Layout';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: "Welcome",
    };
  }

  render() {
    setTimeout(()=>{
      this.setState({title:'Welcome Neil'});
    }, 3000);

    return (
      <div className="App">
        <Header title={this.state.title}/>
        <Layout />
        <Footer />
      </div>
    );
  }
}

export default App;
