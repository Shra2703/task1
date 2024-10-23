import data from "./data";

const handleData = (obj, resArr) => {
  resArr.forEach((res) => {
    if (res.child) {
      res.child = handleData(obj, res.child);
      if (res.questionId === obj.parentQuestionId) {
        res.child.push(obj);
      }
    }

    if (res.questionId === obj.parentQuestionId && !res.child) {
      res.child = [];
      res.child.push(obj);
    }
  });

  return resArr;
};

const getObj = () =>  {
  let result = [];
  data.forEach((obj) => {
    if (obj.parentQuestionId === null) result.push(obj);
    else result = handleData(obj, result);
  });
  return result;
}

export let formattedData = getObj();
