import Header from '../Component/Header';
import Layout from '../Component/Layout';
import Main from '../Component/Main';
import Banner from '../Component/Banner';
import '../scss/MainPage.scss';

const MainPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Banner />
      <Main />
    </Layout>
  );
};

export default MainPage;
