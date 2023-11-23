import styled from "styled-components"

const App = styled.div`
    background-color: lavender;
    display: inline-block;
`
const Card = styled.div`
     /* white-space: nowrap; */
     width: 400px;
     height: 600px;
     position: relative;
     border-radius: 30px;
     margin: 36px;
     /* padding: 16px; */
     opacity: 0.6;
     overflow: hidden;
     background-color: rgb(28, 15, 19);
`

const Image = styled.img`
    width: 400px;
    height: 600px;
    opacity: 0.7;
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
    /* color: #E2E2E2; */
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
                        {props.type == 'song' ? (<div>songName: {props.songName}</div>) : ''}
                        <Image src={props.imageUri}></Image>
                        <Artist>{props.artist}</Artist>
                        <Rank># {props.rank}</Rank>
                    </Content>
                </Card>
        </App>
    )
}
export default ChartList