import { Refine, Authenticated } from "@refinedev/core";
import routerProvider, { NavigateToResource } from "@refinedev/react-router";
import { ThemedLayoutV2, ThemedTitleV2, useNotificationProvider } from "@refinedev/antd";

import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import { ConfigProvider, App as AntdApp } from "antd";

import { dataProvider } from "./providers/data-provider";
import { authProvider } from "./providers/auth-provider";

import { ShowProduct } from "./pages/products/show";
import { EditProduct } from "./pages/products/edit";
import { ListProducts } from "./pages/products/list";
import { CreateProduct } from "./pages/products/create";

import { Login } from "./pages/home/login";
import { Header } from "./components/header";

import "antd/dist/reset.css";

function App() {
  return (
    <BrowserRouter>
    <ConfigProvider>
      <AntdApp>
      <Refine 
        dataProvider={dataProvider} 
        authProvider={authProvider}
        routerProvider={routerProvider}
        notificationProvider={useNotificationProvider}
        resources={[
          {
            name: "protected-products",
            list: "/products",
            show: "/products/:id",
            edit: "/products/:id/edit",
            create: "/products/create",
            meta: { label: "Products" },
          }
        ]}
      >
        <Routes>
          <Route
            element={
              <Authenticated key="authenticated-routes" redirectOnFail="/login">
                <ThemedLayoutV2 
                  Title={(props) => (
                    <ThemedTitleV2 {...props} text="Awesome Project" />
                  )}>
                <Outlet />
                </ThemedLayoutV2>
              </Authenticated>
            }
          >
            <Route index element={<NavigateToResource resource="protected-products" />} />
            <Route path="/products">
              <Route index element={<ListProducts />} />
              <Route path=":id" element={<ShowProduct />} />
              <Route path=":id/edit" element={<EditProduct />} />
              <Route path="create" element={<CreateProduct />} />
            </Route>
          </Route>
          <Route
            element={
              <Authenticated key="auth-pages" fallback={<Outlet />}>
                <NavigateToResource resource="protected-products" />
              </Authenticated>
            }
          >
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Refine>
      </AntdApp>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
