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
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
