import Header from '../Component/Header';
import Layout from '../Component/Layout';
import Detail from '../Component/Detail';
import Banner from '../Component/Banner';
import '../scss/DetailPage.scss';

const MainPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Banner />
      <Detail />
    </Layout>
  );
};

export default MainPage;
