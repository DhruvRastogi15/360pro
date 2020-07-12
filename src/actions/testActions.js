import Config from "./allApiCall";

export const addTest = testData => {
  var methodType = "POST";
  var APIPath = "/test/addTest";
  var parameters = testData;
  var Details = Config.backendAPICall(methodType, APIPath,parameters).then(res => {
    return res;
  })
  return Details;

};

export const getAllTest = () => {
  var methodType = "GET";
  var APIPath = "/test/getAllTest";
  var parameters = {};
  var Details = Config.backendAPICall(methodType, APIPath,parameters).then(res => {
    return res;
  })
  return Details;

};