/*
    Summary 함수
    긴 문자열에 대해 앞 19자리를 잘라서 반환 
    인풋 문자열 아웃풋 앞에서부터 19글자의 문자열
*/
export const summary = (_content: string | null): string | null => {
  const summary: string | null =
    _content !== null ? (_content?.length > 18 ? `${_content?.slice(0, 19)}...` : _content) : null;
  return summary;
};
