import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendorsListPage from "./vendors/VendorsListPage";
import Home from "./IndexPage";
import CreateVendorPage from "./vendors/CreateVendorPage";

function App() {
	return (
		<BrowserRouter>
			<>
				<main>
					<section>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/vendors" element={<VendorsListPage />} />
							<Route path="/vendors" element={<CreateVendorPage />} />
						</Routes>
					</section>
				</main>
			</>
		</BrowserRouter>
	);
}

export default App;
