import {
  Container,
  FeedbackOptions,
  Notification,
  Section,
  Statistics,
} from 'components';
import { useState } from 'react';

export const App = () => {
  const [feedbacks, setFeedbacks] = useState({ good: 0, netural: 0, bad: 0 });

  const onLeaveFeedback = name => {
    setFeedbacks(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  const countTotalFeedback = () =>
    feedbacks.good + feedbacks.netural + feedbacks.bad;

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () =>
    total === 0 ? 0 : ((feedbacks.good / total) * 100).toFixed(0);

  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbacks)}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedbacks.good}
            neutral={feedbacks.netural}
            bad={feedbacks.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </Container>
  );
  //  }
};
