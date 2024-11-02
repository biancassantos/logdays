import PageTitle from "../components/ui/PageTitle"
import RenderLogs from "../components/RenderLogs"

const FavoriteLogsPage = () => {
  return (
    <section className='flex flex-col items-center gap-6 py-7 px-5 w-[100%] overflow-y-scroll'>
      <PageTitle title="Favorites" />
      <RenderLogs category="favorites" />
    </section>
  )
}

export default FavoriteLogsPage