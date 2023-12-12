import styled from "styled-components"

const App = styled.div`
    display: inline-block;
`
const Card = styled.div`
     width: 400px;
     height: 600px;
     position: relative;
     border-radius: 30px;
     margin: 36px;
     opacity: 0.8;
     overflow: hidden;
`

const Image = styled.img`
    width: 400px;
    height: 600px;
    border-radius: 30px;
    object-fit: cover;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: -1;
`

const Rank = styled.div`
    font-size: 50px;
    position: absolute;
    color: white;
    font-size: 60px;
    padding: 20px;
    bottom: 20px;
    right: 20px;
    font-weight: 900;
    -webkit-text-stroke-widths: 2px;
    z-index: -1;
    text-shadow: 4px 4px 4px black;
`

const Artist = styled.div`
    font-size: 25px;
    position: absolute;
    color: white;
    font-size: 50px;
    padding: 20px;
    font-weight: 900;
    -webkit-text-stroke-width: 2px;
    text-shadow: 4px 4px 4px black;
    z-index: -1;
`


const Content = styled.div`
    display: flex;
    flex-direction: column;
`

const ChartList = ({popularArtist}) => {
    return (
        <App>
            <Card>
                    <Content>
                        <Image src={popularArtist.imageUri}></Image>
                        <Artist>{popularArtist.artist}</Artist>
                        <Rank># {popularArtist.rank}</Rank>
                    </Content>
                </Card>
        </App>
    )
}
export default ChartList