import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

import '../css/follow.css';
import { AppState } from '../reducers/rootReducer';
import { fetchUserList } from '../actions/followActions'
import { FollowState } from '../reducers/reducerConstants'


const WhoToFollow = (props: mapDispatchToPropsType) => {
    const userListData: FollowState = useSelector((state: AppState) => state.followReducer);
    const [start] = useState<number>(0);
    const [userIndex, setUserIndex] = useState<number>(0);
    const [remove, setremove] = useState<boolean>(true);
    
    useEffect(() => {
        props.fetchUserList();
    },[start]);

    useEffect(() => {
    }, [remove])

    const handleRefresh = () => {
        setUserIndex((userIndex+3)%(userListData.data.length-3));
    } 

    const handleCross = (removeIndex:number, event:MouseEvent) => {
        event.preventDefault();
        let length = userListData.data.length-1;
        [userListData.data[removeIndex], userListData.data[length]] = [userListData.data[length], userListData.data[removeIndex]]
        userListData.data.splice(length);
        setremove(!remove);
    }

    const listItems = (list:any) => list.map((item: any, index:number) =>
        <div className='who-to-follow-list' key={userIndex+index}>
            <img src={item.avatar_url} height='50' width='50' alt='avatar'></img>
            <div>
                <div >{item.login}</div>
                <a href={item.html_url}>{item.html_url}</a>
            </div>
            <div onClick={(event:any) => handleCross(userIndex+index, event)}>X</div>
        </div>
    )

    const show = () => {
        if(userListData.error) {
            return <div>Error: {userListData.error}</div>;
        }
        else if (!userListData.isLoaded) {
            return <div>Loading...</div>;
        } 
        else if(userListData.data.length>0){
            let list = userListData.data;
            let displayList = list.slice(userIndex,userIndex+3);
            return (
            <ul>{listItems(displayList)}</ul>
        )}
        else if(userListData.data.length === 0){
            return (
                <h2>No more users to display.</h2>
            )
        }
    }
    return(
        <div>
            <p>Who To Follow</p>
            <div onClick={handleRefresh}>Refresh</div>
            <div>{show()}</div>
        </div>
    )
}

interface mapDispatchToPropsType {
  fetchUserList: () =>  void
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchUserList: () => dispatch(fetchUserList())
  }
}

export default connect(null, mapDispatchToProps)(WhoToFollow);
