import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [totalResults, setTotalResults] = useState(0);

	const capitalizeLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	document.title = `${capitalizeLetter(props.category)} - NewsHunt`;

	async function updateNews() {
		props.setProgress(0);

		let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
		// let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=5fe2a8b8dfba4b5a9a516c5e97e66318&page=1&pageSize=${props.pageSize}`;
		setLoading(true);
		let data = await fetch(url);
		props.setProgress(40);
		let result = await data.json();
		props.setProgress(70);
		setArticles(result.articles);
		setLoading(false);
		setTotalResults(result.totalResults);
		props.setProgress(100);
	}

	useEffect(() => {
		updateNews();
		setLoading(true);
		// eslint-disable-next-line
	}, []);

	// const previousPage = async () => {
	// 	setPage(page - 1);
	// 	updateNews();
	// };

	// const nextPage = async () => {
	// 	if (!(page + 1 > Math.ceil(totalResults / 20))) {
	// 		setPage(page + 1);
	// 		updateNews();
	// 	}
	// };

	const fetchMoreData = async () => {
		const nextPage = page + 1;
		let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;
		// let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=5fe2a8b8dfba4b5a9a516c5e97e66318&page=1&pageSize=${props.pageSize}`;
		// setLoading(true);
		setTimeout(() => {
			setPage(nextPage);
		}, 2000);
		let data = await fetch(url);
		let result = await data.json();
		setArticles(articles.concat(result.articles));
		setTotalResults(result.totalResults);
		// setLoading(false);
	};

	return (
		<div className="container pt-5 mt-5">
			<h2 className="text-center mb-4" style={{ fontWeight: 800, color: '#fff', textShadow: '0 4px 20px rgba(0,0,0,0.5)', marginTop: '40px' }}>
				NewsHunt <span style={{ color: 'var(--text-secondary)', fontWeight: 300 }}>|</span> <span style={{ color: 'var(--accent-color)' }}>Top Headlines</span> from {capitalizeLetter(props.category)}
			</h2>
			{loading && <Loading />}
			<InfiniteScroll
				dataLength={articles.length}
				next={fetchMoreData}
				hasMore={articles.length < totalResults}
				loader={<Loading />}
			>
				<div className="container">
					<div className="row">
						{articles.map((element, index) => {
							return (
								<div
									className="col-md-4"
									key={`${element.url} - ${index}`}
								>
									<NewsItem
										title={element.title}
										description={element.description}
										imageUrl={element.urlToImage}
										newsUrl={element.url}
										author={element.author}
										date={element.publishedAt}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</InfiniteScroll>
			{/* <div className="container d-flex justify-content-between">
					<button
						disabled={page <= 1}
						type="button"
						className="btn btn-dark"
						onClick={previousPage}
					>
						&larr; Previous
					</button>
					<button
						disabled={
							state.page + 1 >
							Math.ceil(state.totalResults / props.pageSize)
						}
						type="button"
						className="btn btn-dark"
						onClick={nextPage}
					>
						Next &rarr;
					</button>
				</div> */}
		</div>
	);
};

News.defaultProps = {
	country: "us",
	pageSize: 20,
	category: "technology",
};

News.propTypes = {
	country: PropTypes.string,
	pageSize: PropTypes.number,
	category: PropTypes.string,
};

export default News;
