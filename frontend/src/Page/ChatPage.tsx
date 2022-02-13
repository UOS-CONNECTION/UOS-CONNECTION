import Chat from '../Component/Chat';
import Header from '../Component/Header';
import Layout from '../Component/Layout';
import '../scss/ChatPage.scss';

const ChatPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Chat />
    </Layout>
  );
};

export default ChatPage;
