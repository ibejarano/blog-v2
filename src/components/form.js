import React from "react"
import { useFormik } from "formik"

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = "El nombre es obligatorio"
  } else if (values.firstName.length > 15) {
    errors.firstName = "El nombre debe ser de 15 caracteres o menos"
  }

  if (!values.lastName) {
    errors.lastName = "El apellido es obligatorio"
  } else if (values.lastName.length > 20) {
    errors.lastName = "El apellido debe ser de 20 caracteres o menos"
  }

  if (!values.email) {
    errors.email = "El email es obligatorio"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "El email ingresado es invalido"
  }
  return errors
}

const SignupForm = () => {
  const formik = useFormik({
    initialValues: { email: "", firstName: "", lastName: "" },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <label htmlFor="firstName">Nombre</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <label htmlFor="lastName">Apellido</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default SignupForm
