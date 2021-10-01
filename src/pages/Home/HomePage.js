import classes from "./HomePage.module.css";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import code from "../../assets/images/code.svg";
import binaryGlobe from "../../assets/images/binaryGlobe.svg";

const HomePage = () => {
	return (
		<div className={classes.HomePage}>
			<div className={classes.Container}>
				<h1 className={classes.Intro}>Biu Edutech</h1>
				<h1>One stop solution to all your education needs</h1>
				<h1>Find out more here</h1>
				<br/>
				<br/>
				<CustomButton href="#lms">find now</CustomButton>
			</div>
			<img className={classes.Code} src={code} alt="code"></img>
			<img className={classes.BinaryGlobe} src={binaryGlobe} alt="globe"></img>
		</div>
	);
};
export default HomePage;
