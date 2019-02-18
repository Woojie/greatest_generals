import React from 'react'

/*
* Throws This Page if you try and access an url @params that does not exist
*/

const PageDoesNotExist = () => (
  <div className="notfound-text" data-test="notfound-component">
    <h1>404: Page does Not Exist</h1>
  </div>
)

export default PageDoesNotExist