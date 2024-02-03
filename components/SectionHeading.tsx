import React from 'react'

const SectionHeading = ({title,subtitle}:{title:string,subtitle:string}) => {
  return (
    <div className='dark:bg-stone-950 max-w-xl mx-auto mb-16 text-center'>
      <h2 className='dark:text-peach text-grey-700 mb-2'>{title}</h2>
      <p className='dark:text-peach text-grey-600'>{subtitle}</p>
    </div>
  )
}

export default SectionHeading
