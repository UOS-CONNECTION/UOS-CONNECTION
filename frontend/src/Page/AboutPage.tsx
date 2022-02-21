import Header from '../Component/Header';
import Layout from '../Component/Layout';
import About from '../Component/About';
import Banner from '../Component/Banner';
import '../scss/AboutPage.scss';

const MainPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Banner />
      <About />
    </Layout>
  );
};

export default MainPage;
