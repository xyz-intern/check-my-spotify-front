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
     opacity: 0.6;
     overflow: hidden;
`

const Image = styled.img`
    width: 400px;
    height: 600px;
    opacity: 0.9;
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
    -webkit-text-stroke: 2px;
    z-index: -1;
`

const Artist = styled.div`
    font-size: 25px;
    position: absolute;
    color: white;
    font-size: 50px;
    padding: 20px;
    -webkit-text-stroke: 2px;
    z-index: -1;
`


const Content = styled.div`
    display: flex;
    flex-direction: column;
`

const ChartList = (props) => {
    return (
        <App>
            <Card>
                    <Content>
                        {props.type === 'song' ? (<div>songName: {props.songName}</div>) : ''}
                        <Image src={props.imageUri}></Image>
                        <Artist>{props.artist}</Artist>
                        <Rank># {props.rank}</Rank>
                    </Content>
                </Card>
        </App>
    )
}
export default ChartList