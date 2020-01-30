import React from "react"
import { useFormik } from "formik"

const SignupForm = () => {
  const formik = useFormik({
    initialValues: { email: "",name:"", lastName: "" },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="name">Nombre</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="lastName">Apellido</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default SignupForm
