import React from 'react'
import Button from './Button'

const list = ["All", "Gaming", "Songs", "Soccer", "Cricket", "Cooking", "Valentines", "News","Podcast","Dance","History","Javascript","Pop Music"];

const ButtonList = () => {
  return (
    <div className='flex gap-2 justify-center items-center'>
      {
        list.map((item) => {

          return <div key={item}>
            <Button name={item} />
          </div>
        })
      }
    </div>
  )
}

export default ButtonList
