import React, { useState } from "react";

import './App.css';
import { userList } from "./constant";

function App() {

   const [list,setList]=useState(userList);
   const [user,setUser]=useState(null);
   const [input,setInput]=useState('');
   const onselectUser=(item)=>{
    setUser(item)
   }

   const onSearch=(e)=>{
    let {value}=e.target;
    setInput(value);
    let arr=userList.filter((item)=>{
      return item.firstName.toLowerCase().includes(value.toLowerCase())
    })
    setList(arr)
   }

  
  return (
        
    <main>

        <div id="table-section">

            <form action="/">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" alt="Search Icon" />
                <input type="text" placeholder="Enter something" name="search-box" id="search-box" value={input} onChange={onSearch} />
            </form>

            <div id="table-wrapper">

                <div id="table-headers">
                    <table>
                        <thead>
                            <tr>
                                <th className="column1">Id</th>
                                <th className="column2">FirstName</th>
                                <th className="column3">LastName</th>
                                <th className="column4">Email</th>
                                <th className="column5">Phone</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div id="table-data">
                    <table>
                        <tbody>{list.map((item)=>{

                          return(

                            <tr key={item.id} className={`${"data-row"} ${user!= null&&user.id===item.id&&"active"}`} 
                             onClick={()=>{onselectUser(item)}}
                             >
                            <td class="column1">{item.id}</td>
                            <td class="column2">{item.firstName}</td>
                            <td class="column3">{item.lastName}</td>
                            <td class="column4">{item.email}</td>
                            <td class="column5">{item.phone}</td>
                            </tr>

                          )

                        })}

                           
                           
                        </tbody>
                    </table>
                </div>

            </div>

        </div>


        

        <div id="info-wrapper">
            <h1>Details</h1>
            <p>Click on a table item to get detailed information</p>
            {
            user!=null &&(
            <div id="info-content">
                <div><b>User selected:</b>{`${user.firstName} ${user.lastName}`}</div>
                <div>
                    <b>Description: </b>
                    <textarea cols="50" rows="5" value= {user. description}>
                      
                    </textarea>
                </div>
                <div><b>Address:</b>{user.address.streetAddress}</div>
                <div><b>City:</b>{user.address.city}</div>
                <div><b>State:</b>{user.address.state}</div>
                <div><b>Zip:</b>{user.address.zip}</div>
            </div>
            )
            }
        </div>

    </main>
  )
                
}

export default App;


