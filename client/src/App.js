import React, {useState, useEffect} from 'react';
import Docs from './components/Docs';
import './App.css';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'


class App extends React.Component {
  state = {
    docs:""
  }
  componentDidMount(){
    this.callApi().then(res=>this.setState({docs: res})).catch(err=>console.log(err));
  }

  callApi = async()=>{
    const res = await fetch('/api/docs');
    const body = await res.json();
    return body
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>이미지</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>설명</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{this.state.docs? this.state.docs.map(e=><Docs key = {e.id} name = {e.name} img = {e.img} content = {e.content}/>):undefined}</TableBody>
            </Table>
          </Paper>
        </header>
      </div>
    );
  }
}

export default App;
