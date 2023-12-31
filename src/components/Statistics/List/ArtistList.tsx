import { useContext } from "react";
import styled from "styled-components";
import { PageContext } from "../../../App";
import React from "react";
import {ArtistType} from '../FavoriteArtist'

 type InfoProps = {
  song : ArtistType
}

const Card = styled.div`
  width: 356px;
  color: black;
`;

const Image = styled.img`
  width: 235px;
  height: 240px;
  margin: 60px;
  border-radius: 50%;
`;

const Artist = styled.div`
  text-align: center;
  margin-top: -40px;
  font-size: 18px;
  -webkit-text-stroke: 0.2px;
  margin-left: 13px;
`;


const ArtistList = ({song} : InfoProps) => {
  const pageContext = useContext(PageContext)
  pageContext?.setIsLoading(false);
  return (
    <Card>
      <Image src={song.artistImage} />
      <Artist>{song.artistName}</Artist>
    </Card>

  );
};

export default ArtistList;
