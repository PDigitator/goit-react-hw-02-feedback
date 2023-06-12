import PropTypes from 'prop-types';
import {
  StatList,
  StatListItem,
  Span,
} from 'components/Statistics/Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatList>
      <StatListItem>
        <p>
          Good:<Span>{good}</Span>
        </p>
      </StatListItem>
      <StatListItem>
        <p>
          Neutral:<Span>{neutral}</Span>
        </p>
      </StatListItem>
      <StatListItem>
        <p>
          Bad:<Span>{bad}</Span>
        </p>
      </StatListItem>
      <StatListItem>
        <p>
          Total:<Span>{total}</Span>
        </p>
      </StatListItem>
      <StatListItem>
        <p>
          Positive feedback:<Span>{positivePercentage}%</Span>
        </p>
      </StatListItem>
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
