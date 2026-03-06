import React from "react";

function NewsItem(props) {
	let { title, description, imageUrl, newsUrl, author, date } = props;
	return (
		<div className="my-4 h-100">
			<div 
				className="card glass-effect text-white border-0 h-100" 
				style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', overflow: 'hidden' }}
				onMouseEnter={(e) => { 
					e.currentTarget.style.transform = 'translateY(-10px)'; 
					e.currentTarget.style.boxShadow = '0 15px 35px var(--accent-glow)'; 
					e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
				}}
				onMouseLeave={(e) => { 
					e.currentTarget.style.transform = 'none'; 
					e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)'; 
					e.currentTarget.style.borderColor = 'var(--glass-border)';
				}}
			>
				<img 
					src={imageUrl || "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} 
					className="card-img-top" 
					alt="News Highlight" 
					style={{ height: '200px', objectFit: 'cover' }} 
				/>
				<div className="card-body d-flex flex-column p-4">
					<h5 className="card-title fw-bold lh-sm mb-3" style={{ fontSize: '1.15rem' }}>{title}</h5>
					<p className="card-text flex-grow-1" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
						{description}
					</p>
					<p className="card-text mb-4 mt-2">
						<small style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
							By <span className="text-light fw-medium">{!author ? "Unknown" : author}</span> &bull;{" "}
							{new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
						</small>
					</p>
					<div className="mt-auto">
						<a
							href={newsUrl}
							target="__blank"
							className="btn-premium w-100 d-block text-center"
						>
							Read Full Article
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NewsItem;
