import { Box } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Box hidden={value !== index} {...other}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );
};

export default TabPanel;
