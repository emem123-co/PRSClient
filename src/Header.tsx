import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Header() {
	return (
		<>
			<div className="">
				<header className="d-flex bg-secondary-subtle py-4 px-5 justify-content-between">
					<svg id="logo-35" width={50} height={39} viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF" />
						<path
							d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
							className="ccustom"
							fill="#312ECB"
						/>
					</svg>
					<p className="pt-2">PURCHASE REQUEST SYSTEM</p>
					<Link to="" className="btn btn-outline-primary">
						SIGN IN
					</Link>
				</header>
			</div>
		</>
	);
}

export default Header;
