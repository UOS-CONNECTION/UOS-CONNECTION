export const DateConvert = (_date: string): string => {
  const lastDate: string[] = _date.split("/"); // 0:year , 1: month 2: date, 3: hour 4: minute
  const today = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1; // 월
  const date: number = today.getDate(); // 날짜

  if (
    (Number(lastDate[2]) === date || Number(lastDate[2]) === date - 1) &&
    Number(lastDate[0]) === year &&
    Number(lastDate[1]) === month
  ) {
    if (Number(lastDate[2]) === date) {
      if (Number(lastDate[3]) > 12)
        return "오후 " + String(Number(lastDate[3]) - 12) + ": " + lastDate[4];
      else return "오전 " + lastDate[3] + ": " + lastDate[4];
    } else if (Number(lastDate[2]) === date - 1) return "어제";
    else return "err";
  } else
    return (
      lastDate[0] +
      "-" +
      ("0" + lastDate[1]).slice(-2, 2) +
      "-" +
      ("0" + lastDate[2]).slice(-2, 2)
    );
};
