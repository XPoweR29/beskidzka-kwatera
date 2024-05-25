import ReactDOM from 'react-dom/client'
import './index.scss'
import { App } from './App'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { PageHome } from './components/PageHome/PageHome';
import { PageContact } from './components/PageContact/PageContact';
import { PageGallery } from './components/PageGallery/PageGallery';
import { PageAttractions } from './components/PageAttractions/PageAttractions';
import { TermsConditions } from './components/TermsConditions/TermsConditions';
import { PrivacyPolicy } from './components/PrivacyPolicy/PrivacyPolicy';

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
            },
            {
                path: 'atrakcje',
                element: <PageAttractions/>
            },
            {
                path: 'regulamin',
                element: <TermsConditions/>
            },
            {
                path: 'polityka-prywatnosci',
                element: <PrivacyPolicy/>
            },
            {
                path: '*',
                element: <Navigate to={'/'}/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router}/>)

