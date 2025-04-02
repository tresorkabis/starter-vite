import { Refine, Authenticated } from "@refinedev/core";

import { dataProvider } from "./providers/data-provider";
import { authProvider } from "./providers/auth-provider";

import { ShowProduct } from "./pages/products/show";
import { EditProduct } from "./pages/products/edit";
import { ListProducts } from "./pages/products/list";
import { CreateProduct } from "./pages/products/create";

import { Login } from "./pages/home/login";
import { Header } from "./components/header";

function App() {
  return (
    <Refine dataProvider={dataProvider} authProvider={authProvider}>
      <Authenticated 
        key="protected" 
        fallback={<Login />}
      >
        <Header />
        {/* <ShowProduct /> */}
        {/* <EditProduct />  */}
        <ListProducts />
        {/* <CreateProduct /> */}
      </Authenticated>
    </Refine>
  );
}

export default App;
