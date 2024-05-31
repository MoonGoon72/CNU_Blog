import styled from '@emotion/styled';
const Name = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
  color: #222;
`;
const Detail = styled.h3`
  font-size: 1.25rem;
  line-height: 1.5;
  font-weight: bold;
  color: #222;
`;

const Resume = () => {
  return (
    <div>
      <div>
        <Name>CNU SW아카데미 iOS 2기</Name>
        <Detail>2022.07 ~ 2022.12</Detail>
        <p />
        <Name>부스트캠프 웹·모바일(iOS) 8기 챌린지</Name>
        <Detail>2023.07.10 ~ 2023.08.04</Detail>
        <p />
        <Name>동계 근로 인턴 (엑소스피어랩스)</Name>
        <Detail>2023.12.26 ~ 2024.02.20</Detail>
        <p />
        <Name>파트타임 인턴 (엑소스피어랩스)</Name>
        <Detail>2024.03.04 ~ 2024.04.30</Detail>
      </div>
      ;
    </div>
  );
};

export default Resume;
