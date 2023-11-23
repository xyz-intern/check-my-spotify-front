function List(props) {
    return (
        <div>
            {props.type != 'artist' ? (
            <div> 
                <div>songId: {props.id}</div>
                <div>artistName: {props.artistName}</div>
                <img src={props.imageUri}></img>
                <div>albumName: {props.albumName}</div>
                <div>count: {props.count}</div>
                <div>---------------------</div> 
            </div>) : (
            <div>
                <div>count: {props.count}</div>
                <div>artist: {props.artistName}</div>
            </div>    
            )}
        </div>
    );
}

export default List;
