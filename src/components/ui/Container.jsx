const Container = ({ children }) => {
	return (
		<div className="flex flex-col bg-light-gray rounded-xl shadow-lg h-[90vh] w-[90vw] md:flex-row  md:-[85vw] overflow-hidden">
			{children}
		</div>
	);
};

export default Container;
