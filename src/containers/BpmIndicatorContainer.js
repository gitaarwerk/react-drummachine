import { connect } from 'react-redux';
import BpmIndicator from '../components/BpmIndicator';

const mergeProps = (stateProps, dispatchProps) => {
  const { bpm } = stateProps;

  return {
    bpm
  };
};

function mapStateToProps({ drummachine: { bpm } }) {
  return {
    bpm
  };
}

export default connect(mapStateToProps, {}, mergeProps)(BpmIndicator);
