import styled from "styled-components";

export const Title = styled.h2`
	margin-bottom: ${p => p.theme.space[5]}px;
	font-size: ${p => p.theme.fontSizes.l};
	font-weight: 500;
	letter-spacing: 0;
	line-height: 1.5em;
	padding-bottom: ${p => p.theme.space[4]}px;
	position: relative;
	:before {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		height: 5px;
		width: 55px;
		background-color: ${p => p.theme.colors.black};
	}
	:after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 2px;
		height: 1px;
		width: 95%;
		max-width: 255px;
		background-color: #333;
	}
`;
