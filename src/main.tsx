import ReactDOM from 'react-dom/client'
import './index.scss'
import { App } from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PageHome } from './components/PageHome/PageHome';
import { PageContact } from './components/PageContact/PageContact';
import { PageGallery } from './components/PageGallery/PageGallery';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <PageHome/>
            },
            {
                path: 'kontakt',
                element: <PageContact/>
            }, 
            {
                path: 'galeria',
                element: <PageGallery/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router}/>)

