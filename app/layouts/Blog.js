import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
const { useState, useEffect } = React;
import ReactGA from 'react-ga';

import Header from '../components/Template/Header';
import Nav from '../components/Template/Nav';

if (NODE_ENV === 'production') {
  ReactGA.initialize(GA_ID);
}
function Foo() {
  const [, forceUpdate] = useState();

  useEffect(() => {
    setTimeout(forceUpdate, 2000);
  }, []);

  return <div>{Date.now()}</div>;
}
class Main extends Component {

  constructor(props){
               super(props);
               this.state = {
                   count:0,
                   count2: 100
               }
               this.setCount = this.setCount.bind(this);//how can I do this with hooks in functional component
          }
          setCount(){
                let count = this.state.count;
                     count = count+1;
                let count2 = this.state.count2;
                     count2 = count2+1;
                this.setState({count});
                this.forceUpdate();
                //before below setState the component will re-render immediately when this.forceUpdate() is called
                this.setState({count2: count})}

  componentWillMount() {
    window.scrollTo(0, 0);
    clearInterval(this.interval);

  }

  componentDidMount() {
                try {
                   var widget = document.getElementById("medium-widget");
                   if (!!widget) {
                     window.mediumWidget();
                   }
                 }
                 catch(e){
                   window.location.reload();
                 }
  }

  render() {
    return (
      <div id="wrapper">
        <Helmet titleTemplate="%s | Fadzai Kadzinga" defaultTitle="Fadzai Kadzinga" />
        <Header />
        <div id="main">
          {this.props.children}
        </div>
        {!this.props.fullPage && <Nav />}
      </div>
    );
  }

}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
};

export default Main;
