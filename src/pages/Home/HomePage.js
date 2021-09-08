import classes from "./HomePage.module.css";
import code from "../../assets/images/code.svg";
import binaryGlobe from "../../assets/images/binaryGlobe.svg";

const HomePage = () => {
	return (
		<div className={classes.HomePage}>
			<div className={classes.Container}>
				<h1 className={classes.Intro}>Hello to You</h1>
				<h1>Welcome to TSS Website</h1>
			</div>
			<img className={classes.Code} src={code} alt="code"></img>
			<img className={classes.BinaryGlobe} src={binaryGlobe} alt="globe"></img>
		</div>
	);
};
export default HomePage;
