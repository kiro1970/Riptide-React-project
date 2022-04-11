import React from 'react';

class ClassSession extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ClassSession: [{id: 0, classType: 'Brazilian Jiu-Jitsu', when: '2022-04-07', capacity: 1, enrolled: 1}]
    };
  }

  componentDidMount() {
         this.doclass();
    }

  async doclass(){
    const apiUrl = 'http://localhost:8080/api/classsession';
    let data = await fetch(apiUrl)
        .then((response) => response.json());
    this.setState({ClassSession: data } );
  }

  renderTableHeader() {
     let header = Object.keys(this.state.ClassSession[0])
     return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
     })
  }

  renderTableData() {
     return this.state.ClassSession.map((ClassSession, index) => {
        const { id, classType, when, capacity, enrolled  } = ClassSession //destructuring
        return (
           <tr key={id}>
              <td className='text-left'>{classType}</td>
              <td className='text-center'>{when}</td>
              <td className='text-center'>{capacity}</td>
              <td className='text-center'>{enrolled}</td>
              <td className='text-center'><button>Enroll</button></td>
           </tr>
        )
     })
  }

  render() {
     return (
        <div>
           <table className='table table-bordered w-100 caption-top bg-white'id='class'>
              <caption className='fw-bold'>Ranks</caption>
              <tbody>
                 <tr>
                    <th>Class Type</th>
                    <th className='text-center'>Time Slot</th>
                    <th className='text-center'>Capacity</th>
                    <th className='text-center'>Enrolled</th>
                    <th className='text-center'></th>
                   </tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }
}


export default ClassSession;
