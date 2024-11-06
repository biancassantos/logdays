const WhiteContainer = ({ children }) => {
	return (
		<article className="bg-white rounded-lg p-4 w-[100%] max-w-[700px] md:p-6">
			{children}
		</article>
	);
};

export default WhiteContainer;