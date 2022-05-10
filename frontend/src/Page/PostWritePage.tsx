import Header from '../Component/Header';
import Layout from '../Component/Layout';
import PostWrite from '../Component/PostWrite';

import '../scss/PostWritePage.scss';

const PostWritePage = () => {
  return (
    <Layout>
      <Header />
      <PostWrite />
    </Layout>
  );
};

export default PostWritePage;
