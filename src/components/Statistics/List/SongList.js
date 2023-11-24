import styled from "styled-components";
import background from '../../images/mostStream.png'

const Background = styled.div`
  background-image: url(${background});
  width: 100vw;
  z-index: 10;
  opacity: 0.7;
  background-attachment:fixed;
  background-size: cover;
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

const Song = styled.div`
    top: 60px;
    -webkit-text-stroke: 1.5px;
`

const Count = styled.div`
    top: 90px;
`

function List(props) {
    return (
        <Background>
                    <Container>
                        <Image src={props.albumImage} />
                        <Text>
                            <Song>{props.songName}</Song>
                            <Artist>{props.artistName}</Artist>
                            {props.type == 'song'? (
                                
                            <Count>{props.count}</Count>) : '' }
                        </Text>
                    </Container>
        </Background>
    );
}

export default List;
