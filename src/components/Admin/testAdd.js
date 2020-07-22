import React, { Component } from "react";
import * as testActions from "../../actions/testActions";
import getFormattedDate from "../../utils/formattedDateGenerator";


class TestAdd extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isAdmin: false,
      userData: {}
    };
  }

  componentDidMount() {
    this.getAllTest();
  }

  onSubmit = () => {
    const requestObj = {
      email: this.state.email,
      password: this.state.password
    };


    testActions.addTest(requestObj).then(res => {
      alert(JSON.stringify(res.message))
      if (res.status === "OK") {
        window.location.reload();
        // this.props.history.push('/testGet')
      }
    });
  }

  getAllTest = () => {
    testActions.getAllTestAction().then(testData => {

      for (let i = 0; i < testData.data.length; i++) {
        testData.data[i].updatedAt = getFormattedDate(
          testData.data[i].updatedAt
        );
      }
      const allTestList = testData.data;
      this.setState({ allTestList });
      // alert(JSON.stringify(this.state.allTestList))

    });
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <body class="bg-slate-800">
        <div class="page-content login-cover">
          <div class="content-wrapper">
            <div class="content d-flex justify-content-center align-items-center">
              <form class="login-form" action="#">
                <div class="card mb-0">
                  <div class="card-body">
                    <div class="text-center mb-3">
                      <i class="icon-user-tie icon-2x text-danger-700 border-warning-800 border-3 rounded-round p-3 mb-3 mt-1"></i>
                      <h5 class="mb-0">Add Data</h5>
                    </div>

                    <div class="form-group form-group-feedback form-group-feedback-left">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        onChange={this.onChange}
                        value={this.state.email}
                        placeholder="Email Id"
                      />
                      <div class="form-control-feedback">

                        <i class="icon-user  text-muted"></i>
                      </div>
                    </div>

                    <div class="form-group form-group-feedback form-group-feedback-left">
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        onChange={this.onChange}
                        value={this.state.password}
                        placeholder="Password"
                      />
                      <div class="form-control-feedback">
                        <i class="icon-lock2 text-muted"></i>
                      </div>
                    </div>
                    <div class="form-group">
                      <button
                        type="button"
                        onClick={() => {
                          this.onSubmit();
                        }}
                        class="btn btn-success btn-block"
                      >
                        Add <i class="icon-circle-right2 ml-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <table>
            <tr>
              <th>UserName</th>
              <th>Password</th>
            </tr>
            <tr>
              <td>{}</td>
              <td>Smith</td>

            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>

            </tr>
          </table>
        </div>
      </body>
      // <body>
      //     <form>
      //         <input type="text" name="Username" placeholder="Enter username"></input><br/>
      //         <input type="password" name="Password" placeholder="Enter password"></input><br/>
      //         <input type="button" name="login" placeholder="login" ></input>
      //     </form>
      // </body>
    );
  }
}

export default TestAdd;