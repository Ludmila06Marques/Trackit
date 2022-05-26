import styled from "styled-components"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Displaying from "./Displaying"
import CreateHabit from "./CreateHabit"
import {useState , useEffect} from "react"
import NewHabit from "./NewHabit"
import axios from "axios"






export default function Habits({token , hid , setHid , setNothing,nothing , hidHabit , setHidHabit , setNewHabit , newHabit , setSelectedDay , selectedDay }){
    console.log(token)
    
    function addHabit(){
        setHid("nothing")
    
    }




    return(
        <>
        <Footer/>
            <ContentUp>
            <PersonalHabits>Meus habitos</PersonalHabits>
            <Icon onClick={addHabit} ><ion-icon  name="add-outline"></ion-icon></Icon>
            </ContentUp>
            {/* Se nao tiver nenhum habito adicionado */}

            <Displaying>
                 {/* Quando clicar no + esse componente NewHabit tem que aparecer */}
                <CreateHabitWrapper className={hid}>
                    <CreateHabit setHid={setHid} hid={hid} setNothing={setNothing} setHidHabit={setHidHabit} setNewHabit={setNewHabit} newHabit={newHabit} setSelectedDay={setSelectedDay} selectedDay={selectedDay} token={token} />
                </CreateHabitWrapper>
                <NoHabits className={nothing}>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </NoHabits>
                <NewHabit hidHabit={hidHabit} newHabit={newHabit} setNewHabit={setNewHabit} selectedDay={selectedDay}/>
               
               
            </Displaying>

            
        <Navbar/>
        </>
    )
}
const CreateHabitWrapper= styled.div`

`

const ContentUp = styled.div`
width: 100%;
height: 70px;
margin-top: 70px;
display:  flex;
justify-content: space-between;
align-items: center;
padding: 20px;

`
const PersonalHabits = styled.h1`
font-size:23px;
color: #126BA5;

`
const Icon = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 35px;
background-color: 
#52B6FF;
border-radius: 5px;
color: #FFFFFF;
`
const NoHabits=styled.h3`
font-size: 20px;
color: #666666;


`