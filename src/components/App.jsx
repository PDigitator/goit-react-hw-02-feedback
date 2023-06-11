// import { Title, Wrapper } from 'components/App.styled';

import { Component } from 'react';
// import { nanoid } from 'nanoid';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = evt => {
    const stateKey = evt.target.name;
    this.setState(prevState => ({ [stateKey]: prevState[stateKey] + 1 }));
  };

  countTotalFeedback = ({ good, neutral, bad } = this.state) =>
    good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good } = this.state) =>
    Math.round((good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
