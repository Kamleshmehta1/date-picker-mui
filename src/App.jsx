import RHFDatePicker from './RHFDatePicker';
import FormProvider from './FormProvider';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { Button, Stack } from '@mui/material';
import dayjs from 'dayjs';

function App() {
  const methods = useForm({
    defaultValues: { date: dayjs() },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = useCallback((data) => {
    console.log(data);
    console.log(dayjs(data?.date).format('DD, MMM YYYY'));
  }, []);

  return (
    <Stack height="100vh" justifyContent="center" alignItems="center">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={1}>
          <RHFDatePicker
            name="date"
            label="date"
            sx={{ width: '100%' }}
            onChange={(value) => value}
          />
          <Button type="submit" variant="contained">
            submit
          </Button>
          <Button color="error" variant="contained" onClick={() => reset()}>
            reset
          </Button>
        </Stack>
      </FormProvider>
    </Stack>
  );
}

export default App;
