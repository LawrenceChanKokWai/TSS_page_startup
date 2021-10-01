import classes from "./InterviewPage.module.css";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import interviewphoto from "../../assets/images/interview.svg";
import PageHeader from "../../components/PageHeader/PageHeader";

const InterviewPage = () => {
	return (
		<div className={classes.Interview} id="interview">
			<PageHeader title={"Interview"} />

			<div className={classes.Container}>
				<div className={classes.Text}>
					<h2>Interview</h2>
					<p>
						Video interview is a job interview that takes place remotely and
						uses video technology as the communication medium. And good luck in
						your interview.
					</p>
					<CustomButton href="https://zoom.us/">link me up</CustomButton>
				</div>
				<div className={classes.InterviewPhoto}>
					<img
						className={classes.interview}
						src={interviewphoto}
						alt="InterviewPhoto"
					></img>
				</div>
			</div>
		</div>
	);
};
export default InterviewPage;
