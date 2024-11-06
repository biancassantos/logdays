import RenderLogs from "../components/RenderLogs";
import PageTitle from "../components/ui/PageTitle";

const AllLogsPage = () => {
	return (
		<section className="flex flex-col items-center gap-6 py-7 px-5 w-[100%] overflow-y-scroll">
			<PageTitle title="All logs" />
			<RenderLogs category="all" />
		</section>
	);
};

export default AllLogsPage;