// Componentとconnect
import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, dincrement } from '../actions';

//import PropTypes from 'prop-types';

console.log('App js');
class App extends React.Component {
  render() {
    console.log('render');
    const props = this.props;
    return (
      <React.Fragment>
        <div> value: {props.value} </div>
        <button onClick={props.increment}> +1 </button>
        <button onClick={props.decrement}> -1 </button>
        <button onClick={props.dincrement}> +2 </button>
      </React.Fragment>
    );
  }
}

console.log('mapStateToProps');
const mapStateToProps = state => ({
  value: state.count.value
});
// const mapDispatchToProps = {
//   increment,
//   decrement
// };
console.log('mapDispatchToProps');
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  dincrement: () => dispatch(dincrement())
});

console.log('connect');
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
