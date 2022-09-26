import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonCard() {
    return (
        <>
            <section>
                <table className="table border shadow">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Employee Name</th>
                            <th scope="col">Employee Age</th>
                            <th scope="col">Employee Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                </table>
                    <Skeleton count={7} height={25}/>
            </section>
        </>
    )
}

export default SkeletonCard
