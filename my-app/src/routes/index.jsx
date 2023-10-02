import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { PrivateRoute } from "./privateRoutes";
import { Home } from "../pages/Home";
import { StudentManager } from "../pages/studentManager";
import {InstructorManager} from "../pages/instructorManager";
import {CourseManager} from "../pages/CoursesManager";
import {Registration} from "../pages/Registration";
import {HomeAdmin} from "../pages/HomeAdmin";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<PrivateRoute />} >
                    <Route path="/home" element={<Home />} />
                </Route>
                <Route path="/admin/home" element={<HomeAdmin />} />
                <Route path="/admin/cadastro-aluno" element={<StudentManager />} />
                <Route path="/admin/cadastro-instrutor" element={<InstructorManager />} />
                <Route path="/admin/cadastro-curso" element={<CourseManager />} />
                <Route path="/admin/matricula" element={<Registration />} />
            </Routes>
        </Router>
    );
}