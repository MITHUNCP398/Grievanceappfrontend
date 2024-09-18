import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import './Grievancepage.css'; 

const GrievancePage = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters long')
      .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    grievance: Yup.string()
      .min(10, 'Grievance must be at least 10 characters long')
      .required('Grievance is required'),
  });

  // Initial form values
  const initialValues = {
    name: '',
    email: '',
    grievance: '',
  };

  // Handle form submission
  const handleSubmit = async (values, { resetForm }) => {
    console.log('Grievance submitted:', values);
    const resp = await axios.post('http://localhost:3000/addgrievance', values);
    if (resp.status === 200) {
      toast.success(resp.data.message, {
        autoClose: 3000,
      });
      resetForm();
    } else {
      toast.error(resp.data.data.message, {
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="page">
      <h1 className="heading">Submit Your Grievance</h1>
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <div className="form-group">
                <label className="label">Name</label>
                <Field type="text" name="name" className="input" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div className="form-group">
                <label className="label">Email</label>
                <Field type="email" name="email" className="input" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="form-group">
                <label className="label">Grievance</label>
                <Field as="textarea" name="grievance" className="input" style={{ height: '100px' }} />
                <ErrorMessage name="grievance" component="div" className="error" />
              </div>

              <button type="submit" disabled={isSubmitting} className="button">
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
};

export default GrievancePage;
