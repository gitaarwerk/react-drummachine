import { connect } from 'react-redux';
import BpmLight from '../components/BpmLight';

const mergeProps = (stateProps, dispatchProps) => {
  const { bpmLightState } = stateProps;

  console.log(bpmLightState);
  return {
    lightState: bpmLightState
  };
};

function mapStateToProps({ drummachine: { bpmLightState } }) {
  return {
    bpmLightState
  };
}

export default connect(mapStateToProps, {}, mergeProps)(BpmLight);
