import React from 'react';

class Schedule extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      schedules: []
    };
  }

  componentDidMount() {
         this.doschedule();
    }

  async doschedule(){
    const user = JSON.parse(window.sessionStorage.getItem("user"));
    let apiUrl = 'http://localhost:8080/api/schedules/?';
    let params = new URLSearchParams();
    params.append('member_id', user.member_id);
    apiUrl += params.toString();
    let data = await fetch(apiUrl)
        .then((response) => response.json());
    this.setState({schedules: data } );
  }

 
  renderTableData() {
     return this.state.schedules.map((schedule, index) => {
        const { class_id, member_id, classcompleted } = schedule //destructuring
        return (
           <tr key={class_id}>
              <td className='text-left'>{class_id}</td>
              <td className='text-center'>{member_id}</td>
              <td className='text-center'>{classcompleted}</td>
           </tr>
        )
     })
  }

  render() {
     return (
        <div>
           <table className='table table-bordered w-auto caption-top bg-white'id='ranks'>
              <caption className='fw-bold'>Schedule</caption>
              <tbody>
                 <tr>
                    <th>Class ID</th>
                    <th className='text-center'>Member ID</th>
                    <th className='text-center'>Completed</th>
                   </tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }
}


export default Schedule;