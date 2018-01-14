import { connect } from 'react-redux';
import PatternButton from '../components/PatternButton';

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { currentBeatPart } = stateProps;
  const { patternPosition, onClickTestSound } = ownProps;

  const lightState = currentBeatPart === patternPosition ? true : false;
  return {
    lightState,
    patternPosition,
    onClick: () => {
      console.log('onClickTestSound');
      onClickTestSound();
    }
  };
};

function mapStateToProps({ drummachine: { currentBeatPart } }) {
  return {
    currentBeatPart
  };
}

export default connect(mapStateToProps, {}, mergeProps)(PatternButton);
