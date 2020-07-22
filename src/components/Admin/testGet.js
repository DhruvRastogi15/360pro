//library imports
import React, { Component } from "react";
import * as testActions from "../../actions/testActions";

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

  
  getAllTest() {
    testActions.getAllTestAction().then(testData => {
        alert(JSON.stringify(testData))
      // for (let i = 0; i < testData.data.length; i++) {
      //   testData.data[i].updatedAt = getFormattedDate(
      //     testData.data[i].updatedAt
      //   );
      // }
      // const allTestList = testData.data;
      // this.setState({ allTestList });

    });
  }

  componentDidMount() {
    this.getAllTest();
  }

  render() {
    return (
      <body>

      </body>
    );
  }
}
export default TestGet;
