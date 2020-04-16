import React from 'react';
import Header from './header';
import AboutMe from './about-me';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AboutMe />
        <div className="container-fluid skills"></div>
        <div className="container-fluid applications"></div>
        <div className="container-fluid contact"></div>
      </>
    );
  }
}
