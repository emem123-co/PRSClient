import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link, useNavigate, useParams } from "react-router-dom";
import { User } from "./User";
import { useForm } from "react-hook-form";
import { userAPI } from "./UserAPI";
import toast from "react-hot-toast";

function UserForm() {

	let { userId: userIdAsString } = useParams<{ userId: string }>();
	let userId = Number(userIdAsString);
	const navigate = useNavigate();


	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<User>({
		defaultValues: async () => {
			
			if (!userId) {
				let newUser = new User( userId );
				return Promise.resolve(newUser);
			} else {
				return await userAPI.find(userId);
			}
		},
	});

	
	async function save(user: User) {
		await userAPI.post(user);

		toast.success("Success!");
		navigate("/users");
	}

	return (
		<>
			<div className="d-flex fw-normal fs-6">
				<form className="d-flex flex-wrap flex-row w-75" onSubmit={handleSubmit(save)}>
					<div className="d-flex w-100 gap-3">
						<div className=" row-1 d-flex flex-column w-100">
							<label className="form-label" htmlFor="firstName">
								First Name
							</label>
							<input
								className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
								{...register("firstName", { required: "First name is required." })}
								type="text"
								id="firstName"
							/>
							<div className="invalid-feedback">{errors.firstName?.message}</div>
						</div>

						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="lastName">
								Last Name
							</label>
							<input
								className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
								{...register("lastName", { required: "Last name is required." })}
								type="text"
								id="lastName"
							/>
							<div className="invalid-feedback">{errors.lastName?.message}</div>
						</div>
					</div>

					<div className="row-2 d-flex flex-column w-100">
						<label className="pt-3 form-label" htmlFor="email">
							Email Address
						</label>
						<input
							className={`form-control ${errors.email ? "is-invalid" : ""}`}
							{...register("email", { required: "User email is required." })}
							type="text"
							id="email"
						/>
						<div className="invalid-feedback">
							{errors.email?.message}
						</div>
					</div>

					<div className="pt-3 gap-3 row-3 d-flex flex-row w-100">
						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="userName">
								Username
							</label>
							<input
								className={`form-control ${errors.userName ? "is-invalid" : ""}`}
								{...register("userName", { required: "Username is required." })}
								type="text"
								id="city"
							/>
							<div className="invalid-feedback">
								{errors.userName?.message}
							</div>
						</div>

						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="password">
								Password
							</label>
							<input
								className={`form-control ${errors.password ? "is-invalid" : ""}`}
								{...register("password", { required: "User password is required." })}
								type="password"
								id="password"
							/>
							<div className="invalid-feedback">
								{errors.password?.message}
							</div>
						</div>

						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="phone">
								Phone
							</label>
							<input className="form-control" {...register("phone")} type="text" id="phone" />
						</div>
					</div>

					<div className="pt-3 gap-3 row-4 d-flex flex-column">
						<div className="d-flex align-items-center">
							<label className="form-check-label pe-3" htmlFor="isReviewer">
								This user can review others' requests.
							</label>
							<input
								className={`form-check-input form-control h-100 ${errors.isReviewer ? "is-invalid" : ""}`}
								{...register("isReviewer")}
								type="checkbox"
								id="isReviewer"
							/>
							<div className="invalid-feedback">
								{errors.isReviewer?.message}
								</div>
						</div>

						<div className="d-flex align-items-center">
							<label className="form-check-label pe-3" htmlFor="isAdmin">
								This user is a system admin.
							</label>
							<input
								className={`form-control form-check-input h-100 ${errors.isAdmin ? "is-invalid" : ""}`}
								{...register("isAdmin")}
								type="checkbox"
								id="isAdmin"
							/>
							<div className="invalid-feedback">
								{errors.isAdmin?.message}
							</div>
						</div>
					</div>

					<div className="pt-4 gap-3 row-5 d-flex flex-row w-100  justify-content-end ">
						<div className="d-flex gap-3 pt-3">
							<Link className="btn btn-outline-secondary fw-light fs-6 border" to={"/users"}>
								Cancel
							</Link>
							<button type="submit" className="btn btn-primary fw-light fs-6">
								Save
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default UserForm;
