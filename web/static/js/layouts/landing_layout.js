import React                from 'react';
import LandingHeader        from '../components/headers/landing_header';


export default class LandingLayout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <LandingHeader />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
