import React, { useEffect, useRef, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import loadOptions from "./LoadOption";

const ScrollApp = () => {
    const [value, onChange] = useState();
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            ref.current.onMenuClose();
        }
    }, [value]);

    return (
        <div>
            <h1>react-select-async-paginate</h1>
            <h2>Multi example</h2>


            <div>
            <AsyncPaginate
                selectRef={ref}
                value={value}
                loadOptions={loadOptions}
                isMulti
                closeMenuOnSelect={false}
                onChange={onChange}
            />
            </div>

        </div>
    );
};

export default ScrollApp;

