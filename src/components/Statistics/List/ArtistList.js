import styled from "styled-components";
import background from '../../images/favorirteArtist.png'

const Background = styled.div`
  background-image: url(${background});
  width: 100vw;
  z-index: 10;
  opacity: 0.7;
  background-attachment:fixed;
`

const Container = styled.div`
  display: flex;
  color: black;
  flex-wrap: wrap;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    margin-left: 50px;
`
const Image = styled.img`
    width: 300px;
    height: 330px;
    margin: 60px;
`

const Artist = styled.div`
    top: 30px;
`
const ArtistList = (props) => {
    <Background>
        <Container>
            <Image src={props.artistImage} />
            <Text>
                <Artist>{props.artistName}</Artist>
            </Text>
        </Container>
    </Background>
}
export default ArtistList;