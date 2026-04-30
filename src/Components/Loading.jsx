import React from "react";
import "./Loading.css";

const Loading = () => {
	return (
		<div className="loading-container">
			<div className="loader-wrapper">
				<div className="loader-ring"></div>
				<div className="loader-ring"></div>
				<div className="loader-ring"></div>
				<div className="loader-center">
					<span className="loader-text">Loading</span>
					<div className="loader-dots">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
