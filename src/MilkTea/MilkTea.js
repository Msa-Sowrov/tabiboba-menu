import React, { useEffect, useState } from 'react';
import "./MilkTea.css"
const MilkTea = () => {
    const [milktea, setMilktea] = useState([])
    const [select, setSelect] = useState({})
    useEffect(()=>{
        fetch('./milktea.json')
        .then(req=>req.json())
        .then(data=>setMilktea(data.milktea))
    },[])
    return (
        <div>
            <div className='container'>
                {/* Modal */}
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">{select.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img className='modal-img' src="https://www.honestfoodtalks.com/wp-content/uploads/2021/09/How-to-make-bubble-tea.jpeg" alt="" />
                        <p>{select.details}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
              <table className='table table-striped table-hover'> 
                  <thead>
                     <tr>
                        <th><div className='title'>
                            <h3>MilkTea Selections</h3>
                        </div></th>
                        <th>M</th>
                        <th>L</th>
                    </tr> 
                  </thead>
                  <tbody>
                  {
                      milktea.map(m=><tr onClick={()=>setSelect(m)} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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

export default MilkTea;