import { MainHeader } from '..';

const Layout: React.FC = ({ children }) => {
  return (
    <div className='container'>
      <MainHeader />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
