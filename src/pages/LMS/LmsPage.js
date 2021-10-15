import classes from "./LmsPage.module.css";
import lmsphoto from "../../assets/images/lms.svg";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import PageHeader from "../../components/PageHeader/PageHeader";

const LmsPage = () => {
	return (
		<div className={classes.Lms} id="lms">
			<PageHeader title={"LMS"} />
			<div className={classes.Container}>
				<div className={classes.Text}>
					<h2>Courses and Modules</h2>
					<p>
						Learning admins create Learning groups in Workplace and add all the
						course content as posts (links, images, text, etc.). LMS Bot allows
						admins to then create a new course in the admin panel, add modules
						with details, and then tag the Workplace posts with the modules to
						make the course more structured.
					</p>
					<CustomButton href="http://academy.tssadvsolutions.com/">
						Click me
					</CustomButton>
				</div>
				<div className={classes.LmsPhoto}>
					<img className={classes.lms} src={lmsphoto} alt="LMSPhoto"></img>
				</div>
			</div>
		</div>
	);
};
export default LmsPage;
