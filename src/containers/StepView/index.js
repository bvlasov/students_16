import { connect } from 'react-redux';
import * as handlers from '../../actions';
import StepView from './component';

const mapStateToProps = (state) => ({ step: state.step });
export default connect(mapStateToProps, { ...handlers })(StepView);