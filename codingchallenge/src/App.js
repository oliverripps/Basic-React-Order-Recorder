import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsList : [[1010001, "Sample Event", "Today"]]
    };

  }

  editState = (event) => {
    event.preventDefault();
    let newid = event.target.elements.idnum.value;
    let newname = event.target.elements.name.value;
    event.target.elements.idnum.value = "";
    event.target.elements.name.value = "";
    let time =  new Date().toLocaleString();
    let newEvent = [newid, newname, time];
    let oldList = this.state.eventsList;
    this.setState({
      eventsList : [...oldList,newEvent]
    });
  }


  render() {
    function makeTable(list) {
      let ret = "<table> <tr> <th> ID </th> <th> Name </th> <th> Time </th> </tr>";
      var i;
      var l;
      for (i of list) {
        let onerow = "<tr>";
        for (l of i) {
          onerow += "<th>";
          onerow += l;
          onerow += "</th>";
        }
        onerow+="</tr>";
        ret += onerow;
      }
      ret += " </table>";
      return ret;
    }
    var eventsList = this.state.eventsList;
    var tab = makeTable(eventsList);
    return (
      <div class = "body">
      <h1> Events </h1>
      <div dangerouslySetInnerHTML={{__html: tab}}>
      </div>
      <form onSubmit={this.editState}>
      <p>Event ID:</p>
      <input type='text' name='idnum' />
      <p>Event Name:</p>
      <input type='text' name='name' />

      <p class="submittext">Add to table:</p>
      <input type='submit'/>
      </form>
      </div>
    );
  }
}

export default App;
