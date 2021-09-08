import React from "react";
import "./CustomerButton.css";

const CustomButton = ({ children, href, target }) => (
	<a className="btn btn_white btn_animated" href={href}>
		{children}
	</a>
);
export default CustomButton;
