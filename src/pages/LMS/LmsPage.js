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
					<CustomButton href="https://login.microsoftonline.com/c00d4c1b-cf7b-4e93-b7c7-10113a9bc230/oauth2/v2.0/authorize?response_type=code&client_id=7b890b34-afff-4547-9754-0e0bdc2df3a2&redirect_uri=https%3A%2F%2Fmymurdoch.murdoch.edu.au%2Fcmauth%2Foauth%2Fcallback&scope=openid+profile+email+offline_access+api%3A%2F%2Fmurdoch.edu.au%2Fcampusm%2F.default&state=vrac30v5rgqibp2p86eup3irqn">
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
