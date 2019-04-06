import { connect } from 'react-redux';
import App from '../components/App';
import { setData, setNextGroupId } from '../actions/app.js';

function mapStateToProps(state) {
  return {
  };
}

export default connect(
  mapStateToProps,
  {
    setData,
    setNextGroupId
  }
)(App);