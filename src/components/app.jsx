import React from 'react';
import Header from './header';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid about"></div>
        <div className="container-fluid skills"></div>
        <div className="container-fluid applications"></div>
        <div className="container-fluid contact"></div>
      </>
    );
  }
}
