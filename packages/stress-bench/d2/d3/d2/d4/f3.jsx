
  import React, { useContext, useEffect } from 'react'
  import I from '@iconify-icons/material-symbols/tab-recent.js'
  import { Icon } from '@iconify/react/dist/offline';
  
  function Component({ show }) {
  
    return (
      <div className={styles.navbar}>
        
        
				<Icon
					icon={I}
				/>
      </div>
    )
  }
  
  export default Component 
  