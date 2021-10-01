import classes from "./ProgrammingPage.module.css";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import PageHeader from "../../components/PageHeader/PageHeader";
import programmingPhoto from "../../assets/images/programming.svg";

const ProgrammingPage = () => {
	return (
		<div className={classes.Programming} id="programming">
			<PageHeader title={"Programming"} />
			<div className={classes.Container}>
				<div className={classes.ProgrammingPhoto}>
					<img
						className={classes.programming}
						src={programmingPhoto}
						alt="ProgrammingPhoto"
					></img>
				</div>
				<div className={classes.Text}>
					<h2>Programming</h2>
					<p>
						Programming languages are one kind of computer language, and are
						used in computer programming to implement algorithms. Start Learning
						new skills now.
					</p>
					<CustomButton href="http://tsslearn.com/">start</CustomButton>
				</div>
			</div>
		</div>
	);
};
export default ProgrammingPage;
