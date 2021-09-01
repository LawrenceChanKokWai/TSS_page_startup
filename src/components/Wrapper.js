/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

function Wrapper() {
	const [dropDown, setDropDown] = useState(false);
	const handleClick = () => {
		dropDown ? setDropDown(false) : setDropDown(true);
		// console.log("this is dropDown", dropDown);
	};
	const arrowPosition = dropDown ? "open" : "closed";
	const descriptionActive = dropDown ? "open" : "";

	return (
		<div className="slide-container">
			<div className="wrapper">
				<div className="article">
					<h1>
						<a
							href="https://www.youtube.com/watch?v=jBzwzrDvZ18&t=1015s"
							target="_blank"
						>
							PYTHON Backend Web Development Course -- With Django
						</a>
						<span
							className={`arrow ${arrowPosition}`}
							onClick={handleClick}
						></span>
					</h1>
					<div className={`description ${descriptionActive}`}>
						With its flexibility, readability, and mature code libraries, Python
						is a natural choice for developing agile and maintainable web
						applications.
					</div>
					<footer>
						<a
							href="https://www.youtube.com/results?search_query=python+programming"
							target="_blank"
						>
							More
						</a>
					</footer>
				</div>
			</div>
		</div>
	);
}

export default Wrapper;
