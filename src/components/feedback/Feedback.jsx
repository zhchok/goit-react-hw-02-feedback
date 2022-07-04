import { Box } from "components/box/box";
import { Component } from "react";
// import PropTypes from "prop-types";

export class Feedback extends Component {
	countTotalFeedback() {
		return Object.values(this.props).reduce((acc, value) => acc + value);
	}

	countPositiveFeedbackPercentage(value) {
		return Math.round((value / this.countTotalFeedback()) * 100);
	}

	render() {
		const { good, neutral, bad } = this.props;
		return (
			<Box>
				<h1>Please leave a feedback</h1>
				{Object.keys(this.props).map(key => (
					<button key={key}>{key}</button>
				))}
				<h2>Statistics</h2>
				<ul>
					<li>Good: {good}</li>
					<li>Neutral: {neutral}</li>
					<li>Bad: {bad}</li>
					<li>Total: {this.countTotalFeedback()} </li>
					<li>Positive feedback: {this.countPositiveFeedbackPercentage(good)}%</li>
				</ul>
			</Box>
		);
	}
}
