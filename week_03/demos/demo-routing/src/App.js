import './App.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Home, About, Contact, Blog, BlogDetail, NotFound } from './pages';
import Root from './layouts/Root';
import { ROUTES } from './routes/routes';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFound />}>
      <Route path="/" element={<Home />} />
      <Route path={ROUTES.ABOUT.path} element={<About />} />
      <Route path={ROUTES.CONTACT.path} element={<Contact />} />
      <Route path={ROUTES.BLOGS.path} element={<Blog />} />
      <Route path={ROUTES.BLOGDETAIL.path} element={<BlogDetail />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
