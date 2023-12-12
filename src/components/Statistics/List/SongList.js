import styled from "styled-components";

const Container = styled.div`
  display: flex;
  color: black;
  flex-wrap: wrap;
  position: relative;
`

const Image = styled.img`
    width: 300px;
    height: 330px;
    margin: 60px;
`

const Wrapper = styled.div`
    display: inline-block;
`

const Content1 = styled.div`
    font-size: 20px;
    position: absolute;
    top: 45%;
    margin-left: 30px;
`

const Content2 = styled.div`
    right: 10%;
    position: absolute;
    top: 50%;
 `

const Song = styled.div`
    -webkit-text-stroke: 1.5px;
`

const Count = styled.div`
    font-size: 22px;
    color: black;
    -webkit-text-stroke: 1.8px;
`

function List(props) {
    return (
        <Container>
            <Image src={props.albumImage} />
            <Wrapper>
                <Content1>
                    <Song>{props.songName}</Song>
                    {props.artistName}
                </Content1>
                <Content2>
                    {props.type == 'song' ? (
                        <Count>{props.count}</Count>) : ''}
                </Content2>
            </Wrapper>
        </Container>
    );
}

export default List;
