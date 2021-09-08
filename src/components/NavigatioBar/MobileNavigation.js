import NavigationLink from "./NavigationLink";
import classes from "./NavigationBar.module.css";
import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";

const MobileNavigation = () => {
	const [dropDown, setDropdown] = useState(false);

	const hamburgerIcon = (
		<CgMenuRound
			className={classes.Hamburger}
			color="white"
			size="40px"
			onClick={() => setDropdown(!dropDown)}
		/>
	);
	const closeIcon = (
		<CgCloseO
			className={classes.Hamburger}
			color="white"
			size="40px"
			onClick={() => setDropdown(!dropDown)}
		/>
	);
	const mobileMenuClose = () => setDropdown(false);

	return (
		<nav className={classes.MobileNavigation}>
			{dropDown ? closeIcon : hamburgerIcon}
			{dropDown && (
				<NavigationLink isMobile={true} mobileMenuClose={mobileMenuClose} />
			)}
		</nav>
	);
};
export default MobileNavigation;
