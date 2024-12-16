import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import UserLayout from "../layout/UserLayout";
import Companies from "../pages/companies/Companies";
import CompanyDetails from "../pages/companyDetails/CompanyDetails";
import AddCompany from "../pages/add/AddCompany";
import SavedPage from "../pages/saved/SavedPage";

export const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'companies',
                element: <Companies />
            },
            {
                path: 'company/:id',
                element: <CompanyDetails />
            },
            {
                path: 'add',
                element: <AddCompany />
            },
            {
                path: 'saved',
                element: <SavedPage />
            }
        ]
    }
])