import { useEffect } from 'react';

const useInteractiveFavicon = () => {
	useEffect(() => {
		const canvas = document.createElement('canvas');
		canvas.width = 32;
		canvas.height = 32;
		const ctx = canvas.getContext('2d');
		
		let link = document.querySelector("link[rel~='icon']");
		if (!link) {
			link = document.createElement('link');
			link.rel = 'icon';
			document.head.appendChild(link);
		}

		let frame = 0;
		let animationTimer;
		const originalTitle = document.title || "NewsHunt";

		const drawFrame = () => {
			ctx.clearRect(0, 0, 32, 32);

			// Background
			ctx.fillStyle = '#0f172a';
			ctx.beginPath();
			ctx.arc(16, 16, 15, 0, Math.PI * 2);
			ctx.fill();

			// Spinning border
			ctx.beginPath();
			ctx.arc(16, 16, 12, (frame * Math.PI) / 180, (frame * Math.PI) / 180 + Math.PI * 1.5);
			ctx.strokeStyle = `hsl(${frame % 360}, 100%, 60%)`;
			ctx.lineWidth = 3;
			ctx.lineCap = 'round';
			ctx.stroke();

			// 'N' Text
			ctx.font = 'bold 16px sans-serif';
			ctx.fillStyle = '#ffffff';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText('N', 16, 17);

			link.href = canvas.toDataURL('image/png');
			frame += 10;
			animationTimer = setTimeout(drawFrame, 50); // 20 FPS
		};

		const handleVisibilityChange = () => {
			if (document.hidden) {
				clearTimeout(animationTimer);
				
				// Draw sleeping icon
				ctx.clearRect(0, 0, 32, 32);
				ctx.fillStyle = '#1e293b';
				ctx.beginPath();
				ctx.arc(16, 16, 15, 0, Math.PI * 2);
				ctx.fill();
				
				ctx.font = '18px sans-serif';
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				ctx.fillText('👀', 16, 18);
				
				link.href = canvas.toDataURL('image/png');
				document.title = 'We miss you! - NewsHunt';
			} else {
				document.title = originalTitle;
				drawFrame();
			}
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);
		
		// Start animation initially if not hidden
		if (!document.hidden) {
			drawFrame();
		} else {
			handleVisibilityChange();
		}

		return () => {
			clearTimeout(animationTimer);
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, []);
};

export default useInteractiveFavicon;
