import React, { useState, useEffect, Suspense, useRef } from 'react'
import axios from 'axios';
import SkeletonCard from './SkeletonCard';

const Data = React.lazy(() => import("./Data.js"))

const View = () => {
  const effectRan = useRef(false);
  const searchRan = useRef(false);

  const [employee, setEmployees] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }

  useEffect(() => {
    console.log("effect ran");
    if (effectRan.current === false) {
      showData();
    }

    return () => {
      effectRan.current = true

    }
  }, []);

  const showData = async () => {
    const result = await axios.get("http://localhost:3003/emp");
    setEmployees(result.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:3003/emp/${id}`)
    showData();
    console.warn("entry deleted");
  };


  const filterData = () => {
    if (searchRan.current === false)
      return searchInput !== "" ? (
        axios.get(`http://localhost:3003/emp?name=${searchInput}`)
          .then((response) => {
            setEmployees(response.data)
          }).catch((err) => console.error("Incorrect Data"))
      ) : (
        showData()
      )
  }

  return (
    <>
      <div className='container'>
        <div className='py-4'>
          <div style={{ padding: 10, display: "flex" }}>

            <input className="form-control sm-3"
              autoFocus
              type='text'
              autoComplete='off'
              placeholder='Search here...'
              onChange={handleSearch}
            />
            &nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary mr-2" onClick={filterData}>
              Search
            </button>

          </div>

          <Suspense fallback={<SkeletonCard />}>
            <Data key={employee.id} item={employee} deleteEmployee={deleteEmployee} />
          </Suspense>

        </div>

      </div>
    </>
  );
};



export default View
