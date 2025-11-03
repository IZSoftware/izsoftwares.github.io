import React from 'react'
import { CaseStudy } from '../../components/carousel/CarouselHead'
import Share from '../../components/share/Share'

function CaseStudyPage() {
  return (
    <div className='main-case-study'>
        <h1 style={{color:'#000'}}>Selected Success Stories from Our 3,600-Project Portfolio</h1>
        <div style={{gap:5}}>
        <CaseStudy/>
        <CaseStudy/>
       
        </div>
        <Share/>
    </div>
  )
}

export default CaseStudyPage;
