import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
// 	return <></>;
// }

function App() {
	const pageSize = 12;
	const apiKey = process.env.REACT_APP_NEWS_API_KEY;
	const [progress, setProgress] = useState(0);

	return (
		<div>
			<Router>
				<LoadingBar
					color="#3b82f6"
					progress={progress}
					height={3}
					onLoaderFinished={() => setProgress(0)}
				/>
				<Navbar />
				<Routes>
					<Route
						exact
						path="/"
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key="general"
								pageSize={pageSize}
								category="general"
							/>
						}
					/>
					{["business", "entertainment", "sports", "technology", "science", "health"].map(
						(cat) => (
							<Route
								exact
								path={`/${cat}`}
								key={cat}
								element={
									<News
										setProgress={setProgress}
										apiKey={apiKey}
										key={cat}
										pageSize={pageSize}
										category={cat}
									/>
								}
							/>
						)
					)}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
