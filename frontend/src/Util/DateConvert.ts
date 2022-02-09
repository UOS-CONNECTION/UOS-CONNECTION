/*
  DateConvert 함수
  yyyy/m/d/h/m 형식의 날짜 표시 문자열을 대화목록에서 보기 쉬운 형식으로 변환해서 문자열을 반환합니다
  인풋 날짜 표시 문자열(yyyy/m/d/h/m) 마지막 채팅 작성 당시의 시간
  아웃풋
   날짜가 현재 시간 기준 당일일 경우 오전/오후 hh/mm
   날짜가 현재 시간 기준 1일 전이라면 어제로 통칭
   날짜가 현재 시간 기준 2일 전 이상이라면 yyyy/mm/dd
*/
export const DateConvert = (_date: string): string => {
  const pastDate: string[] = _date.split("/"); // 작성 당시의 시간을 연월일시분으로 분리
  const pastYear: string = pastDate[0];
  const pastMonth: string = pastDate[1];
  const pastDay: string = pastDate[2];
  const pastHour: string = pastDate[3];
  const pastMinute: string = pastDate[4];

  const today = new Date(); //현재 시간을 연월일로 분리
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1;
  const date: number = today.getDate();

  const isToday: boolean = Number(pastDay) === date;
  const isYesterday: boolean = Number(pastDay) === date - 1;
  const isThisyear: boolean = Number(pastYear) === year;
  const isThismonth: boolean = Number(pastMonth) === month;
  const isAfternoon: boolean = Number(pastHour) > 12;

  const yyyymmdd: string =
    pastYear +
    "-" +
    ["0", pastMonth].join("").slice(-2) +
    "-" +
    ["0", pastDay].join("").slice(-2); // yyyymmdd 형식으로 변경

  const pastAfternoonTime: string = String(Number(pastHour) - 12); //작성 당시 시간 오후로 변환

  if ((isToday || isYesterday) && isThisyear && isThismonth) {
    if (isToday && isAfternoon)
      return `오후 ${pastAfternoonTime}:${pastMinute}`;
    else if (isToday && !isAfternoon) return `오전 ${pastHour}:${pastMinute}`;
    else if (isYesterday) return "어제";
  } else return yyyymmdd;

  return "err"; //exception
};
