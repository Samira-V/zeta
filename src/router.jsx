import Dashboard from './pages/Dashboard/Dashboard'
import Widgets from './pages/Widgets/Widgets'
import Projects from './pages/Projects/Projects'
import FileManager from './pages/FileManager/FileManager'
import PageLayout from './pages/PageLayout/PageLayout'
import Default from './pages/Dashboard/Default'




let routes = [
    { path: '/', element: <Dashboard /> },
    { path: 'dashboard/:postName', element: <Default /> },
    { path: '/widgets', element: <Widgets /> },
    { path: '/projects', element: <Projects /> },
    { path: '/filemanager', element: <FileManager /> },
    { path: '/pagelayout', element: <PageLayout /> },
]
export default routes

