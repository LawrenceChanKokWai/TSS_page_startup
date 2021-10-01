import classes from "../Employment/EmploymentPage.module.css";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import PageHeader from "../../components/PageHeader/PageHeader";
import employmentPhoto from "../../assets/images/employment.svg";

const EmploymentPage = () => {
	return (
		<div className={classes.Employment} id="employment">
			<PageHeader title={"Employment"} />
			<div className={classes.Container}>
				<div className={classes.EmploymentPhoto}>
					<img
						className={classes.employment}
						src={employmentPhoto}
						alt="EmploymentPhoto"
					></img>
				</div>
				<div className={classes.Text}>
					<h2>Employment</h2>
					<p>
						“You weren't the best fit for the position.” Disappointed job
						seekers who ask employers why they weren't hired often hear those
						words. Best fit? Find your best fit here.
					</p>
					<CustomButton href="http://jobportalsg.com/">find now</CustomButton>
				</div>
			</div>
		</div>
	);
};
export default EmploymentPage;
