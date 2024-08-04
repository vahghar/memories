import { styled } from '@mui/system';

export const MainContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

export const SmMargin = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const ActionDiv = styled('div')(({ theme }) => ({
  textAlign: 'center',
}));