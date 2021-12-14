import React, { useEffect, useState } from 'react';


const Orginal = () => {
        const [milktea, setMilktea] = useState([])
        useEffect(()=>{
            fetch('./milktea.json')
            .then(req=>req.json())
            .then(data=>setMilktea(data.orginal))
        },[])
        return (
            <div>
                <div className='container'>
                    
                  <table className='table table-striped table-hover'> 
                      <thead>
                         <tr>
                            <th><div className='title'>
                                <h3>Orginal tea Selections</h3>
                            </div></th>
                            <th>M</th>
                            <th>L</th>
                        </tr> 
                      </thead>
                      <tbody>
                      {
                          milktea.map(m=><tr>
                              <td>{m.name}</td>
                              <td>{m.mPrice}</td>
                              <td>{m.lPrice}</td>
                              </tr>)
                      }
                      </tbody>
                  </table>
                </div>
            </div>
        );
};

export default Orginal;