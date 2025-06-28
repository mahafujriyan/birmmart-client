import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import SingIn from "../Features/Auth/SingIn";
import Register from "../Features/Auth/Register";
import ErrorPage from "../Components/Shared/ErrorPage";
import CategoryCard from "../Components/Home/CategoriesFeatures/CategoryCard";
import DetailsPages from "../Features/DetailsPage/DetailsPages";
import Categories from "../Components/Home/CategoriesFeatures/Categories";
import AddProducts from "../Features/AddProducts/AddProducts";
import MyProducts from "../Features/MyProducts/MyProducts";
import AllProducts from "../Features/AllProducts/AllProducts";
import UpdateForm from "../Features/UpdatePage/UpdateForm";
import CartItem from "../Features/Cart/CartItem";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Features/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            element:<Home></Home>
        },
        {
          path:'/category/:categoryName',
          element:<CategoryCard></CategoryCard>

        },
        {
          path:'/category',
          element:<Categories/>

        },
       {
        path: '/products/:id',
        loader: async ({ params }) => {
            const res = await fetch(`https://birmmart-server.vercel.app/products/${params.id}`);
            if (!res.ok) throw new Error("Failed to load product");
            return res.json();
          },

            element: <PrivateRoutes>
              <DetailsPages />
            </PrivateRoutes>,
          },
          {
            path:'/allProducts',
            element:
              <AllProducts></AllProducts>
           

          },
          {
           path: '/addProducts/',
           element:<PrivateRoutes>
            <AddProducts></AddProducts>
           </PrivateRoutes>

          },
        {
          path:'/myProducts',
          element:<PrivateRoutes>
            <MyProducts></MyProducts>
          </PrivateRoutes>

        },
        {
          path:'/updateProduct/:id',
          element:
         <PrivateRoutes>
             <UpdateForm></UpdateForm>
         </PrivateRoutes>
       
        },
        {
          path:'/cart',
          element:<PrivateRoutes>
            <CartItem></CartItem>
          </PrivateRoutes>


        },
        {
            path:'singIn',
            element:<SingIn></SingIn>
        },
        {
            path:'register',
            element:<Register></Register>
        }
    ]
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      { index: true, element: <Dashboard /> },
    { path: "all-items", element: <AllProducts /> }, 
    { path: "add-item", element: <AddProducts /> }, 
    { path: "my-items", element: <MyProducts /> },
    ]
  }
]);

export default router