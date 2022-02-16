import { BASIC_INFO_TYPE, EXTRA_INFO_TYPE } from './Constant';
import * as faker from 'faker';
import shortId from 'shortid';

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

faker.setLocale('ko');
const makeDate = (): string => {
  return (
    String(faker.datatype.number({ min: 2000, max: 2022 })) +
    '/' +
    String(faker.datatype.number({ min: 1, max: 12 })) +
    '/' +
    String(faker.datatype.number({ min: 1, max: 30 })) +
    '/' +
    String(faker.datatype.number({ min: 0, max: 24 })) +
    '/' +
    String(faker.datatype.number({ min: 10, max: 60 }))
  );
};

export const TempChat = Array(20)
  .fill('')
  .map(() => ({
    id: shortId.generate(),
    User: {
      id: shortId.generate(),
      img: null,
      nickname: faker.name.lastName() + faker.name.firstName(),
    },
    unwatched: faker.datatype.number({ min: 0, max: 5 }),
    last: makeDate(),
    overview: faker.lorem.words(),
    content: [
      // + host - receiver
      [faker.lorem.sentence(), 1],
      [faker.lorem.sentence(), -1],
      [faker.lorem.sentence(), 1],
      [faker.lorem.sentence(), 2],
      [faker.lorem.sentence(), -1],
    ],
  }));
