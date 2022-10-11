import React, { useState, useEffect, useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios';
import '../App.css'
import { Await, json } from 'react-router-dom';
export const Scroll = () => {

    const effectRan = useRef(false);
    const [employee, setEmployees] = useState([]);
    const [limit, setLimit] = useState(15);
    const [hasMore, setHashMore] = useState(true);

    var data;
    // page=0;

    useEffect(() => {
        console.log("effect ran");
        if (effectRan.current === false) {
            showData();
        }

        return () => {
            effectRan.current = true

        }
    });

    // const showData = async  () => {
    //     if(employee.length<200)
    //     {
    //         await setTimeout(() => {
    //             const result =  axios.get("http://localhost:3003/emp"
    //             , {
    //                 params: {
    //                     _limit: limit
    //                 }
    //             });
    //         setEmployees(result.data);
    //         }, 5000);
    //     } else 
    //     {
    //         setHashMore(false)
    //     }
    // };

    console.log(employee.length);

    const showData = async () => {
        console.log("onscrolled called");
        setLimit(prevState => prevState + 10)
        const result = await axios.get("http://localhost:3003/emp"
            , {
                params: {
                    _limit: limit
                }
            });
        setEmployees(result.data);
    };

    let d =JSON.parse(employee)
    console.log(d);
    return (
        <div className='scroll' onScroll={showData}>
            {
                employee &&

                <select name='data' title='data'>
                    <InfiniteScroll
                        dataLength={employee.length}
                        hasMore={hasMore}
                        loader={<option>loading...</option>}
                    >
                        <option>Select</option>
                        {
                            employee && employee.map((emp, index) =>
                                <option key={index} value={emp.name}>{emp.name}</option>
                            )
                        }
                    </InfiniteScroll>
                </select>
            }


        </div >
    )
}
