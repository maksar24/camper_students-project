import Button from 'components/Button/Button';
import {
  InputsContainer,
  StyledError,
  StyledForm,
  StyledTextarea,
  Text,
  Title,
} from './BookingForm.styled';
import Input from 'components/Input/Input';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  date: yup
    .date()
    .min(new Date(), 'Date must be in the future')
    .required('Date is required'),
});

const BookingForm = () => {
  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', date: '' }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {() => (
          <StyledForm>
            <div>
              <Title>Book your campervan now</Title>
              <Text>Stay connected! We are always ready to help you.</Text>
              <InputsContainer>
                <Input type="name" id="name" name="name" placeholder="Name" />
                <ErrorMessage name="name" component={<StyledError />} />
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component={<StyledError />} />
                <Input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Booking date"
                />
                <ErrorMessage name="date" component={<StyledError />} />
                <StyledTextarea type="text" placeholder="Comment" />
              </InputsContainer>
            </div>
            <Button type="submit">Send</Button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default BookingForm;
