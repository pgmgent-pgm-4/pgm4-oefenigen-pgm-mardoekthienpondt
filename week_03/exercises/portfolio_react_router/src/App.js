import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import {
  Home,
  About,
  Contact,
  Projects,
  Resume,
  NotFound,
} from './pages';
import Root from './layouts/Root';
import { ROUTES } from './routes/routes';
import HearthstoneList from './components/projects/hearthstone/HearthstoneList';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFound />}>
      <Route path={ROUTES.HOME.path} element={<Home />} />
      <Route path={ROUTES.ABOUT.path} element={<About />} />
      <Route path={ROUTES.CONTACT.path} element={<Contact />} />
      <Route path={ROUTES.PROJECTS.path} element={<Projects />} />
      <Route path={ROUTES.PROJECTS.hearthstone.path} element={<HearthstoneList />} />
      <Route path={ROUTES.PROJECTS.hearthstoneDetail.path} element={<Projects />} />
      <Route path={ROUTES.PROJECTS.studioClean.path} element={<Projects />} />
      <Route path={ROUTES.RESUME.path} element={<Resume />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
