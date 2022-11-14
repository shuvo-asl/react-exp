import React,{ useState } from 'react';
import { Container } from 'react-bootstrap';
import Square from '../components/home/Square';

const Home = (props) => {
    const defaultStatus = "Simple React Games";
    const [status,setStatus] = useState(defaultStatus);
    const [isOpen,setIsOpen] = useState(false);
    const [getPoint, setPoint] = useState(0);
    const title = props.title || "Mock Exam";

    const buttonToggling = ()=>{
      setIsOpen(!isOpen)
      document.querySelector("#inputField").value="";
    }
    
    document.title = title;
    
    const receivePoint = (point) => {
        setPoint(getPoint+point)
    }
  return (
    <Container>
        <div className='row m-2 border  border-md border-primary p-1'>
            <div className='status text-center'>{status}</div>
            <div className='col-2 offset-4'>
              <div className={getPoint != null ? 'fw-bold ms-2':'d-none'}>You have {getPoint} Points</div>
              <div className='board-row'>
                <Square receivePoint={receivePoint} value="1"/>
                <Square receivePoint={receivePoint} value="2"/>
                <Square receivePoint={receivePoint} value="3"/>
              </div>
              <div className='board-row'>
                <Square receivePoint={receivePoint} value="4"/>
                <Square receivePoint={receivePoint} value="5"/>
                <Square receivePoint={receivePoint} value="6"/>
              </div>
              <div className='board-row'>
                <Square receivePoint={receivePoint} value="7"/>
                <Square receivePoint={receivePoint} value="8"/>
                <Square receivePoint={receivePoint} value="9"/>
              </div>
            </div>
            <div className='col-2'>
              <button type='button' className='btn btn-success mt-2' onClick={()=>{buttonToggling()}}>{!isOpen?"Click For Change Title":"Close Input Field"}</button>
              <div className={isOpen?"inputSection":"d-none"}>
                <input placeholder='Write your own title' className='form-control' id='inputField' type="text" onKeyUp={(e)=>{setStatus(e.target.value)}}/>
              </div>
            </div>

            <div className={status === defaultStatus ? "col-2 d-none":"col-2"}>
              <button type='button' className='btn btn-success mt-2' onClick={()=>{setStatus(defaultStatus)}}>Set Default Status</button>
            </div>
        </div>
    </Container>
  )
}

export default Home