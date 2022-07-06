import styled from "styled-components";

export const Button = styled.button`
	border: ${p => p.theme.borders.button};
	margin-right: ${p => p.theme.space[4]}px;
	:last-child {
		margin-right: ${p => p.theme.space[0]}px;
	}
	font-family: "Open Sans", sans-serif;
	font-size: ${p => p.theme.fontSizes.m};
	letter-spacing: 2px;
	text-decoration: none;
	text-transform: uppercase;
	color: ${p => p.theme.colors.black};
	cursor: pointer;
	padding: 0.25em 0.5em;
	box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
	position: relative;
	user-select: none;
	touch-action: manipulation;
	:active {
		box-shadow: 0px 0px 0px 0px;
		top: 5px;
		left: 5px;
	}
`;
