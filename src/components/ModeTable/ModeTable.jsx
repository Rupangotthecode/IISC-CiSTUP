import React from 'react'
import { Heading, RadioGroup, Radio, Stack,Image } from '@chakra-ui/react';
import { useState } from 'react';
import emp_ico from '../../assets/row-6/emp_ico.png'
import full_ico from '../../assets/row-6/full_ico.png'
import stand_ico from '../../assets/row-6/stand_ico.png'
import some_ico from '../../assets/row-6/some_ico.png'
import auto from '../../assets/row-1/auto.png'
import bike from '../../assets/row-1/bike.png'
import biketaxi from '../../assets/row-1/biketaxi.png'
import bus from '../../assets/row-1/bus.png'
import car from '../../assets/row-1/car.png'
import metro from '../../assets/row-1/metro.png'
import taxi from '../../assets/row-1/taxi.png'
import cycle from '../../assets/row-1/cycle.png'
import busStop from '../../assets/row-1/bus-stop.png'
import './ModeTable.css'

const ModeTable = (props) => {

    let str1='';
    let str2='';

    const crowd_json={
        1:{text:"Many seats available", logo:emp_ico},
        2:{text:"Some seats available", logo:some_ico},
        3:{text:"All seats occupied; standing space available",logo:stand_ico},
        4:{text:"Fully crowded or packed",logo:full_ico}
    }

    const serv_json={
        1:{text:"Ordinary"},
        2:{text:"Express Non-AC"},
        3:{text:"Express AC"}
    }

    function checker1(props){
        if(props.data.val1==='Own_Car'){
            str1='mode_8'
            return <Heading className='cell row-1-col-4' size='md'><Radio colorScheme='green' value={props.tabdata['mode_8']}>{props.tabdata['mode_8']}<Image src={row1(props,'mode_8')} boxSize='30px'/></Radio></Heading>
        }
        else if(props.data.val1==='Own_Two_wheeler'){
            str1='mode_9'
            return <Heading className='cell row-1-col-4' size='md'><Radio colorScheme='green' value={props.tabdata['mode_9']}>{props.tabdata['mode_9']}<Image src={row1(props,'mode_9')} boxSize='30px'/></Radio></Heading>
        }
        else{
            
            if((Math.floor(1000*Math.random()))%2==0){
                str1='mode_8'
            }
            else{
                str1='mode_9'
            }
            
            return <Heading className='cell row-1-col-4' size='md'><Radio colorScheme='green' value={props.tabdata[`${str1}`]}>{props.tabdata[`${str1}`]}<Image src={row1(props,`${str1}`)} boxSize='30px'/></Radio></Heading>
        }
    }

    function checker2(props){
        if(props.data.val1==='Auto'){
            str2='mode_7'
            return <Heading className='cell row-1-col-5' size='md'><Radio colorScheme='green' value={props.tabdata['mode_7']}>{props.tabdata['mode_7']}<Image src={row1(props,'mode_7')} boxSize='30px'/></Radio></Heading>
        }
        else if(props.data.val1==='App_based'){
            str2='mode_5'
            return <Heading className='cell row-1-col-5' size='md'><Radio colorScheme='green' value={props.tabdata['mode_5']}>{props.tabdata['mode_5']}<Image src={row1(props,'mode_5')} boxSize='30px'/></Radio></Heading>
        }
        else{
            
            if((Math.floor(1000*Math.random()))%2==0){
                str2='mode_5'
            }
            else{
                str2='mode_7'
            }
            
            return <Heading className='cell row-1-col-5' size='md'><Radio colorScheme='green' value={props.tabdata[`${str2}`]}>{props.tabdata[`${str2}`]}<Image src={row1(props,`${str2}`)} boxSize='30px'/></Radio></Heading>
        }
    }

    function row6t(props,value){
        if(props.tabdata[`${value}.crowd`] == 1){
            
            return crowd_json[1].text
        }
        else if(props.tabdata[`${value}.crowd`] == 2){
            
            return crowd_json[2].text
        }
        else if(props.tabdata[`${value}.crowd`] == 3){
            
            return crowd_json[3].text
        }
        else if(props.tabdata[`${value}.crowd`] == 4){
            
            return crowd_json[4].text
        }
    }
    function row6i(props,value){
        if(props.tabdata[`${value}.crowd`] == 1){
            
            return crowd_json[1].logo
        }
        else if(props.tabdata[`${value}.crowd`] == 2){
            
            return crowd_json[2].logo
        }
        else if(props.tabdata[`${value}.crowd`] == 3){
            
            return crowd_json[3].logo
        }
        else if(props.tabdata[`${value}.crowd`] == 4){
            
            return crowd_json[4].logo
        }
    }

    function row7(props,value){
        if(props.tabdata[`${value}.serv`] == 1){
            
            return serv_json[1].text
        }
        else if(props.tabdata[`${value}.serv`] == 2){
            
            return serv_json[2].text
        }
        else if(props.tabdata[`${value}.serv`] == 3){
            
            return serv_json[3].text
        }
    }

    function row1(props,value){
        if(props.tabdata[`${value}`] == 'Bus Type 1' || props.tabdata[`${value}`] == 'Bus Type 2'){
            
            return bus
        }
        else if(props.tabdata[`${value}`] == 'Metro / Train'){
            
            return metro
        }
        else if(props.tabdata[`${value}`] == 'Ride-hailing Car'){
            
            return taxi
        }
        else if(props.tabdata[`${value}`] == 'Ride-hailing Two-wheeler'){
            
            return biketaxi
        }
        else if(props.tabdata[`${value}`] == 'Auto'){
            
            return auto
        }
        else if(props.tabdata[`${value}`] == 'Own Car'){
            
            return car
        }
        else if(props.tabdata[`${value}`] == 'Own Two-wheeler'){
            
            return bike
        }
        else if(props.tabdata[`${value}`] == 'Walk / Bicycle'){
            
            return cycle
        }

    }
    
  return (
    
    <div className='Base-box'>
        <div className="heading-container">
            <Heading size='xl'>Mode Choice Table</Heading>
        </div>
        <div className="main-table">
                
            <div className="row-1">
                <div className="row-1-heading-container">
                    <Heading className='row-1-heading' size='lg' fontWeight='500'>Vehicle Type</Heading>
                </div>
                <RadioGroup>
                    <Stack direction='row' className='row-1-radio' fontWeight='300' justify='center' spacing='0'>
                        <Heading className='cell row-1-col-1' size='md'><Radio colorScheme='green' value={props.tabdata['mode_1']}>{props.tabdata['mode_1']}<Image src={row1(props,'mode_1')} boxSize='30px'/></Radio></Heading>
                        <Heading className='cell row-1-col-2' size='md'><Radio colorScheme='green' value={props.tabdata['mode_2']}>{props.tabdata['mode_2']}<Image src={row1(props,'mode_2')} boxSize='30px'/></Radio></Heading>
                        <Heading className='cell row-1-col-3' size='md'><Radio colorScheme='green' value={props.tabdata['mode_4']}>{props.tabdata['mode_4']}<Image src={row1(props,'mode_4')} boxSize='30px'/></Radio></Heading>
                        {checker1(props)}
                        {checker2(props)}
                    </Stack>
                </RadioGroup>
            </div>
            <div className="row-2">
                <div className="row-2-heading-container">
                    <Heading className='row-2-heading' size='lg' fontWeight='500'>Total travel time spent outside vehicle(s)</Heading>
                </div>
                <Stack direction='row' className='row-2-radio' fontWeight='300' justify='center' spacing='0'>
                    <Heading className='cell row-2-col-1' size='md'>{props.tabdata[`mode_1.ivtt`]}{props.tabdata[`mode_1.trans`]===0?<Image src={row1(props,'mode_1')} boxSize='30px'/>:<Image src={busStop} boxSize='30px'/>}{props.tabdata[`mode_1.trans`]!==0 && <p>Transfer</p>}</Heading>
                    <Heading className='cell row-2-col-2' size='md'>{props.tabdata[`mode_2.ivtt`]}{props.tabdata[`mode_2.trans`]===0?<Image src={row1(props,'mode_2')} boxSize='30px'/>:<Image src={busStop} boxSize='30px'/>}{props.tabdata[`mode_2.trans`]!==0 && <p>Transfer</p>}</Heading>
                    <Heading className='cell row-2-col-3' size='md'>{props.tabdata[`mode_4.ivtt`]}{<Image src={row1(props,'mode_4')} boxSize='30px'/>}</Heading>
                    <Heading className='cell row-2-col-4' size='md'>{props.tabdata[`${str1}.ivtt`]}{<Image src={row1(props,`${str1}`)} boxSize='30px'/>}</Heading>
                    <Heading className='cell row-2-col-5' size='md'>{props.tabdata[`${str2}.ivtt`]}{<Image src={row1(props,`${str2}`)} boxSize='30px'/>}</Heading>
                </Stack>
            </div>
            <div className="row-3">
                <div className="row-3-heading-container">
                    <Heading className='row-3-heading' size='lg' fontWeight='500'>Total travel time spent while inside the vehicle(s)</Heading>
                </div>
                <Stack direction='row' className='row-3-radio' fontWeight='300' justify='center' spacing='0'>
                    <Heading className='cell row-3-col-1' size='md'>{props.tabdata[`mode_1.waittime`]+props.tabdata[`mode_1.walktime`]}</Heading>
                    <Heading className='cell row-3-col-2' size='md'>{props.tabdata[`mode_2.waittime`]+props.tabdata[`mode_2.walktime`]}</Heading>
                    <Heading className='cell row-3-col-3' size='md'>{props.tabdata[`mode_4.waittime`]+props.tabdata[`mode_4.walktime`]}</Heading>
                    <Heading className='cell row-3-col-4' size='md'>{props.tabdata[`${str1}.waittime`]+props.tabdata[`${str1}.walktime`]}</Heading>
                    <Heading className='cell row-3-col-5' size='md'>{props.tabdata[`${str2}.waittime`]+props.tabdata[`${str2}.walktime`]}</Heading>
                </Stack>
            </div>
            <div className="row-4">
                <div className="row-4-heading-container">
                    <Heading className='row-4-heading' size='lg' fontWeight='500'>Possible delay due to traffic congestion or other uncertainties</Heading>
                </div>
                <Stack direction='row' className='row-4-radio' fontWeight='300' justify='center' spacing='0'>
                    <Heading className='cell row-4-col-1' size='md'>Up to {props.tabdata[`mode_1.tvariab`]} mins or more</Heading>
                    <Heading className='cell row-4-col-2' size='md'>Up to {props.tabdata[`mode_2.tvariab`]} mins or more</Heading>
                    <Heading className='cell row-4-col-3' size='md'>Up to {props.tabdata[`mode_4.tvariab`]} mins or more</Heading>
                    <Heading className='cell row-4-col-4' size='md'>Up to {props.tabdata[`${str1}.tvariab`]} mins or more</Heading>
                    <Heading className='cell row-4-col-5' size='md'>Up to {props.tabdata[`${str2}.tvariab`]} mins or more</Heading>
                </Stack>
            </div>
            <div className="row-5">
                <div className="row-5-heading-container">
                    <Heading className='row-5-heading' size='lg' fontWeight='500'>Total one-way cost of travel</Heading>
                </div>
                <Stack direction='row' className='row-5-radio' fontWeight='300' justify='center' spacing='0'>
                    <Heading className='cell row-5-col-1' size='md'>Rs. {props.tabdata[`mode_1.tcost`]}</Heading>
                    <Heading className='cell row-5-col-2' size='md'>Rs. {props.tabdata[`mode_2.tcost`]}</Heading>
                    <Heading className='cell row-5-col-3' size='md'>Rs. {props.tabdata[`mode_4.tcost`]}</Heading>
                    <Heading className='cell row-5-col-4' size='md'>Rs. {props.tabdata[`${str1}.tcost`]}</Heading>
                    <Heading className='cell row-5-col-5' size='md'>Rs. {props.tabdata[`${str2}.tcost`]}</Heading>
                </Stack>
            </div>
            <div className="row-6">
                <div className="row-6-heading-container">
                    <Heading className='row-6-heading' size='lg' fontWeight='500'>Extent of crowding in the vehicle</Heading>
                </div>
                <Stack direction='row' className='row-6-radio' fontWeight='300' justify='center' spacing='0'>
                    <Heading className='cell row-6-col-1' size='md'>{row6t(props,'mode_1')}<Image src={row6i(props,'mode_1')} boxSize='50px'/></Heading>
                    <Heading className='cell row-6-col-2' size='md'>{row6t(props,'mode_2')}<Image src={row6i(props,'mode_2')} boxSize='50px'/></Heading>
                    <Heading className='cell row-6-col-3' size='md'>{row6t(props,'mode_4')}<Image src={row6i(props,'mode_4')} boxSize='50px'/></Heading>
                    <Heading className='cell row-6-col-2' size='md'></Heading>
                    <Heading className='cell row-6-col-3' size='md'></Heading>
                </Stack>
            </div>
            <div className="row-7">
                <div className="row-7-heading-container">
                    <Heading className='row-7-heading' size='lg' fontWeight='500'>Service Type</Heading>
                </div>
                <Stack direction='row' className='row-7-radio' fontWeight='300' justify='center' spacing='0'>
                    <Heading className='cell row-7-col-1' size='md'>{row7(props,'mode_1')}</Heading>
                    <Heading className='cell row-7-col-2' size='md'>{row7(props,'mode_2')}</Heading>
                    <Heading className='cell row-7-col-1' size='md'></Heading>
                    <Heading className='cell row-7-col-2' size='md'></Heading>
                    <Heading className='cell row-7-col-1' size='md'></Heading>
                </Stack>
            </div>
        </div>
        
    </div>
  )
}

export default ModeTable
