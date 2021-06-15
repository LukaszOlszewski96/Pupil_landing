import React from 'react';
import {Counts} from './Counts';
import "./Statistic.css";


function StatisticCounter() {

    return (
       <div className="statistic-box">
           <h1 className="title-statistic">A growing ecosystem</h1>
           <ul className="counts">
                {Counts.map((item, index)=>{
                    return(
                        <il key={index}>
                            <p className={item.className}>{item.number}</p>
                            <p className={item.className}>{item.title}</p>
                        </il>
                    )
                })}
            </ul>
       </div>
    )
}

export default StatisticCounter;
