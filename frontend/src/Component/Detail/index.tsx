import { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TempData } from '../../Util/TempData';
import { IData, IInfomation } from '../../Util/Type';
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
      basic_info: [{
        id: 0,
        type: 0,
        info: '',
      }],
      extra_info: [{
        id: 0,
        type: 0,
        info: '',
      }]
    }
};

const Detail: React.FC = () => {
  const { postId } = useParams();
  
  const [post, setPost] = useState<IData>(initialPost);
  const [basicInfoList, setBasicInfoList] = useState<IInfomation[]>([]);
  const [extraInfoList, setExtraInfoList] = useState<IInfomation[]>([]);

  useLayoutEffect(() => {
    const nextPost = TempData[Number(postId) - 1];
    setPost(nextPost);
    setBasicInfoList(nextPost.User.basic_info as IInfomation[]);
    setExtraInfoList(nextPost.User.extra_info as IInfomation[]);
  }, [postId]);

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
