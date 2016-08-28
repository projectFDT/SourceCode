import React               from 'react';

export default class SimpleCard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="row">
        <div className="col s12 m8">
          <div className="card">
            <div className="card-content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
