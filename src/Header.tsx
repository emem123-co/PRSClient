import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./users/UserContext";

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
						<div className="">
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
						</div>
						<p className="m-0 fw-semibold fs-6 px-2">Purchase Request System</p>
					</div>
					<div className="px-2">
						<details>
							<summary className="btn btn-tertiary dropdown-toggle d-flex align-items-center">
								<span
									style={{ width: "3rem", height: "3rem" }}
									className="d-flex  bg-primary-subtle fs-5 text-secondary align-items-center justify-content-center rounded-circle me-2"
								>
									<span>{Array(user?.firstName[0])}</span>
									<span>{Array(user?.lastName[0])}</span>
								</span>
							</summary>
							{user && <button className="dropdown-item" onClick={signout}>
								Sign out
							</button> }
							
						</details>
					</div>
				</header>
			</div>
		</>
	);
}

export default Header;
