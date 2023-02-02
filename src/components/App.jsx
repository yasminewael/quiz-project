import '../styles/App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//components
import Quiz from './Quiz';
import Progress from './Progress';
//routers
const router = createBrowserRouter([
{
  path: '/',
  element: <Quiz></Quiz>
},
{
  path: '/progress',
  element: <Progress></Progress>
}


])


function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>


  );
}

export default App;
