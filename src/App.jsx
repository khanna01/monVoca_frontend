import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BasePage from '@/pages/base-page.jsx'
import MainPage from '@/pages/main-page.jsx'
import MainScreen from '@/pages/Main-Screen.jsx'
import NoteListPage from '@/pages/Note-list-page.jsx'
import VocaEditPage from '@/pages/Voca-edit-page.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/note-list',
        element: <NoteListPage />,
    },
    {
        path: '/',
        element: <BasePage />,
        children: [
            {
                path: '/main',
                element: <MainScreen />,
            },
            {
                path: '/voca-edit',
                element: <VocaEditPage />,
            },
        ],
    },
    {
        path: '*',
        element: <MainPage />,
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
