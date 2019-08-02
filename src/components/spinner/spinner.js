import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className='spinner'>
      <div className="lds-css ng-scope">
        <div className="lds-double-ring">
          <div />
          <div />
          <div>
            <div />
          </div>
          <div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
