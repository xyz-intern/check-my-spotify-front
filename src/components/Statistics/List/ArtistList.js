import styled from "styled-components";

const Card = styled.div`
  width: 356px;
  color: black;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  margin: 60px;
  border-radius: 50%;
  opacity: 0.7;
`;

const Artist = styled.div`
  text-align: center;
  margin-top: -40px;
  font-size: 18px;
  -webkit-text-stroke: 0.2px;
  margin-left: 13px;
`;

const ArtistList = (props) => {
  return (
    <Card>
      <Image src={props.artistImage} />
      <Artist>{props.artistName}</Artist>
    </Card>
  );
};

export default ArtistList;
