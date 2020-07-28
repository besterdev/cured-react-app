import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/Transaction.action";
import { bindActionCreators } from "redux";

import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
class TransactionForm extends Component {
  state = { ...this.returnStateObject() };

  returnStateObject() {
    if (this.props.currentIndex === -1)
      return {
        tihe: "",
        tiheError: "",
        firstname: "",
        firstnameError: "",
        lastname: "",
        lastnameError: "",
        birthday: "",
        birthdayError: "",
        nationality: "",
        nationalityError: "",
        citizenid: "",
        citizenidError: "",
        gender: "",
        genderError: "",
        mobile: "",
        mobileError: "",
        passport: "",
        passportError: "",
        salary: "",
        salaryError: "",
      };
    else return this.props.list[this.props.currentIndex];
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex !== this.props.currentIndex ||
      prevProps.list !== this.props.list
    ) {
      this.setState({ ...this.returnStateObject() });
      console.log(prevProps, this.props);
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      firstnameError: "",
      tiheError: "",
      lastnameError: "",
      birthdayError: "",
      nationalityError: "",
      citizenidError: "",
      genderError: "",
      mobileError: "",
      passportError: "",
      salaryError: "",
    };
    if (this.state.tihe === "") {
      isError = true;
      errors.tiheError = "Please select prefix";
    }

    if (this.state.firstname.length < 1) {
      isError = true;
      errors.firstnameError = "Please enter firstname";
    }

    if (this.state.lastname.length < 1) {
      isError = true;
      errors.lastnameError = "Please enter lastname";
    }

    if (this.state.birthday === "") {
      isError = true;
      errors.birthdayError = "Please enter birthday";
    }
    if (this.state.nationality === "") {
      isError = true;
      errors.nationalityError = "Please select nationality";
    }
    if (this.state.citizenid === "") {
      isError = true;
      errors.citizenidError = "Please select citizen id";
    }
    if (this.state.gender === "") {
      isError = true;
      errors.genderError = "Please select gender";
    }
    if (this.state.mobile === "") {
      isError = true;
      errors.mobileError = "Please enter mobilephone";
    }
    if (this.state.passport === "") {
      isError = true;
      errors.passportError = "Please enter passport";
    }
    if (this.state.salary === "") {
      isError = true;
      errors.salaryError = "Please enter salary";
    }
    this.setState({
      ...this.state,
      ...errors,
    });
    return isError;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const err = this.validate();

    if (!err) {
      if (this.props.currentIndex == -1) {
        this.props.insertTransaction(this.state);
      } else {
        this.props.updateTransaction(this.state);
      }
    }
  };

  render() {
    return (
      <div className="wrapper">
        <form
          autoComplete="off"
          onSubmit={this.handleSubmit}
          className="form-wrapper"
        >
          <div className="row1">
            <FormControl
              variant="outlined"
              style={{
                width: 150,
              }}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Prefix
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="tihe"
                value={this.state.tihe}
                onChange={this.handleChange}
                label="Prefix"
                helperText={this.state.tiheError}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Mr"}>Mr</MenuItem>
                <MenuItem value={"Miss"}>Miss</MenuItem>
              </Select>
              <FormHelperText>{this.state.tiheError}</FormHelperText>
            </FormControl>
            <TextField
              style={{
                width: 200,
              }}
              id="outlined-error"
              name="firstname"
              label="Firstname"
              variant="outlined"
              value={this.state.firstname}
              placeholder="Firstname"
              onChange={this.handleChange}
              helperText={this.state.firstnameError}
            />
            <TextField
              style={{
                width: 200,
              }}
              id="outlined-basic"
              name="lastname"
              label="Lastname"
              variant="outlined"
              value={this.state.lastname}
              placeholder="Lastname"
              onChange={this.handleChange}
              helperText={this.state.lastnameError}
            />
          </div>
          <div className="row2">
            <TextField
              style={{
                width: 180,
              }}
              id="birthday"
              label="Birthday"
              type="date"
              variant="outlined"
              value={this.state.birthday}
              placeholder="Birthday"
              name="birthday"
              helperText={this.state.birthdayError}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.handleChange}
            />

            <FormControl
              variant="outlined"
              style={{
                width: 180,
              }}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Nationality
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="nationality"
                value={this.state.nationality}
                onChange={this.handleChange}
                label="Nationality"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Thailand"}>Thailand</MenuItem>
                <MenuItem value={"China"}>China</MenuItem>
              </Select>
              <FormHelperText>{this.state.nationalityError}</FormHelperText>
            </FormControl>

            <TextField
              style={{
                width: 180,
              }}
              id="outlined-basic"
              name="citizenid"
              label="Citizen ID"
              variant="outlined"
              value={this.state.citizenid}
              placeholder="Citizen ID"
              onChange={this.handleChange}
              helperText={this.state.citizenidError}
            />
          </div>
          <div className="row3">
            <FormControl
              component="fieldset"
              style={{
                width: 280,
                marginRight: 20,
              }}
            >
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="position"
                defaultValue="top"
                name="gender"
                required
                component={RadioGroup}
                label="Firstname"
                value={this.state.gender}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio color="primary" />}
                  label="Male"
                  labelPlacement="start"
                  name="gender"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio color="primary" />}
                  label="Female"
                  labelPlacement="start"
                  name="gender"
                />
                <FormControlLabel
                  value="unisex"
                  control={<Radio color="primary" />}
                  label="Unisex"
                  labelPlacement="start"
                  name="gender"
                />
              </RadioGroup>
              <FormHelperText>{this.state.genderError}</FormHelperText>
            </FormControl>

            <TextField
              style={{
                width: 180,
                marginRight: 20,
              }}
              id="outlined-basic"
              name="mobile"
              label="Mobile Phone"
              variant="outlined"
              value={this.state.mobile}
              placeholder="Mobile Phone"
              onChange={this.handleChange}
              helperText={this.state.mobileError}
            />
          </div>

          <div className="row4">
            <TextField
              style={{
                width: 180,
                marginRight: 20,
              }}
              id="outlined-basic"
              name="passport"
              label="Passport NO"
              variant="outlined"
              value={this.state.passport}
              placeholder="Passport NO"
              onChange={this.handleChange}
              helperText={this.state.passportError}
            />
            <TextField
              style={{
                width: 180,
                marginRight: 20,
              }}
              type="number"
              id="outlined-basic"
              name="salary"
              label="Expected Salary"
              variant="outlined"
              value={this.state.salary}
              placeholder="Expected Salary"
              onChange={this.handleChange}
              helperText={this.state.salaryError}
            />
          </div>
          <div className="row5">
            <Button fullWidth type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>

          {/* <p>{JSON.stringify(this.state)}</p> */}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    currentIndex: state.currentIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      insertTransaction: actions.setStateToInsert,
      updateTransaction: actions.setStateToUpdate,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
