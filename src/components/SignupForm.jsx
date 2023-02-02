import { useFormik } from "formik";
import * as yup from "yup";
import { authAPI } from "../API/API";

export const SignupForm = () => {

  const validation = yup.object({
    email: yup.string().email("Invalid email address").required("Required"),
    password: yup.string().min(6, "Must be 4 characters or more").max(15, "Must be 15 characters or less").required("Required"),
  })

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validation,
    onSubmit: (values) => {
      authAPI.CreateUser(values.email, values.password) 
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder='Email'
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <div></div>
      <label htmlFor="password">Password </label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        placeholder='password'
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <div></div>
      <button type="submit">Submit</button>
    </form>
  );
};
