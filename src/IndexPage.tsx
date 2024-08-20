import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function Home() {
	return (
		<>
			<section className="container-fluid bg-white">
					<div className="d-flex justify-content-between align-items-center py-1 m-0 px-1">
						<p className="m-0 fw-normal fs-5">Purchase Request System</p>
					</div>
					<hr/>
					<p>This website will help you create and manage purchase requests.</p>
			</section>
		</>
	);
}
export default Home;
