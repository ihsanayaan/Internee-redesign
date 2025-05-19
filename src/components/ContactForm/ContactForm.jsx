import { useFormik } from 'formik';
import * as Yup from 'yup';
import './ContactForm.css';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      message: Yup.string().min(10, 'Minimum 10 characters').required('Message is required')
    }),
    onSubmit: (values, { resetForm }) => {
      alert('Form submitted!');
      console.log(values);
      resetForm();
    }
  });

  return (
    <form className="contact-form" onSubmit={formik.handleSubmit}>
      <h2>Contact Us</h2>

      <input
        name="name"
        placeholder="Your Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name && (
        <p className="error">{formik.errors.name}</p>
      )}

      <input
        name="email"
        type="email"
        placeholder="Your Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && (
        <p className="error">{formik.errors.email}</p>
      )}

      <textarea
        name="message"
        placeholder="Your Message"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
      />
      {formik.touched.message && formik.errors.message && (
        <p className="error">{formik.errors.message}</p>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
