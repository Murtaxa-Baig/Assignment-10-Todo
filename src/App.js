import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';

function App() {
  const [student, setStudent] = useState([{ name: "Murtaxa", discription: "I am developer" }])
  const [name, setName] = useState('')
  const [disc, setDisc] = useState('')
  const [updateBtn, setUpdateBtn] = useState(false)
  const [updatedIndex, setUpdateIndex] = useState(null)

  // Add Code 
  const addTodo = () => {


    if (name.length < 3 || disc.length == 0) {
      alert("Enter your name and disription")
    } else {
      const addobj = {
        name: name,
        discription: disc
      }

      const newArray = [...student, addobj]
      setStudent(newArray)
      // console.log(newArray)


      setName('')
      setDisc('')
    }

  }





  // delete function code 
  const deletetodo = (pram) => {

    const newStudent = student.filter((studentIndex) => studentIndex.name !== pram)
    setStudent(newStudent)
  }




  const edittodo = (pram, index) => {
    setName(pram.name)
    setDisc(pram.discription)
    setUpdateBtn(true)
    setUpdateIndex(index)

  }


  // Update function code 
  const updatetodo = () => {

    if (name.length < 3 || disc.length == 0) {
      alert("Enter your name and disription")
    } else {
      const updateObj = {
        name: name,
        discription: disc
      }

      const newStudents = student.map((item, index) => {
        if (index == updatedIndex) {
          return updateObj
        } else {
          return item
        }
      })
      console.log("New Students: ", newStudents);

      // const newArray = [...student, updateObj]
      setStudent([...newStudents])
      // console.log(newArray)


      setName('')
      setDisc('')
    }
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
        <input
          onChange={(e) => { setName(e.target.value) }}
          value={name}
          className='inputField'
          type='text' placeholder='Enter your name...' />
        {' '}
        <input
          onChange={(e) => { setDisc(e.target.value) }}
          value={disc}
          className='inputField'
          type='text' placeholder='Enter your discription...' />
        <br />
        {
          updateBtn ? <button
            onClick={updatetodo}
            className='AddBtn my-2 bg-info'>Update Todo
          </button> :
            <button
              onClick={addTodo}
              className='AddBtn my-2 bg-info'>Add Todo
            </button>
        }
      </div>




      {/* Display section code here */}
      <div className='displaySectionmain'>
        {
          student.map((item, index) => {
            return (
              <div className='displaySection' key={index}>
                <h6 className='sr'>{index + 1}</h6>
                <p
                  className='sr'
                >{item.name}</p>
                <p
                  className='sr'
                >{item.discription}</p>
                <div className='bg-transparent'>
                  <button className='AddBtn bg-danger sr'
                    onClick={() => deletetodo(item.name)}
                  >Delete</button>
                  {' '}
                  <button className='AddBtn bg-danger sr'
                    onClick={() => edittodo(item, index)}
                  >Edit</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
