import React from 'react';
import {useState} from 'react';

function TodoList() {
    const [activity,setActivity] = useState("");
    const [listData , setlistData] = useState([]);
    function addActivity(){
        // setlistData([...listData,activity]);        //this logic is not working properly because of asynchronous
        // console.log(listData);

        setlistData(listData=>{
            const updatedListData = [...listData,activity];
            // console.log(updatedListData);
            setActivity('');
            return updatedListData;
        })
    }
    function removeActivity(i){
        const updatedListData = listData.filter((elem,id)=>{
            return i!=id;
        })
        setlistData(updatedListData);
    }
    function removeall(){
        setlistData([]);
    }
  return (
    <div className="container">
        <div className="header">TODO LIST</div>
        <input type='text' value={activity} placeholder='Add activity..' onChange={(e) =>setActivity(e.target.value)}/>
        <button onClick={addActivity}>ADD</button>
        <p className="List-heading"> Here is your List</p>
        {listData!=[] && listData.map((data,i)=>{
            return (
                <>
                    <p key={i}>
                        <div className="listData">{data}</div>
                        <div><button className="btn-position" onClick={()=>removeActivity(i)}>remove</button></div>
                        
                    </p>
                </>
            );
        })}
        {listData.length>=1 && <button onClick={removeall}>removeAll</button>}
        
    </div>
  )
}

export default TodoList
