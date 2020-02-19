import React from 'react';
import Header from './header';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid section-2"></div>
        <div className="container-fluid section-3"></div>
        <div className="container-fluid section-4"></div>
        <div className="container-fluid section-5"></div>
      </>
    );
  }
}
