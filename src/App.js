import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Nav/Sidebar';
import Navbar from './components/Nav/Navbar';
import './assets/dist/css/main.css';
import Card from './components/Cards/Card';
import Modal from './components/Modal/Modal';
import { useState } from 'react';

function App() {
  const [submit, setSubmit] = useState(false);
  const [isModalVisible, setisModalVisible] = useState(false);
    function submitHandler (){
        setisModalVisible(true);
        console.log(isModalVisible);

        // if (!submit) {
        //     setSubmit(true);
        //     setTimeout(() => {
        //         setSubmit(false);
        //     }, 2000);
            
        // }

    }

    const closeModalHandler = () => {
      setisModalVisible(false);
      console.log(isModalVisible);
    }
  const modalHandler = () => {
  }
  return (
    <div>
      <Navbar isFixed="true"></Navbar>
      <div className='f-row'>
        <Sidebar></Sidebar>
        <div className='container_mg'>
        <Card modalState={isModalVisible}>
        <label htmlFor="user" className="pbmg1" tabIndex={-1}>Usuario</label>
                <input type="text" name="user" placeholder="Ingrese su usuario" readOnly={false} tabIndex={1}/>
                <label htmlFor="password" className="pbmg1" tabIndex={-1}>Usuario</label>
                <select name="documento" id="documento" tabIndex={2}>
                    <option value="cedula">Cédula</option>
                    <option value="ruc">R.U.C</option>
                </select>
                <button className="btn_mg btn_mg__primary" tabIndex={3} disabled={submit} onClick={submitHandler}>Continuar</button>
                <button className="btn_mg btn_mg__secondary" tabIndex={4} disabled={submit} onClick={closeModalHandler}>Continuar</button>
        </Card>
        <table>
          <thead>
          <tr>
              <th>Dato 1</th>
              <th>Dato 1</th>
              <th>Dato 3</th>
              <th>Dato 4</th>
              <th>Dato 4</th>
          </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Valor</td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </td>
                  <td>Valor</td>
                  <td>Valor</td>
                  <td>Valor</td>
              </tr>
              <tr>
                  <td>Valor</td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </td>
                  <td>Valor</td>
                  <td>Valor</td>
                  <td>Valor</td>
              </tr>

          </tbody>
        </table>
        </div>
      </div>
      <Modal modalIsVisible={isModalVisible}>
            <button className='btn-mego' onClick={closeModalHandler}>Guardar</button>
          </Modal>
    </div>
  );
}

export default App;
