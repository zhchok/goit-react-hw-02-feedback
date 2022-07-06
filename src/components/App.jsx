import { Component } from "react";
import { GlobalStyle } from "./base/GlobalStyle";
import { Box } from "./box/box";
import Statistics from "./Statistics/Statistics";
import Section from "./SectionTitle/SectionTitle";
import Notification from "./Notification/Notification";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";

export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	onLeaveFeedback = option => {
		this.setState(state => ({
			[option]: state[option] + 1,
		}));
	};

	countTotalFeedback() {
		return Object.values(this.state).reduce((acc, value) => acc + value, 0);
	}

	countPositiveFeedbackPercentage = () => {
		const { good } = this.state;
		return Math.round((good / this.countTotalFeedback()) * 100) || 0;
	};

	render() {
		const { good, neutral, bad } = this.state;
		return (
			<Box maxWidth="400px" m="0 auto" p={5}>
				<GlobalStyle />
				<Section title="Please leave feedback">
					<FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
				</Section>
				<Section title="Statistics">
					{this.countTotalFeedback() ? (
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							totalFeedback={this.countTotalFeedback()}
							positivePercentage={this.countPositiveFeedbackPercentage()}
						/>
					) : (
						<Notification message="No feedback given" />
					)}
				</Section>
			</Box>
		);
	}
}
