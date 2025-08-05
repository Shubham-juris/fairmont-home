import React from 'react'
import ProjectShowcase from '../components/gallery/ProjectShowcase'
import InteriorHighlights from '../components/gallery/InteriorHighlights'
import ArchitectureDesigns from '../components/gallery/ArchitectureDesigns'
import RecentDevelopments from '../components/gallery/RecentDevelopments'
import BeforeAfter from '../components/gallery/BeforeAfter'

const GalleryPage = () => {
  return (
    <>
   <ProjectShowcase/>
   <InteriorHighlights/>
   <ArchitectureDesigns/>
   <RecentDevelopments/>
   <BeforeAfter/>
    </>
  )
}

export default GalleryPage
