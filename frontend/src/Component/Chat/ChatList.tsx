import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TempChat } from "../../Util/TempChat";
import { DateConvert } from "../../Util/DateConvert";
import { Summary } from "../../Util/Summary";
import { ChatType } from "../../Util/ChatType";

const ChatList: React.FC = () => {
  const unwatchedExist = (_item: ChatType): boolean => _item.unwatched !== 0;

  return (
    <Box className="chatlist-container">
      <Box className="chatlist-top">
        <Typography color="inherit" className="chatlist-header">
          대화목록
        </Typography>
        <SearchIcon className="search-icon"></SearchIcon>
      </Box>
      <Box className="chatlist">
        {TempChat.map((item, idx) => (
          <Card className="chat" elevation={0} key={idx}>
            <CardMedia
              component="img"
              className="chatlist-userimg"
              alt=""
              image=""
            />
            <CardContent className="chatlist-mid">
              <Typography className="chatlist-nickname">
                {item.user.nickname}
              </Typography>
              <Typography className="chatlist-overview">
                {Summary(item.overview)}
              </Typography>
            </CardContent>
            <CardContent className="chatlist-right">
              <Typography className="chatlist-lastsaw">
                {DateConvert(item.last)}
              </Typography>
              {unwatchedExist(item) ? (
                <Box className="unwatched-circle">
                  <Typography className="chatlist-unwatched">
                    {item.unwatched}
                  </Typography>
                </Box>
              ) : (
                " "
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ChatList;
