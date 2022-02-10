import { Box } from "@mui/material";
import ChatList from "./ChatList";
import ChatDetail from "./ChatDetail";

const Chat: React.FC = () => {
  return (
    <Box className="main-container">
      <ChatList />
      <ChatDetail />
    </Box>
  );
};

export default Chat;
