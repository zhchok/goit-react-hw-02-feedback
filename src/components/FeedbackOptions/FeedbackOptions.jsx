import { Box } from "components/box/box";
import PropTypes from "prop-types";
import { Button } from "./FeedbackOptions.styled";

function FeedbackOptions({ options, onLeaveFeedback }) {
	return (
		<Box mb="32px">
			{options.map(key => (
				<Button type="button" key={key} onClick={() => onLeaveFeedback(key)}>
					{key}
				</Button>
			))}
		</Box>
	);
}

FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string.isRequired),
	onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
