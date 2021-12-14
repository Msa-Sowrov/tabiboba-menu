import React, { useEffect, useState } from 'react';

const Latte = () => {
    const [latte, setLatte] = useState([])
    useEffect(()=>{
        fetch('./milktea.json')
        .then(req=>req.json())
        .then(data=>setLatte(data.latte))
    },[])
    return (
           <div className='container'>
           <table className=''> 
                  <thead>
                     <tr>
                        <th><div className='title'>
                            <h3>Latte Selection</h3>
                        </div></th>
                        <th>M</th>
                        <th>L</th>
                    </tr> 
                  </thead>
                  <tbody>
                  {
                      latte.map(m=><tr>
                          <td>{m.name}</td>
                          <td>{m.mPrice}</td>
                          <td>{m.lPrice}</td>
                          </tr>)
                  }
                  </tbody>
              </table> 
        </div>
    );
};

export default Latte;