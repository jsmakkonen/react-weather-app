import React, { Component } from 'react';
import GetCurrentWeather from './components/GetCurrentWeather';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
        title: 'React weather app',
        subtitle: '2019'
    };
}

render() {
    return (
        <div>
            <Header title={this.state.title} />
            <div className="mt-5">
                <GetCurrentWeather />
            </div>
            <Footer subtitle={this.state.subtitle} />
        </div>
    );
}
}