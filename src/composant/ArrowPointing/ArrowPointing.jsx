import "./ArrowPointing.css";
const ArrowPointing = () => {
	// const navigatorTop = () => {
	// 	window.scrollTo(0, 0);
	// };
	return (
		<div
			className="arrow-pointing"
			onClick={() => {
				window.scrollTo(0, 0);
			}}
		>
			<i class="fa-solid fa-arrow-up"> </i>
		</div>
	);
};

export default ArrowPointing;
