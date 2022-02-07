import { ReactNode } from 'react';

const Layout: React.FC<ReactNode> = ({ children }) => {
  return <div className='layout-container'>{children}</div>;
};

export default Layout;
