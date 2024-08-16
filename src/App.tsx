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

function App() {
	return (
		<BrowserRouter>
			<>
				<Header />
				<main className="d-flex">
					<div className="w-25 bg-secondary-subtle min-vh-100">
						<NavMenu />
					</div>
					<section className="p-3 w-100">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/vendors" element={<VendorListPage />} />
							<Route path="/vendors/create" element={<CreateVendorPage />} />
							<Route path="/vendors/edit/:id" element={<EditVendorPage />} />
							<Route path="/vendors/delete/:id" element={<VendorListPage />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</section>
				</main>
			</>
		</BrowserRouter>
	);
}

export default App;
