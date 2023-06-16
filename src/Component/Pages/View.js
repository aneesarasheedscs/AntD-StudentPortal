import React from 'react'
import Icon from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

const View = ({students,deleteStudent}) => {

  return students.map(student=>(
    
     <tr key={student.name} style={{borderBottom: '1px solid grey'}}>
         <td>{student.name}</td>
         <td>{student.email}</td>
         <td>{student.gender}</td>
         <td>{student.checked}</td>
         <td className='delete-btn' style={{color: "red"}} onClick={()=>deleteStudent(student.name)}>
              <Icon icon={trash} />
         </td>
     </tr>
     
  ))


 
   
}

export default View
