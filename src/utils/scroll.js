const scrollToTop = () => {
	let root = document.documentElement;

	root.scrollTo({
		top: 0,
		behavior: "smooth"
	});
};

export { scrollToTop };