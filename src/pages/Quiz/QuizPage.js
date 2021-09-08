import classes from "./QuizPage.module.css";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import quizphoto from "../../assets/images/quiz.svg";
import PageHeader from "../../components/PageHeader/PageHeader";

const QuizPage = () => {
	return (
		<div className={classes.Quiz} id="quiz">
			<PageHeader title={"Quizzes"} />

			<div className={classes.Container}>
				<div className={classes.QuizPhoto}>
					<img className={classes.quiz} src={quizphoto} alt="QuizPhoto"></img>
				</div>
				<div className={classes.Text}>
					<h2>Quizzes and Question Types</h2>
					<p>
						Quizzes can be added at the end of entire course, every module or
						both. Multiple question types, like – free text, MCQs, True/False,
						etc. can be added.
					</p>
					<CustomButton href="https://www.youtube.com/watch?v=BZqzhmlTkAc">
						start
					</CustomButton>
				</div>
			</div>
		</div>
	);
};
export default QuizPage;
