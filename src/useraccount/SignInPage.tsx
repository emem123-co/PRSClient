import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { userAPI } from "../users/UserAPI";

import { User } from "../users/User";
import toast from "react-hot-toast";
import { useUserContext } from "../users/UserContext";

interface IAccount {
  username: string;
  password: string;
}

let emptyAccount = {
  username: "",
  password: "",
};

function persistUser(user: User) {
  localStorage.setItem("user", JSON.stringify(user));
}

function SignInPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAccount>({
    defaultValues: async () => {
      return emptyAccount;
    },
  });
  const { setUser } = useUserContext();

  const signin: SubmitHandler<IAccount> = async (account) => {
    try {
      if (!account.password ) {
        toast.error("incorrect password")
      } else {
        

      
      const user = await userAPI.findByAccount(
        account.username,
        account.password
      );
      persistUser(user);
      setUser(user);
      navigate("/requests");}
    } catch (error: any) {
      toast.error("Unsuccessful sign in. Please try again.");
    }
  };

  return (
    <main className="signin d-flex flex-column gap-4 justify-content-center align-items-center pt-5">
       
      <div className="card w-25 h-25 p-4">
        <h4 className="card-title">Sign in</h4>
        <form className="d-flex flex-column" onSubmit={handleSubmit(signin)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              {...register("username", {
                required: "Username is required",
              })}
              type="text"
              className={`form-control ${errors?.username && "is-invalid"} `}
            />
            <div className="invalid-feedback">{errors?.username?.message}</div>
          </div>
          <div className="mb-1">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              {...register("password", {
                required: "Password is required",
              })}
              type="password"
              className={`form-control ${errors?.password && "is-invalid"} `}
            />
            <div className="invalid-feedback">{errors?.password?.message}</div>
          </div>
          <div className="mb-4 form-text">
            <a href="#">Forgot It?</a>
          </div>
          <div className="mb-3 d-grid gap-2">
            <button className="btn btn-lg btn-primary">Sign in</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default SignInPage;