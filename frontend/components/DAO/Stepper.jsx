import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

export default function VerticalStepper({ page, steps }) {
  return (
    <Box sx={{ maxWidth: 600 }}>
      <Stepper
        activeStep={page}
        orientation='vertical'
        sx={{
          '& .MuiStepIcon-root': {
            color: '#292929 !important',
          },
        }}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              <Typography className='text-[#707070] font-Avenir'>
                {step.label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
