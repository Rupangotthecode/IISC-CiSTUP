import React from 'react'
import { Heading, Button } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import './Leftbar.css'

const Leftbar = (props) => {
  return (
    <div className='base-container'>
      <div className="leftbar-head">
        <Heading size='xl' fontWeight='bold'>Your Selections:</Heading>
      </div>
      <div className="ques-1">
        <div1 className="ques1-head">
          <Heading size='lg' fontWeight='medium'>Question 1</Heading>
        </div1>
        <div1 className="ques1-q">
          <Heading size='md' fontWeight='normal'>What is your most frequently used means of travel from your home to work location?</Heading>
        </div1>
        <div1 className="ques1-ans">
          <Heading size='md' fontWeight='medium'>Your selection: {props.val1}</Heading>
        </div1>
      </div>
      <div className="ques-2">
      <div1 className="ques2-head">
          <Heading size='lg' fontWeight='medium'>Question 2</Heading>
        </div1>
        <div1 className="ques2-q">
          <Heading size='md' fontWeight='normal'>What is the total distance between your home and workplace?</Heading>
        </div1>
        <div1 className="ques2-ans">
          <Heading size='md' fontWeight='medium'>Your selection: {props.val2}</Heading>
        </div1>
      </div>
      <div className="return">
        <Heading size='lg' fontWeight='bold'>Incorrect selections?</Heading>
        <Heading size='md' fontWeight='normal'>No worries, Go back and change it!</Heading>
        <div className="return-button">
          <Button colorScheme='green'><Link to='/'>Previous Page</Link></Button>
        </div>
      </div>
      
    </div>
  )
}

export default Leftbar

