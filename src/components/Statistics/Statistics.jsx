import PropTypes from "prop-types";
import { Item } from "./Statistics.styled";
function Statistics({ good, neutral, bad, totalFeedback, positivePercentage }) {
	return (
		<ul>
			<Item>Good: {good}</Item>
			<Item>Neutral: {neutral}</Item>
			<Item>Bad: {bad}</Item>
			<Item>Total: {totalFeedback} </Item>
			<Item>Positive feedback: {positivePercentage}%</Item>
		</ul>
	);
}
Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	totalFeedback: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
