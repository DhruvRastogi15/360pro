//library imports
import React, { Component } from "react";
import * as testActions from "../../actions/testActions";
import getFormattedDate from "../../utils/formattedDateGenerator";
import { Link } from "react-router-dom";

class TestGet extends Component {
  constructor() {
    super();

    this.state = {
    allTestList: [],
      errors: {},
      data: []
    };

    this.users = [];
  }

  
  getAllManagers() {
    testActions.getAllTest().then(testData => {
        alert(JSON.stringify(testData))
      for (let i = 0; i < testData.data.length; i++) {
        testData.data[i].updatedAt = getFormattedDate(
          testData.data[i].updatedAt
        );
      }
      const allTestList = testData.data;
      this.setState({ allTestList });

    });
  }

  componentDidMount() {
    this.getAllManagers();
  }

  render() {
    const admin = "ADMIN"
    return (
      <body className="sidebar-xs">
        <div class="navbar navbar-expand-md navbar-dark bg-grey-600">
          
          <div class="d-md-none d-flex justify-content-end">
            <button
              class="navbar-toggler sidebar-mobile-main-toggle"
              type="button"
            >
              <i class="icon-paragraph-justify3"></i>
            </button>
          </div>

          <div class="navbar-collapse" id="navbar-mobile">
            <div class="navbar-collapse d-flex flex-wrap justify-content-start">
              <h6 class="navbar-text ml-md-1 py-0">
                {/* <a
                  class="nav-link legitRipple px-sm-1"
                  data-popup="tooltip"
                  data-placement="bottom"
                  data-original-title="Batches"
                >
                  <span class="badge bg-success-400 badge-pill"></span>
                </a> */}
              </h6>
              <h6 class="navbar-text ml-md-1 py-0">
                {/* <a
                  class="nav-link legitRipple px-sm-1"
                  data-popup="tooltip"
                  data-placement="bottom"
                  data-original-title="Subjects"
                >
                  <span class="badge bg-pink-400 badge-pill"></span>
                </a> */}
              </h6>
              <h6 class="navbar-text ml-md-1 py-0 mr-auto">
                {/* <a
                  class="nav-link legitRipple px-sm-1"
                  data-popup="tooltip"
                  data-placement="bottom"
                  data-original-title="Topics"
                >
                  <span class="badge bg-blue-400 badge-pill"></span>
                </a> */}
              </h6>
            </div>

            <div>
            <a
            href = " "
              class="navbar-nav-link dropdown-toggle"
              data-toggle="dropdown"
            >
              <img
                // src={this.state.data.photoUrl}
                class="rounded-circle"
                alt=""
              />
              <span>{admin}</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <Link to="/" class="dropdown-item" replace>
                <i class="icon-switch2"></i> Logout
              </Link>
            </div>
          </div>
          </div>
        </div>

        <div class="page-content">
          {/* <div class="sidebar sidebar-dark sidebar-main sidebar-expand-md"> */}
            {/* <div class="sidebar-content"> */}
              {/* <div class="card card-sidebar-mobile"> */}
                {/* <ul class="nav nav-sidebar" data-nav-type="accordion"> */}
                  {/*FROM HERE TO END OF THE 4 NAV-ITEMS to be removed they are temporary*/}
                  {/*this is one nav item*/}

                  {/* <li className="nav-item">
                    <a
                      href="/adminDashboard"
                      className="nav-link legitRipple"
                      title="Dashboard"
                    >
                      <div>
                        <i class="icon-home4"></i>
                      </div>
                      <div>Dashboard</div>
                    </a>
                  </li> */}
                  {/* <li className="nav-item-divider"></li> */}
                  {/*this is one nav item*/}
                  {/* <li className="nav-item">
                    <a
                      href="/adminDashboard"
                      className="nav-link legitRipple"
                      title="Dashboard"
                    >
                      <div>
                        <i class="icon-users4"></i>
                      </div>
                      <div>All Managers</div>
                    </a>
                  </li> */}
                  {/* <li className="nav-item-divider"></li> */}
                {/* </ul> */}
              {/* </div> */}
            {/* </div> */}
          {/* </div> */}

          <div class="content-wrapper">
            <div class="page-header page-header-light"></div>

            <div class="content">
              <div class="d-flex align-items-start flex-column flex-md-row">
                <div class="w-100 order-2 order-md-1">
                  <div class="card">
                    <div class="card-header bg-transparent header-elements-inline">
                      <h6 class="card-title">All Managers</h6>
                      <div class="header-elements">
                        <Link
                          to="/addManager"
                          class="btn bg-orange btn-labeled btn-labeled-right btn-sm legitRipple"
                          replace
                        >
                          <b>
                            <i class="icon-user-plus"></i>
                          </b>
                          Add New Manager
                        </Link>
                      </div>
                    </div>
                    <div>
{this.state.allTestList}
                    </div>
                      {/* tableData={this.state.allTestList}
                      tableName="ALL Data" */}
                    
                    <div class="card-header bg-transparent header-elements-inline">
                      {/* {this.pagination(usersPerPage, totalUsers)} */}
                    </div>
                    <div class="card-footer bg-dark text-white d-flex justify-content-between align-items-center">
                      <div>
                        <span class="badge bg-orange-400 badge-pill mr-2">
                          {this.state.data.length}
                        </span>
                        Total Users
                      </div>

                      <Link
                        to="/addManager"
                        class="btn bg-orange btn-labeled btn-labeled-right btn-sm legitRipple"
                        replace
                      >
                        <b>
                          <i class="icon-user-plus"></i>
                        </b>{" "}
                        Add New Manager
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="navbar navbar-expand-lg navbar-light">
              <div class="text-center d-lg-none w-100">
                <button
                  type="button"
                  class="navbar-toggler dropdown-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-footer"
                >
                  <i class="icon-unfold mr-2"></i>
                  Footer
                </button>
              </div>

              <div class="navbar-collapse collapse" id="navbar-footer">
                <span class="navbar-text">
                  © 2019. <a href=" ">EduKemy</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default TestGet;
