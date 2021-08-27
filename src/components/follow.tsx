import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

import { AppState } from '../reducers/rootReducer';
import { fetchUserList } from '../actions/followActions'
import { FollowState } from '../reducers/reducerConstants'

const WhoToFollow = (props: mapDispatchToPropsType) => {
    const userListData: FollowState = useSelector((state: AppState) => state.followReducer);
    const [start] = useState<number>(0);
    const [i, seti] = useState<number>(0);
    
    useEffect(() => {
        props.fetchUserList();
    },[start]);

    const handleRefresh = () => {
        seti(i+3);
    } 
    const listItems = (list:any) => list.map((item: any, index:number) =>
        <div key={index}>
            <li>{item.login}</li>
            <p>x</p>
        </div>

    );
    const show = () => {
        if(userListData.error) {
            return <div>Error: {userListData.error}</div>;
        }
        else if (!userListData.isLoaded) {
            return <div>Loading...</div>;
        } 
        else{
            let list = userListData.data;
            let displayList = list?.slice(i,i+3);
            return (
            <ul>{listItems(displayList)}</ul>
        )}
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

export default connect(null,mapDispatchToProps)(WhoToFollow);
