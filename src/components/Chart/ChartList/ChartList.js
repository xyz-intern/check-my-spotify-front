const ChartList = (props) => {
    return (
        <div>
            <div>rank: {props.rank}</div>
            <div>artist: {props.artist}</div>
            {props.type == 'song' ? (<div>songName: {props.songName}</div>) : ''}
            <img src={props.imageUri}></img>
        </div>
    )
}
export default ChartList