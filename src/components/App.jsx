import React from 'react';
import { Buttons } from './Buttons';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  percent = 0;

  onClick = e => {
    if (e.target.textContent === 'Good') {
      this.setState(prev => ({
        good: prev.good + 1,
      }));
    } else if (e.target.textContent === 'Neutral') {
      this.setState(prev => ({
        neutral: prev.neutral + 1,
      }));
    } else if (e.target.textContent === 'Bad') {
      this.setState(prev => ({
        bad: prev.bad + 1,
      }));
    }
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    let percent = total ? Math.ceil((this.state.good / total) * 100) : 0;
    return percent;
  };
  // {/* <Notification message="There is no feedback"></Notification> */}
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <Buttons onClick={this.onClick} state={this.state} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              state={this.state}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
              countTotalFeedback={this.countTotalFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
