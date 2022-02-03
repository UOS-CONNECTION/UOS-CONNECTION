import { useState } from 'react';

const useTemp = () => {
  const [value, setValue] = useState<string>('');

  return [value, setValue];
};

export default useTemp;
