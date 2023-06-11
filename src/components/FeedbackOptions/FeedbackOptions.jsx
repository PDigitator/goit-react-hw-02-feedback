import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { BtnList } from 'components/FeedbackOptions/FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map(element => (
        <li key={nanoid()}>
          <button name={element} onClick={onLeaveFeedback}>
            {element}
          </button>
        </li>
      ))}
    </BtnList>
  );
};

FeedbackOptions.protoTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
