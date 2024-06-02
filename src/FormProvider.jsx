import PropTypes from 'prop-types';
import { FormProvider as Form } from 'react-hook-form';

const FormProvider = ({ children, onSubmit, methods, style }) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} style={style}>
        {children}
      </form>
    </Form>
  );
};

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
  methods: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  style: PropTypes.any,
};

export default FormProvider;
