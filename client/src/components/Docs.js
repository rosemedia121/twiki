import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Docs extends React.Component{
    render(){
        return (
            <TableRow>
                <TableCell><img src={this.props.img} alt=""/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.content}</TableCell>
            </TableRow>
        )
    }
}
export default Docs;