import React from 'react'
import {Timeline, TimelineEvent} from 'react-event-timeline'
import './Timeline.css'
import ComputerIcon from '@mui/icons-material/Computer';

function TimeLine() {
  return (
    <div>
            <Timeline
            lineColor='#005EB8'
            >
            <TimelineEvent 
                           createdAt={<div className='timelin-title'>Planning</div>}
                           icon={<ComputerIcon color='#005EB8' fontSize='10px' />}
                           iconColor='#005EB8'
                        >
                            {/* <div>hekkeii</div> */}
                <ul>
                    <li>Document key business processes and how they’re covered with existing software</li>
                    <li>Elicit business needs and concerns</li>
                    <li>Evaluate risks of new software introduction, e.g., impact on business processes, and plan risk mitigation measures.</li>
                    <li>Draw up high-level functional and technical software requirements.</li>
                    <li>Draw up a project roadmap and major milestones</li>
                    <li>Draw up a project roadmap and major milestones.</li>
                    <li>Conduct competition analysis (competitors’ product features, pricing & monetization models, customer feedback analysis, customer acquisition strategy analysis, product efficiencies and drawbacks).</li>
                    <li>Elicit business needs and concerns</li>
                   
                </ul>
            </TimelineEvent>
            <TimelineEvent
               
                createdAt={<div className='timelin-title'>Architecture UI and Ux</div>}
                icon={<ComputerIcon color='#005EB8' fontSize='10px' />}
                iconColor='#005EB8'
            >
                Like  <ul>
                    <li>Document key business processes and how they’re covered with existing software</li>
                    <li>Elicit business needs and concerns</li>
                    <li>Evaluate risks of new software introduction, e.g., impact on business processes, and plan risk mitigation measures.</li>
                    <li>Draw up high-level functional and technical software requirements.</li>
                    <li>Draw up a project roadmap and major milestones</li>
                    <li>Draw up a project roadmap and major milestones.</li>
                    <li>Conduct competition analysis (competitors’ product features, pricing & monetization models, customer feedback analysis, customer acquisition strategy analysis, product efficiencies and drawbacks).</li>
                    <li>Elicit business needs and concerns</li>
                    
                </ul>
            </TimelineEvent>
    </Timeline>
    </div>
  )
}

export default TimeLine