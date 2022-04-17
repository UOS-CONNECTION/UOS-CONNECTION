import Header from '../Component/Header';
import Layout from '../Component/Layout';
import MyPageContent from '../Component/MyPageContent';
import '../scss/Mypage.scss';

const Mypage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <MyPageContent />
    </Layout>
  );
};

export default Mypage;
