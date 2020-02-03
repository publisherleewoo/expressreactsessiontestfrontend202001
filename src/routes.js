
import Home from "./pages/Home"
import Login from "./pages/Login"
import Join from "./pages/Join"
import Board from "./pages/Board"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"


let routes = [
    { path: "/", exact: true, component: Home },
    { path: "/login",  component: Login },
    { path: "/join",  component: Join },
    { path: "/board",  component: Board },
    { path: "/profile",  component: Profile },
    {  component:NotFound}
]

export default routes 