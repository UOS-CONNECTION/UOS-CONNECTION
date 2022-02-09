import {
  Box,
  Typography,
  Card,
  Avatar,
  CardContent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { TempChat } from "../../Util/TempChat";
import SendIcon from "@mui/icons-material/Send";
import { deepOrange, grey } from "@mui/material/colors";

const ChatDetail: React.FC = () => {
  const [chatPerson, setChatPerson] = useState<number>(2); //id
  const [chatData, setChatData] = useState(TempChat[1]);
  return (
    <Box className="chatdetail-container">
      <Card className="chatdetail-top" elevation={0}>
        <Box className="userimage-container"></Box>
        <CardContent>
          <Typography className="chatdetail-usernickname">
            {chatData.user.nickname}
          </Typography>
        </CardContent>
      </Card>
      <Box className="chatdetail">
        {chatData.content?.map((item, idx) => (
          <Box key={idx} className={item[1] === 0 ? "chat-left" : "chat-right"}>
            <Card
              elevation={0}
              className={item[1] === 0 ? "chat-yellow" : "chat-gray"}
            >
              <Avatar
                className="chat-userimg"
                sx={
                  (item[1] === 0 && idx === 0) ||
                  (item[1] === 0 &&
                    idx >= 1 &&
                    chatData.content[idx - 1][1] !== 0)
                    ? {
                        display: "",
                        bgcolor: deepOrange[500],
                        width: 30,
                        height: 30,
                      }
                    : {
                        display: "",
                        visibility: "hidden",
                        bgcolor: grey[50],
                        width: 30,
                        height: 30,
                      }
                }
              >
                J
              </Avatar>
              <CardContent
                className={
                  item[1] === 0 ? "chatdetail-left" : "chatdetail-right"
                }
              >
                <Typography className="chat-content">{item[0]}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
      <Box className="send-chat">
        <TextField
          style={{ paddingTop: "0px" }}
          fullWidth
          id="filled-basic"
          variant="filled"
          className="chat-input"
          size="small"
          sx={{ border: 0, margin: 0, borderRadius: 10 }}
          InputProps={{
            disableUnderline: true,
            endAdornment: <SendIcon />,
            style: {
              height: 40,
              paddingBottom: 10,
              paddingLeft: 10,
              paddingTop: 10,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ChatDetail;
