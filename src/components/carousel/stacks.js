import React from 'react'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Aws, cloud } from '../Data/serviceMap';

function Stacks() {
  return (
    <div>
       {/* Databases / data storages */}
       <div> 
          <div className='backend' style={{paddingBottom: 3}}>
            Cloud Databases and Storage
          </div>

          <div className='languages_title'> AWS </div>
          <div className='item_of_language'>
            {Aws.map((item) => (
              <div className='item_group' >

                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <div className='imagg'
                        variant="contained" {...bindTrigger(popupState)}>
                        <img src={item.image} width={55} height={48} alt='nthng'/>
                      </div>
                    
                    </div>
                  )}
                </PopupState>
              </div>
            ))}            
          </div>

         
      </div>

          

    </div>
  )
}

export default Stacks
