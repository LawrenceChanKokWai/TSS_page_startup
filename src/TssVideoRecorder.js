import React, { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Modal } from "./components/Modal";

function TssVideoRecorder() {
	const [showModal, setShowModal] = useState(true);

	return (
		<div>
			<Modal showModal={showModal} setShowModal={setShowModal} />
			<GlobalStyle />
		</div>
	);
}
export default TssVideoRecorder;
