import * as yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserAdd = () => {
    const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      companyName: '',
    },
    validationSchema: yup.object({
      name: yup.string().required('Enter your name'),
      email: yup.string().email('Invalid email').required('Enter your email'),
      phone: yup
        .string()
        .max(10,"enter maximum 10 digits")
        .min(10,"enter minimum 10 digits")
        .matches(/^\d+$/, 'Phone must be numeric')
        .required('Enter your phone number'),
      companyName: yup.string().required('Enter your company name'),
    }),
    onSubmit: async (values, { resetForm }) => {
        try {
          const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
            name: values.name,
            email: values.email,
            phone: values.phone,
            company: { name: values.companyName },
          });
          console.log('User added:', response.data);
          alert('User added successfully!');
          navigate("/user-list")
          resetForm();
        } catch (error) {
          console.error('Error adding user:', error);
          alert('Failed to add user. Please try again later.');
        }
      },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">User-Add</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full border rounded px-3 py-2 ${
                formik.touched.name && formik.errors.name
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full border rounded px-3 py-2 ${
                formik.touched.email && formik.errors.email
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full border rounded px-3 py-2 ${
                formik.touched.phone && formik.errors.phone
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Enter your company name"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full border rounded px-3 py-2 ${
                formik.touched.companyName && formik.errors.companyName
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            />
            {formik.touched.companyName && formik.errors.companyName && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.companyName}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAdd;
