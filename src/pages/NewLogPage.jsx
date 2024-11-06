import NewLogForm from "../components/NewLogForm";
import PageTitle from "../components/ui/PageTitle";

const NewLogPage = () => {
	return (
		<section className="flex flex-col items-center gap-6 py-7 px-5 w-[100%] overflow-y-scroll">
			<PageTitle title="New log" />
			<NewLogForm />
		</section>
	);
};

export default NewLogPage;