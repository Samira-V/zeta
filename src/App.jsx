
import Sidebar from './Components/Sidebar/Sidebar'
import './App.css'


// import ColorPicker from 'react-pick-color';
import { Route, Routes, useLocation } from 'react-router-dom'
import Topbar from './Components/Topbar/Topbar'
import Dashboard from './pages/Dashboard/Dashboard'
import Widgets from './pages/Widgets/Widgets'
import Projects from './pages/Projects/Projects'
import FileManager from './pages/FileManager/FileManager'
import PageLayout from './pages/PageLayout/PageLayout'

import Setting from './Components/Setting/Setting'




function App() {
  // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // console.log(defaultDark)
  // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  // console.log(theme)
  // const switchTheme = () => {
  //   const newTheme = 'light' ? 'dark' : 'light';
  //   console.log(newTheme)
  //   setTheme(newTheme)
  // }
  const location = useLocation()
  const currentRoute = location.pathname
  console.log(currentRoute)
  return (
    <>
      <div className="main" >
        <Sidebar />
        <div className='container'>
          <Topbar />
          <Setting >
          </Setting>

          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/widgets' element={<Widgets />} />
            <Route path='/pagelayout' element={<PageLayout />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/filemanager' element={<FileManager />} />
          </Routes>
        </div>

      </div >

    </>

  )
}

export default App
