import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import AllLogsPage from './pages/AllLogsPage'
import FullLogPage from './pages/FullLogPage'
import EditLogPage from './pages/EditLogPage'
import NewLogPage from './pages/NewLogPage'
import FavoriteLogsPage from './pages/FavoriteLogsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/all' element={<AllLogsPage />} />
          <Route path='/all/:id' element={<FullLogPage />} />
          <Route path='/all/:id/edit' element={<EditLogPage />} />
          <Route path='/new-log' element={<NewLogPage />} />
          <Route path='/favorites' element={<FavoriteLogsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
