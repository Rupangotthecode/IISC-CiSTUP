import React from 'react'
import './FirstPage.css'
import { Radio, RadioGroup, Stack, Heading, Button } from '@chakra-ui/react'
import greetVid from '../../assets/greet-bg.mp4'
import {Helmet} from 'react-helmet'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const FirstPage = () => {

  const navigate = useNavigate()

  const [value1,setvalue1] = useState('')
  const [db_trigger,setdb_trigger]=useState(true)
  const [value2,setvalue2] = useState('')

  const handleChange1  = (e) => {
    setvalue1(e.target.value)
    if(value1=='' || value2==''){
      setdb_trigger(true)
    }
    else{
      setdb_trigger(false)
    }
  
  }

  const handleChange2  = (e) => {
    setvalue2(e.target.value)
    if(value1=='' || value2==''){
      setdb_trigger(true)
    }
    else{
      setdb_trigger(false)
    }
    
  }

  const handleClick = () =>{
    navigate('/secondpage', {state: {data:{val1: value1, val2: value2 }}})
  }


  return (
    <div className='FP-main-container'> 
    
      <Helmet>
        <title>
          Respondent Travel Profile
        </title>
      </Helmet>
      <div className="greeting-section">
      <video className='greet-vid' autoPlay loop muted>
        <source src={greetVid} type='video/mp4' />
      </video>
        <div className="greeting-content">
          <Heading as='h1' size='2xl' noOfLines={3} width={'80%'} className='greeting-header'>
            Hello Traveller! <br/>Mind giving us a fragment of your time?
          </Heading>
          <Heading as='h3' size='lg' noOfLines={5} width={'80%'} className='greeting-body'>
            Answer these 2 questions to help us find you the most optimal and least polluting solution for your daily route to your workplace.
          </Heading>
        </div>
      </div>
      <div className="question-panel">
        
        <div className="question-1">
          <div className="question-1-heading">
            <Heading as='h3' size='xl' noOfLines={5} width={'80%'} className='q-title' fontWeight='700'>Question 1</Heading>
            <Heading as='h3' size='md' noOfLines={5} width={'80%'} className='q-content' fontWeight='500'>What is your most frequently used means of travel from your home to work location?</Heading>
          </div>
          <div className="question-1-options">
            <RadioGroup onClick={handleChange1} value={value1}>
              <Stack direction='column' className='q-options' fontWeight='500'>
                <Radio value='Bus' colorScheme='green' borderColor='green'>Bus</Radio>
                <Radio value='Metro'colorScheme='green' borderColor='green'>Metro</Radio>
                <Radio value='Own_Two_wheeler' colorScheme='green' borderColor='green'>Own Two Wheeler</Radio>
                <Radio value='Own_Car' colorScheme='green' borderColor='green'>Own Car</Radio>
                <Radio value='Walk-Bicycle' colorScheme='green' borderColor='green'>Walk/Bicycle</Radio>
                <Radio value='Auto' colorScheme='green' borderColor='green'>Auto</Radio>
                <Radio value='App_based' colorScheme='green' borderColor='green'>App based ride hailing cab services including Ola/Uber</Radio>
              </Stack>
              
            </RadioGroup>
            
          </div>
          
        </div>
        <div className="question-2" >
          <div className="question-2-heading">
            <Heading as='h3' size='xl' noOfLines={5} width={'80%'} className='q-title' fontWeight='700'>Question 2</Heading>
            <Heading as='h3' size='md' noOfLines={5} width={'80%'} className='q-content' fontWeight='500'>What is the total distance between your home and workplace?</Heading>
          </div>
          <div className="question-2-options">
            <RadioGroup onClick={handleChange2} value={value2}>
              <Stack direction='column' className='q-options' fontWeight='500'>
                <Radio value='<5' colorScheme='green' borderColor='green'>{`< 5 km`}</Radio>
                <Radio value='5-10'colorScheme='green' borderColor='green'>{`5 - 10 km`}</Radio>
                <Radio value='10-15' colorScheme='green' borderColor='green'>{`10 - 15 km`}</Radio>
                <Radio value='15-20' colorScheme='green' borderColor='green'>{`15 - 20 km`}</Radio>
                <Radio value='20-25' colorScheme='green' borderColor='green'>{`20 - 25 km`}</Radio>
                <Radio value='>25' colorScheme='green' borderColor='green'>{`> 25 km`}</Radio>
              </Stack>
              
            </RadioGroup>
          </div> 
        </div>
        <Button
            colorScheme='green'
            variant='solid'
            isDisabled={db_trigger}
            className='submit-button'
            onClick={handleClick}
          >Submit</Button>
        
      </div>
    </div>
  )
}

export default FirstPage
