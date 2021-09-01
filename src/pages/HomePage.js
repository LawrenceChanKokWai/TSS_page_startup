/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NavigationBar from "../components/NavigationBar";
import Wrapper from "../components/Wrapper";

const HomePage = () => (
	<div>
		<div className="container">
			<header>
				<div className="gradient_container_top"></div>
				<div className="gradient_container_bottom"></div>
				<NavigationBar />
				<Wrapper />
			</header>
		</div>
	</div>
);
export default HomePage;
