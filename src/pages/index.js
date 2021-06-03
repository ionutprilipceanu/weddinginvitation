import React, * as react from 'react'
import Cards from '..//Components/Cards/Cards'
import StoryCards from '..//Components/Modal/StoryCards'
import NameTitle from '..//Components/NameTitle/NameTitle'


export default class index extends react.Component {

  render() {
    return (
      <div>
        <Cards/>
        <NameTitle />
        <StoryCards />
      </div>
    )
  }
}