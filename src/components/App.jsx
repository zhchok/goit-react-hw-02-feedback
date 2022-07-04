import { Component } from "react";
import { GlobalStyle } from "./base/GlobalStyle";
import { Box } from "./box/box";
import { Feedback } from "./feedback/Feedback";

export class App extends Component {
	state = {
		good: 3,
		neutral: 2,
		bad: 2,
	};

	render() {
		return (
			<Box>
				<GlobalStyle />
				<Feedback good={this.state.good} netural={this.state.neutral} bad={this.state.bad} />
			</Box>
		);
	}
}
