import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const RHFDatePicker = ({ name, label, onChange, minDate, ...other }) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <DatePicker
            format="DD/MM/YYYY"
            label={label}
            value={dayjs(field?.value)}
            onChange={(newValue) => {
              if (onChange) {
                onChange(newValue?.format('YYYY-MM-DD'));
              }
              field.onChange(newValue?.format('YYYY-MM-DD'));
            }}
            minDate={minDate}
            sx={{
              '& .MuiOutlinedInput-root': {
                height: '48px',
              },
            }}
            slotProps={{
              textField: {
                sx: {
                  '& .MuiOutlinedInput-input': {
                    py: '14px',
                  },
                },
                helperText: error?.type || error?.message,
                error: Boolean(error),
              },
            }}
            {...other}
          />
        );
      }}
    />
  );
};

RHFDatePicker.propTypes = {
  label: PropTypes.any,
  minDate: PropTypes.any,
  name: PropTypes.any,
  onChange: PropTypes.func,
};

export default RHFDatePicker;
