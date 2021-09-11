import React from "react";

import "./DashboardInformation.css";

const DashboardInformation = ({ username }) => {
	return (
		<div className="dashboard_info_text_container">
			<span className="dashboard_info_text_title">
				Hello {username}, welcome to TSS video call.
			</span>
			<span className="dashboard_info_text_description">
				You can start calling directly to the person from the list or create or
				join group call.
			</span>
		</div>
	);
};

export default DashboardInformation;
