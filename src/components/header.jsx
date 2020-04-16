import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: 0
    };
    this.scrollProgress = this.scrollProgress.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollProgress);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollProgress);
  }

  scrollProgress() {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${scrollPx / winHeightPx * 100}%`;

    this.setState({
      scrolled: scrolled
    });
  }

  render() {
    const progressContainerStyle = {
      background: '#f8bbd0',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
      width: '8px',
      height: '95px',
      borderRadius: '5px',
      zIndex: 2
    };

    const progressBarStyle = {
      width: '8px',
      bordeRadius: '5px',
      background: '#e91e63',
      height: this.state.scrolled
    };

    return (
      <div className="container-fluid fixed-top navbar navbar-light header">
        <div className="row logo align-items-center">
          <h1>wardOfCode</h1>
          <div className="col">
            <div className="progress-container" style={progressContainerStyle}>
              <div className="progression" style={progressBarStyle} />
            </div>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">About Me</li>
            <li className="nav-item">Skills</li>
            <li className="nav-item">Applications</li>
            <li className="nav-item">Contact Me</li>
          </ul>
        </div>
      </div>
    );
  }
}
