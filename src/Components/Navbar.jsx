import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark fixed-top glass-effect" style={{ margin: '15px 15px 0 15px', padding: '10px 20px', borderRadius: '16px' }}>
				<div className="container-fluid">
					<Link className="navbar-brand fs-4" style={{ color: '#fff', textShadow: '0 0 10px rgba(255,255,255,0.3)' }} to="/">
						<span style={{ color: 'var(--accent-color)' }}>News</span>Hunt
					</Link>
					<button
						className="navbar-toggler border-0"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
							<li className="nav-item">
								<Link className="nav-link mx-2" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link mx-2" to="/business">
									Business
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link mx-2" to="/entertainment">
									Entertainment
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link mx-2" to="/sports">
									Sports
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link mx-2" to="/technology">
									Technology
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link mx-2" to="/science">
									Science
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link mx-2" to="/health">
									Health
								</Link>
							</li>
						</ul>
						<form className="d-flex" role="search">
							<input
								className="form-control me-3 bg-transparent text-white glass-effect border-2"
								type="search"
								placeholder="Search topics..."
								aria-label="Search"
								style={{ backdropFilter: 'none' }}
							/>
							<button className="btn-premium" type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
