import React from "react";
import loading from "./loading.gif";

const Loading = () => {
	return (
		<div className="container text-center d-flex justify-content-center">
			<img src={loading} alt="loading" />
		</div>
	);
};

export default Loading;
