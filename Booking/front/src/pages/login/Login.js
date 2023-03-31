import { useDispatch } from "react-redux";
import { login } from "../../store/apiCalls";
import { useNavigate } from "react-router-dom";
import "./login.css";

import Box from "@mui/material/Box";
import { FormHelperText, Stack, Grid } from "@mui/material";

import * as Yup from "yup";
import { useFormik } from "formik";
import Navbar from "../../components/navbar/Navbar";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    const user = { ...values };
    login(user, dispatch);
    navigate("/");
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("please enter valid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validationSchema,
      onSubmit,
    });
  return (
    <>
      <Navbar type = "out"/>
      <div className="login_container">
        <div className="login_form_container">
          <div className="left">
            <form className="form_container" onSubmit={handleSubmit}>
              <h1>Login</h1>
              <Stack>
                <input
                  type="email"
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="input"
                  error={Boolean(touched.email && errors.email)}
                />
                {touched.email && errors.email && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-email-login"
                  >
                    {errors.email}
                  </FormHelperText>
                )}
              </Stack>
              <Box height={14} />
              <Stack>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  required
                  className="input"
                  error={Boolean(touched.password && errors.password)}
                />
                {touched.password && errors.password && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-password-login"
                  >
                    {errors.password}
                  </FormHelperText>
                )}
              </Stack>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <button type="submit" className="green_btn">
                Sing In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
