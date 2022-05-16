import { useCallback, useLayoutEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../../Store/Action/postAction';
import { IData, IInfomation } from '../../Types/Type';
import DetailCard from './DetailCard';
import InfomationCard from './InfomationCard';

const initialPost: IData = {
  id: 0,
  desc: '',
  title: '',
  img: '',
  label: [''],
  User: {
    id: 0,
    img: '',
    name: '',
    score: 0,
    short_desc: '',
    basic_info: [
      {
        id: 0,
        type: 0,
        info: '',
      },
    ],
    extra_info: [
      {
        id: 0,
        type: 0,
        info: '',
      },
    ],
  },
};

const Detail: React.FC = () => {
  const [post, setPost] = useState<IData>(initialPost);
  const [basicInfoList, setBasicInfoList] = useState<IInfomation[]>([]);
  const [extraInfoList, setExtraInfoList] = useState<IInfomation[]>([]);

  const dispatch = useDispatch();
  const { postId } = useParams();
  const postFromRedux = useSelector(
    (state: RootStateOrAny) => state.postReducer.post,
  );

  const setPostData = useCallback((postData) => {
    setPost(postData);
    setBasicInfoList(postData.User.basic_info);
    setExtraInfoList(postData.User.extra_info);
  }, []);

  /**
   * 리덕스에 상태가 저장이 되어있다면 해당 데이터를, (case => main에서 카드 클릭)
   * 상태가 저장이 되어있지 않다면 서버로부터 데이터를 저장합니다. (case => 상세페이지에서 새로고침)
   */
  const setPostInfo = useCallback(async () => {
    if (postFromRedux !== undefined) {
      setPostData(postFromRedux);
    } else {
      const res = await dispatch(getOnePost(Number(postId)));
      if (res.payload.status === 200) {
        setPostData(res.payload.data);
      }
    }
  }, [dispatch, postFromRedux, postId, setPostData]);

  useLayoutEffect(() => {
    setPostInfo();
  }, [setPostInfo]);

  return (
    <div className='detail-container'>
      <DetailCard post={post} />
      <InfomationCard
        basicInfoList={basicInfoList}
        extraInfoList={extraInfoList}
      />
    </div>
  );
};

export default Detail;
