import RHFDatePicker from './RHFDatePicker';
import FormProvider from './FormProvider';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { Button, Stack } from '@mui/material';
import moment from 'moment';

function App() {
  const methods = useForm({ defaultValues: { date: '' } });

  const { handleSubmit } = methods;

  const onSubmit = useCallback((data) => {
    console.log(data);
    console.log(moment(data?.date).format('DD, MMM YYYY'));
  }, []);

  return (
    <Stack height="100vh" justifyContent="center" alignItems="center">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={1}>
          <RHFDatePicker name="date" label="date" sx={{ width: '100%' }} />
          <Button type="submit" variant="contained">
            submit
          </Button>
        </Stack>
      </FormProvider>
    </Stack>
  );
}

export default App;
