import { useRef } from 'react'
import api from '../../services/api'

import {
  Title,
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  Button,
  Input,
  InputLabel
} from "./styles"


import UsersImage from '../../assets/users.png'


function Home() {  

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


async function registerNewUser(){
 
const data = await api.post('/usuarios',{
  email: inputEmail.current.value,
  age: parseInt(inputAge.current.value),
  name: inputName.current.value
})

}
  



  return (
    <Container>

      <TopBackground>

        <img src={UsersImage} alt='imagem-usuarios'  />

      </TopBackground>

      <Form>
        <Title>Cadastra Usuarios</Title>
        <ContainerInputs>

       

            <div>
              <InputLabel>
                Nome <span> *</span>
              </InputLabel>
              <Input type="text" placeholder="nome de Usuario"  ref={inputName} />
            </div>

            <div>
              <InputLabel>
                Edade<span> *</span>
              </InputLabel>
              <Input type="number" placeholder="Edade de Usuario" ref={inputAge}/>
            </div>



        </ContainerInputs>


        <div style={{width:"100%"}}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="e-mail" placeholder="e-mail de Usuario" ref={inputEmail} />
        </div>



        <Button type='button' onClick={registerNewUser}>Cadastra Usuario</Button>
      </Form>


    </Container >



  )
}


export default Home