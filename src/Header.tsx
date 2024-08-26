import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./users/UserContext";
import { getJSON } from "jquery";
import { parseJSON } from "./utility/fetchUtilities";

function Header() {
	const { user, setUser } = useUserContext();
	const navigate = useNavigate();

	function signout() {
		localStorage.removeItem("user");
		setUser(undefined);
		navigate("/signin");
	}

	return (
		<>
			<div className="">
				<header className="d-flex bg-secondary-subtle p-3 justify-content-between align-items-center border-bottom border-20 border-dark-subtle">
					<div className="d-flex align-items-center">
						<NavLink to="/">
							<svg
								id="logo-35"
								width={40}
								height={40}
								viewBox="0 0 50 50"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="pt-2"
							>
								<path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF" />
								<path
									d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
									className="ccustom"
									fill="#312ECB"
								/>
							</svg>
						</NavLink>
						<p className="m-0 fw-semibold fs-6 px-2">Purchase Request System</p>
					</div>
					<div className="px-2">
						
							
						
							<details className="dropdown pe-4 justify-content-">
								<summary className="btn dropdown-toggle d-flex align-items-center">
									<span
										style={{ width: "3rem", height: "3rem" }}
										className="d-flex  bg-primary fs-5 text-white align-items-center justify-content-center rounded-circle me-2"
									>
										<span>{Array(user?.firstName[0])}</span>
										<span>{Array(user?.lastName[0])}</span>
									</span>
								</summary>
								<div className="justify-content-start">
									<ul className=" 
									dropdown-menu bg-secondary-subtle d-flex flex-column " >
										<li >
											<a className="dropdown-item">Profile</a>
										</li>
										<li >
											<a className="dropdown-item">Settings</a>
										</li>
										<li className="">
												<button className="dropdown-item" onClick={signout}>
												Sign out
											</button>
										</li>
									
									</ul>
									</div>
							</details>
						
					</div>
				</header>
			</div>
		</>
	);
}

export default Header;
