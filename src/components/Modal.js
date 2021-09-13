import React, { useEffect, useRef } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Background = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalWrapper = styled.div`
	width: 800px;
	height: 520px;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #fff;
	color: #000;
	display: grid;
	grid-template-columns: 1fr 1fr;
	position: relative;
	z-index: 10;
	border-radius: 10px;
`;

// const ModalVideo = styled.img`
// 	width: 100%;
// 	height: 100%;
// 	border-radius: 10px 0 0 10px;
// 	background: #000;
// `;

const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 1.8;
	color: #141414;
	p {
		margin-bottom: 1rem;
	}
	button {
		cursor: pointer;
		padding: 10px 24px;
		background: #141414;
		color: #fff;
		border: none;
	}
`;

const CloseModalButton = styled(MdClose)`
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 20px;
	width: 32px;
	height: 32px;
	padding: 0;
	z-index: 10;
`;

//===============================================================================================//

export const Modal = ({ showModal, setShowModal }) => {
	function LiveStreamPreview({ stream }) {
		let videoPreviewRef = useRef();

		useEffect(() => {
			if (videoPreviewRef.current && stream) {
				videoPreviewRef.current.srcObject = stream;
			}
		}, [stream]);

		if (!stream) {
			return null;
		}

		return <video ref={videoPreviewRef} width={420} height={480} autoPlay />;
	}

	const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } =
		useReactMediaRecorder({ video: true });

	return (
		<>
			{showModal ? (
				<Background>
					<ModalWrapper showModal={showModal}>
						<LiveStreamPreview stream={previewStream} height={0} width={0} />

						<ModalContent>
							<h3>Current Status: {status.toUpperCase()}</h3>
							<h3>Start video recording now</h3>
							<p>Click on the button to start video recording</p>

							<button onClick={startRecording}>Start Recording</button>
							<br />
							<button onClick={stopRecording}>Stop Recording</button>
							<br />
							<button>Send Video</button>
						</ModalContent>

						<CloseModalButton
							ariel-label="Close model"
							onClick={() => setShowModal((previous) => !previous)}
						/>
						<video src={mediaBlobUrl} height={0} width={0} /*autoPlay*/ />
					</ModalWrapper>
				</Background>
			) : null}
		</>
	);
};
