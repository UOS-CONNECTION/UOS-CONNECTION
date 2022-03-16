import Header from '../Component/Header';
import Layout from '../Component/Layout';
import About from '../Component/About';
import '../scss/AboutPage.scss';

const MainPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <About />
    </Layout>
  );
};

export default MainPage;
