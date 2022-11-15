
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Friend from './Component/Friend/Friend';
import FriendDetails from './Component/FriendDetails/FriendDetails';
import Home from './Component/Home/Home';
import Post from './Component/Post/Post';
import PostDetails from './Component/PostDetails/PostDetails';
import Product from './Component/Product/Product';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: 'product', element: <Product></Product> },
        {
          path: 'friends',
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Friend></Friend>
        },
        {
          path: '/friends/:friendsId',
          loader: async ({ params }) => {
            console.log(params.friendsId);
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendsId}`)
          },
          element: <FriendDetails></FriendDetails>
        },
        {
          path:'posts',
          loader:async()=>{
            return fetch(`https://jsonplaceholder.typicode.com/posts`)
          },
          element:<Post></Post>
        },
        {
          path:'/posts/:postsId',
          loader:async({params})=>{
        return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsId}`);
          },
          element:<PostDetails></PostDetails>
        }


      ]
    },

    { path: 'about', element: <About></About> },
    { path: '*', element: <div>This route not found</div> }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
