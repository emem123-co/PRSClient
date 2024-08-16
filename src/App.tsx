import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendorsListPage from "./vendors/VendorsListPage";
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
					<div className=" bg-secondary-subtle min-vh-100">
						<NavMenu />
					</div>
					<section className="p-3 w-100">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/vendors" element={<VendorsListPage />} />
							<Route path="/vendors/createvendorpage" element={<CreateVendorPage />} />
							<Route path="/vendors/editvendorpage" element={<EditVendorPage />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</section>
				</main>
			</>
		</BrowserRouter>
	);
}

export default App;
