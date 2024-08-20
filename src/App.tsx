import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendorListPage from "./vendors/VendorListPage";
import Home from "./IndexPage";
import NavMenu from "./NavMenu";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateVendorPage from "./vendors/CreateVendorPage";
import EditVendorPage from "./vendors/EditVendorPage";
import UserListPage from "./users/UserListPage";
import CreateUserPage from "./users/CreateUserPage";
import EditUserPage from "./users/EditUserPage";
import {Toaster} from "react-hot-toast"
import ProductListPage from "./products/ProductListPage";
import CreateProductPage from "./products/CreateProductPage";
import EditProductPage from "./products/EditProductPage";

function App() {
	return (
		<BrowserRouter>
			<>
				<Header />
				<main className="d-flex">
						<NavMenu />
					<section className="p-3 w-100">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="*" element={<NotFound />} />

							<Route path="/vendors" element={<VendorListPage />} />
							<Route path="/vendors/create" element={<CreateVendorPage />} />
							<Route path="/vendors/edit/:id" element={<EditVendorPage />} />
							<Route path="/vendors/delete/:id" element={<VendorListPage />} />

							<Route path="/users" element={<UserListPage />} />
							<Route path="/users/create" element={<CreateUserPage />} />
							<Route path="/users/edit/:id" element={<EditUserPage />} />
							{/* <Route path="/users/delete/:id" element={</>} /> */}

							<Route path="/products" element={<ProductListPage />} />
							<Route path="/products/create" element={<CreateProductPage />} />
							<Route path="/products/edit/:id" element={<EditProductPage />} />
							{/* <Route path="/products/delete/:id" element={</>} /> */}


						</Routes>
					</section>
				</main>
			</>
		</BrowserRouter>
	);
}

export default App;
