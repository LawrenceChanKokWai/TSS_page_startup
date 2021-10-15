import classes from "../SmartLearningSystem/SmartLearningSystem.module.css";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import smart from "../../assets/images/smart.svg";
import PageHeader from "../../components/PageHeader/PageHeader";

const SmartLearningSystem = () => {
	return (
		<div className={classes.SmartLearningSystem} id="smart">
			<PageHeader title={"Smart Learning System"} />

			<div className={classes.Container}>
				<div className={classes.Text}>
					<h2>Smart Learning System</h2>
					<p>
						SMART Learning Suite is web-based software that works seamlessly
						across in-person and virtual classrooms. With interactive lessons,
						collaboration tools and formative assessments, SMART helps educators
						meet the challenges of blended learning.
					</p>
					<CustomButton href="https://app.kitesense.sg/join/student/NTM4ZDg4MGMtMzViYS00NDIxLTg3ZDItNjcxMmZlM2UyZjMx/">
						Get Connected
					</CustomButton>
				</div>
				<div className={classes.SmartPhoto}>
					<img
						className={classes.smart}
						src={smart}
						alt="SmartLearningSystem"
					></img>
				</div>
			</div>
		</div>
	);
};
export default SmartLearningSystem;
