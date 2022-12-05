import {
    createBrowserRouter,
    RouterProvider,
    // Route,
  } from "react-router-dom";
  import Register from "./pages/Register";
  import Login from "./pages/Login";
  import Landpage from "./pages/Landpage";
  import Directory from "./pages/Directory.jsx";
  import Calendar from "./pages/Calendar";
  import Library from "./pages/Library";
  import Hours from "./pages/Hours";
  import Messages from "./pages/Messages"
  import Orientation from "./pages/Orientation"
  
  import './index.css';
  import 'bootstrap/dist/css/bootstrap.css';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      children: [
        {
          path: "/Landpage",
          element: <Landpage />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Directory",
      element: <Directory />,
    },
    {
      path: "/Calendar",
      element: <Calendar />,
    },
    {
      path: "/Library",
      element: <Library />,
    },
    {
      path: "/Hours",
      element: <Hours />,
    },
    {
      path: "/Messages",
      element: <Messages />,
    },
    {
      path: "/Orientation",
      element: <Orientation />,
    }
  ]);
  
  function App() {
    return (
      <div className="app">
        <div className="container">
          {/* <p> This is APP page </p> */}
          <RouterProvider router={router} />
          
        </div>
      </div>
    );
  }
  
  export default App;
  