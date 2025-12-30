import React, { useState } from "react";

function A() {
  let [count, setCount] = useState(0);
  let [active, setActive] = useState(true);
  let [data, setData] = useState({uname: 'admin', pass: 'password'})
  return (
    <div>
      <h2 className={active ? '': 'hidden'}>useState Hook {count}</h2>
      <button
        type="button"
        className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
        onClick={() => setCount(count + 1)}
      >
        ++
      </button>
      <button
        type="button"
        className="text-white bg-linear-to-r from-purple-500 to-pink-500 hover:bg-linear-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
        onClick={() => setCount(count - 1)}
      >
        --
      </button>

      <button
        type="button"
        className="text-white bg-linear-to-br from-green-400 to-blue-600 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5" onClick={()=>setActive(!active)}
      >
        Toggle
      </button>
      <p>{data.uname} { data.pass}</p>
    </div>
  );
}

export default A;
