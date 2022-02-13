import { BASIC_INFO_TYPE, EXTRA_INFO_TYPE } from './Constant';

export const TempData = [
  {
    id: 1,
    title: '나보다 바퀴벌레를 잘 잡는 사람이 있을까?',
    label: ['바퀴벌레', '자취방'],
    desc: '백년 묵은 바퀴벌레 다 잡아드립니다. 지금 침대 위에서 벌벌떨고 있다면 연락주세요. 화장실, 천장, 책상 모두 처리 가능합니다. 궁금하신 사항의 있으면 연락주세요.',
    img: 'https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png',
    User: {
      id: 1,
      img: 'https://avatars.githubusercontent.com/u/43488305?v=4',
      name: '상민',
      score: 4.1,
      short_desc: '바퀴벌레 전문가, 나로 말할 것 같으면',
      basic_info: [
        {
          id: 0,
          type: BASIC_INFO_TYPE.CERTIFICATION,
          info: '2022.02.08',
        },
        {
          id: 1,
          type: BASIC_INFO_TYPE.GIVE,
          info: '3회 기부 완료',
        },
        {
          id: 2,
          type: BASIC_INFO_TYPE.LOCATION,
          info: '시립대 후문',
        },
        {
          id: 3,
          type: BASIC_INFO_TYPE.TIME,
          info: '09:00 ~ 22:00',
        },
      ],
      extra_info: [
        {
          id: 1000,
          type: EXTRA_INFO_TYPE.CAREER,
          info: '경력 10년',
        },
        {
          id: 1001,
          type: EXTRA_INFO_TYPE.NONE,
          info: '추가되는 라벨',
        },
      ],
    },
  },
  {
    id: 2,
    title: '내가 바로 요리왕',
    label: ['요리', '자취방'],
    desc: '원하시는 요리 다 해드립니다. 파스타부터 볶음밥만 가능하고요 부모님의 손 맛이 그리워 지셨다면 언제든지 연락 주세요. 모든 요리 대신 해드립니다.',
    img: 'https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png',
    User: {
      id: 2,
      img: 'https://avatars.githubusercontent.com/u/86864534?s=88&u=43e1e9f8113d19da3c3b8e8b656e4b758beff36e&v=4',
      name: '인우',
      score: 5.0,
      short_desc: '엄마 손 전문가, 나로 말할 것 같으면',
      basic_info: [
        {
          id: 0,
          type: BASIC_INFO_TYPE.CERTIFICATION,
          info: '2022.02.08',
        },
        {
          id: 1,
          type: BASIC_INFO_TYPE.GIVE,
          info: '10회 기부 완료',
        },
        {
          id: 2,
          type: BASIC_INFO_TYPE.LOCATION,
          info: '시립대 정문',
        },
        {
          id: 3,
          type: BASIC_INFO_TYPE.TIME,
          info: '03:00 ~ 10:00',
        },
      ],
      extra_info: [
        {
          id: 1000,
          type: EXTRA_INFO_TYPE.CAREER,
          info: '경력 23년',
        },
        {
          id: 1001,
          type: EXTRA_INFO_TYPE.NONE,
          info: '추가되는 라벨',
        },
      ],
    },
  },
  {
    id: 3,
    title: '내가 바로 디자인의 대가, 디자인 대신 해드려요',
    label: ['디자인', '포토샵', '일러스트레이터'],
    desc: '아니 아직도 디자인이 어려우시다고요? 그럴 줄 알고 제가 왔습니다. 디자인이 필요한 부분이 있으면 언제든 연락 주세요. 일러스트레이터 포토샵 모두 가능합니다.',
    img: 'https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png',
    User: {
      id: 3,
      img: 'https://avatars.githubusercontent.com/u/90690578?s=88&u=19a324b3f507a41a6cac196adafb9c57e38587a7&v=4',
      name: '지함',
      score: 5.0,
      short_desc: '포토샵 전문가, 나로 말할 것 같으면',
      basic_info: [
        {
          id: 0,
          type: BASIC_INFO_TYPE.CERTIFICATION,
          info: '2022.02.08',
        },
        {
          id: 1,
          type: BASIC_INFO_TYPE.GIVE,
          info: '32회 기부 완료',
        },
        {
          id: 2,
          type: BASIC_INFO_TYPE.LOCATION,
          info: '시립대 전체',
        },
        {
          id: 3,
          type: BASIC_INFO_TYPE.TIME,
          info: '09:00 ~ 22:00',
        },
      ],
      extra_info: [
        {
          id: 1000,
          type: EXTRA_INFO_TYPE.CAREER,
          info: '경력 22년',
        },
        {
          id: 1001,
          type: EXTRA_INFO_TYPE.NONE,
          info: '추가되는 라벨',
        },
      ],
    },
  },
];

export const TempChat = [
  {
    id: 1,
    User: {
      id: 180,
      img: null,
      nickname: '상민',
    },
    unwatched: 2,
    last: '2022/2/7/22/20',
    overview: '인간크롱 뿌뿌뿡',
    content: [
      // + host - receiver
      ['에헤이', 1],
      ['하이하이여', -1],
      ['님 50만원만 네고 ㄱㄱ', -2],
      ['허허 50만원 받고 더블로 가 !', 1],
    ],
  },
  {
    id: 2,
    User: {
      id: 160,
      img: null,
      nickname: '지함',
    },
    unwatched: 0,
    last: '2022/2/5/22/20',
    overview: '지함 지함 지함 지함 지함 지함 지함 지함 지함 지함 지함',
    content: [
      [' UN village ~~', 1],
      ['U & me relaxing chilling yeah~~', -1],
      ['완벽한 모습을 너에게 보이지는 않을 거야~~', -2],
      ['지금 이 순간 마저 난 모든 것 흘러가는대로 부는 곳으로 바람이~~', 1],
      ['사랑을 속삭일 때 난 원래 ~~', -1],
      ['이미 알고 있었다고 해도 ~ 처음 느끼는 기분으로 널 ~~', 1],
      ['리드할께 lean on~~ me', 2],
      ['특별한 시간을 보낼 수 있는 자신이 있다는 걸 난 알아~', -1],
      ['I know that I know that I know that', -2],
      ['한남동 UN village ~~ 언덕에서 달을 보면', 1],
    ],
  },
  {
    id: 3,
    User: {
      id: 180,
      img: null,
      nickname: '인우',
    },
    unwatched: 0,
    last: '2022/2/08/11/20',
    overview: '책상 breaker',
  },
  {
    id: 4,
    User: {
      id: 140,
      img: null,
      nickname: '케로로',
    },
    unwatched: 0,
    last: '2022/2/08/3/20',
    overview: '퍼렁별 침략자',
  },
  {
    id: 5,
    User: {
      id: 163,
      img: null,
      nickname: '코난',
    },
    unwatched: 3,
    last: '2022/2/08/14/20',
    overview: '몸은 작아졌어도 두뇌는 그래도 포기를 모르는 명탐정',
  },
  {
    id: 6,
    User: {
      id: 132,
      img: null,
      nickname: '김신',
    },
    unwatched: 0,
    last: '2021/2/28/11/20',
    overview: '아무르 티그로 캐슬을 박살 내기 위해서 한국에 상륙',
  },
];
