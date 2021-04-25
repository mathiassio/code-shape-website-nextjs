import moment from "moment";

export function formatDates(array) {
  array = array.map((item) => {
    item.date = moment(item.date).format("MMMM, DD, YYYY");
    return item;
  });
  return array;
}

export function formatDate(obj) {
  obj.date = moment(obj.date).format("MMMM, DD, YYYY");
  return obj;
}
