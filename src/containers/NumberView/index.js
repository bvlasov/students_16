import { connect } from 'react-redux';
import { add } from '../../actions';
import NumberView from './component';

const mapStateToProps = (state) => ({ number: state.number });
export default connect(mapStateToProps, { add })(NumberView);