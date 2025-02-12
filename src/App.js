import React, { createContext, useContext, useState } from 'react';
import TopForm from './TopForm';
import TaskItems from './TaskItems';

const App = ()=>{

    const [taskItems, setTaskItems] = useState([
        {
            id:1,
            title:"act1",
            done:false
        },
        {
            id:2,
            title:"act2",
            done:false
        },
        {
            id:3,
            title:"act3",
            done:false
        }
    ])

    

    return (
        <div className="container w-100 h-100 p-3">
            <div className="row h-100 justify-content-center align-align-items-start">
                <div className="col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h_fit">
                    <context.Provider value={{taskItems,setTaskItems}}>
                        <TopForm />
                        <TaskItems />
                    </context.Provider>
                </div>
            </div>
        </div>
    ) 
}

export const context = createContext({
     taskItems:[],
     setTaskItems:()=>{}

})
export default App;
