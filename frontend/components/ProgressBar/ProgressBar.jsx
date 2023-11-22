import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

// Custom LinearProgress to apply specific bar color
const ColoredLinearProgress = styled(LinearProgress)(({ barcolor }) => ({
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: barcolor,
  },
}));

export default function VotingProgressBar({ yesVotes, noVotes }) {
  const totalVotes = yesVotes + noVotes;
  const yesPercentage = totalVotes > 0 ? (yesVotes / totalVotes) * 100 : 0;
  const noPercentage = totalVotes > 0 ? (noVotes / totalVotes) * 100 : 0;

  return (
    <Box
      sx={{
        height: 10,
        width: '100%',
        display: 'flex',
        borderRadius: 4,
        overflow: 'hidden',
        // backgroundColor: '#D3D3D3',
      }}>
      <ColoredLinearProgress
        variant='determinate'
        value={100}
        barcolor='#1C6032' // Green for YES
        sx={{
          width: `${yesPercentage}%`,
          //   mr: '2px',
          height: '100%',
          backgroundColor: 'transparent',
        }}
      />
      <ColoredLinearProgress
        variant='determinate'
        value={100}
        barcolor='#FF0000' // Red for NO
        sx={{
          width: `${noPercentage}%`,
          height: '100%',
          backgroundColor: 'transparent',
        }}
      />
    </Box>
  );
}
