import React from 'react'
import {Link} from 'react-router-dom'

const Footerhomepage=()=>{
    return(
        <>
            <div className='Footercontainer'>
                <div className='Footercontainerchild'>
                      <span className='footerlogo'> 
                            <div className='logofooter'> <h3 className='logotext'> Blog Website</h3> </div>
                      </span>
                      <span className='usefullinks'> <h4> Useful Links </h4>
                            <Link to='/blog' className='use'> Blog </Link><br/>
                            <Link to='/contact' className='use'> Contact</Link>
                      </span>
                      <span className='footeraboutus'> <h4>About us</h4>
                                <span> Address : </span><br/>
                                <span> Phone Number :</span>
                      </span>
                </div>
            </div>
            <div className='Copyright'>
            <p> Copyright © 2022 Company Name </p>
            </div>
        </>    
    )
}

export default Footerhomepage