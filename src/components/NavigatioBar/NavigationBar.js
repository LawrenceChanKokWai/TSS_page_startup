import classes from "./NavigationBar.module.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const NavigationBar = () => {
	return (
		<div className={classes.NavigationBar}>
			<Navigation />
			<MobileNavigation />
		</div>
	);
};
export default NavigationBar;
