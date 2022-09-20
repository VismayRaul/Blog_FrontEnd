import React from 'react'

const Editprofile = () => {
  return (
    <div className="edit1">
        {/* <h1>Editprofile</h1> */}


<div className="wrapper ">
  <div className="profile">
    <div className="content">
      <h1>Edit Profile</h1>
      <form action="">

        
        <fieldset>
          <div className="grid-35">
            <label htmlFor="fname">First Name</label>
          </div>
          <div className="grid-65">
            <input type="text" id="fname" tabindex="1" />
          </div>
        </fieldset>
        <fieldset>
          <div className="grid-35">
            <label htmlFor="lname">Last Name</label>
          </div>
          <div className="grid-65">
            <input type="text" id="lname" tabindex="2" />
          </div>
        </fieldset>
        
  
        {/* <fieldset>
          <div className="grid-35">
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="grid-65">
            <input type="email" id="email" tabindex="6" />
          </div>
        </fieldset> */}
        
        <fieldset>
          <input type="reset" className="Btn cancel" value="Cancel" />
          <input type="submit" className="Btn" value="Save Changes" />
        </fieldset>

      </form>
    </div>
  </div>
</div>











    </div>
  )
}

export default Editprofile;