import React, { Component } from "react";
import TransactionForm from "./TransactionForm";
import { connect } from "react-redux";
import * as actions from "../actions/Transaction.action";
import { bindActionCreators } from "redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

class TransactionList extends Component {
  handleEdit = (index) => {
    this.props.editTransaction(index);
  };

  handleDelete = (index) => {
    this.props.deleteTransaction(index);
  };

  handleDeleteall = () => {
    this.props.clearTransaction();
  };

  render() {
    return (
      <div>
        <TransactionForm />

        <TableContainer className="table-box" component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>NAME</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell>GENDER</TableCell>
                <TableCell>MOBILE</TableCell>
                <TableCell>NATIONALITY</TableCell>
                <TableCell></TableCell>
                <TableCell>
                  {" "}
                  <Button
                    style={{ width: 105 }}
                    variant="outlined"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={() => this.handleDeleteall()}
                  >
                    Clear
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.list.map((item, index) => {
                return (
                  <TableRow key={index}>
                    {/* <td>{item.tihe}</td> */}
                    <TableCell>{item.firstname}</TableCell>
                    <TableCell>{item.lastname}</TableCell>
                    <TableCell>{item.gender}</TableCell>
                    <TableCell>{item.mobile}</TableCell>

                    <TableCell>{item.nationality}</TableCell>

                    <TableCell>
                      <Button
                        variant="contained"
                        color="yellow"
                        startIcon={<EditIcon />}
                        onClick={() => this.handleEdit(index)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        onClick={() => this.handleDelete(index)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      deleteTransaction: actions.setStateToDelete,
      editTransaction: actions.setStateToEdit,
      clearTransaction: actions.setStateClear,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
