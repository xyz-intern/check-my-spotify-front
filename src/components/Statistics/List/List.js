function List(props) {
    return (
        <div>
            <div>songId: {props.id}</div>
            <div>artistName: {props.artistName}</div>
            <img src={props.imageUri}></img>
            <div>albumName: {props.albumName}</div>
            <div>count: {props.count}</div>
        </div>
    );
}

export default List;
