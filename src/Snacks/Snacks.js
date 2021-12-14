import React, { useEffect, useState } from 'react';

const Snacks = () => {
    const [milktea, setMilktea] = useState([])
    useEffect(()=>{
        fetch('./milktea.json')
        .then(req=>req.json())
        .then(data=>setMilktea(data.snacks))
    },[])
    return (
        <div>
            <div className='container'>
                
              <table className='table table-striped table-hover'> 
                  <thead>
                     <tr>
                        <th><div className='title'>
                            <h3>Snacks</h3>
                        </div></th>
                        <th></th>
                    </tr> 
                  </thead>
                  <tbody>
                  {
                      milktea.map(m=><tr>
                          <td>{m.name}</td>
                          <td>{m.mPrice}</td>
                          </tr>)
                  }
                  </tbody>
              </table>
            </div>
        </div>
    );
};

export default Snacks;