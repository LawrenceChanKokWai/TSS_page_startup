import classes from "./ProctoredExam.module.css";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import examphoto from "../../assets/images/quiz.svg";
import PageHeader from "../../components/PageHeader/PageHeader";

const ExamPage = () => {
	return (
		<div className={classes.Exam} id="exam">
			<PageHeader title={"Proctored Exam"} />

			<div className={classes.Container}>
				<div className={classes.Text}>
					<h2>Proctored Exam</h2>
					<p>
						Procotred Exam can be added at the end of entire course, every module or
						both. Multiple question types, like – free text, MCQs, True/False,
						etc. can be added.
					</p>
					<CustomButton href="http://tssadvsolutions.com/course/index.php">
						start
					</CustomButton>
				</div>
				<div className={classes.ExamPhoto}>
					<img className={classes.exam} src={examphoto} alt="ExamPhoto"></img>
				</div>
			</div>
		</div>
	);
};
export default ExamPage;
