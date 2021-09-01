/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const NavigationBar = () => (
	<section className="header-nav-area">
		<div className="brand_area" to="/" />
		<div id="nav_container">
			<nav id="navigation">
				<a
					className="nav-element"
					href="https://login.microsoftonline.com/c00d4c1b-cf7b-4e93-b7c7-10113a9bc230/oauth2/v2.0/authorize?response_type=code&client_id=7b890b34-afff-4547-9754-0e0bdc2df3a2&redirect_uri=https%3A%2F%2Fmymurdoch.murdoch.edu.au%2Fcmauth%2Foauth%2Fcallback&scope=openid+profile+email+offline_access+api%3A%2F%2Fmurdoch.edu.au%2Fcampusm%2F.default&state=9h98k9pni416ckne56p2noo2rj"
					target="_blank"
				>
					LMS
				</a>
				<a
					className="nav-element"
					href="https://www.hackerrank.com/"
					target="_blank"
				>
					QUIZ
				</a>
				<a
					className="nav-element"
					href="https://www.python.org/"
					target="_blank"
				>
					PROGRAMMING
				</a>
				<a
					className="nav-element"
					href="https://zoom.com.cn/en-us/meetings.html"
					target="_blank"
				>
					INTERVIEW
				</a>
				<a
					className="nav-element"
					href="https://www.careers.gov.sg/"
					target="_blank"
				>
					EMPLOYER
				</a>
				<a
					href="https://tsstechnologysg.com/"
					className="nav-element"
					target="_blank"
				>
					NEWS
				</a>
			</nav>
		</div>
		<span className="menu-icon"></span>
	</section>
);
export default NavigationBar;
