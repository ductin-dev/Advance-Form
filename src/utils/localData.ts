export const getDataFromLocal = () => {
  let arr = [] as any;
  try {
    let tmp = localStorage.getItem("ItemDemo");
    if (tmp) arr = JSON.parse(tmp);
  } catch (e) {
    arr = [];
  }
  return arr;
};
export const importDataToLocal = (obj: any) => {
  try {
    let tmp = localStorage.getItem("ItemDemo");
    let stored = tmp ? JSON.parse(tmp) : [];
    stored.push(obj);
    localStorage.setItem("ItemDemo", JSON.stringify(stored));
  } catch (e) {
    console.log(e);
  }
};
export const clearData = () => {
  localStorage.removeItem("ItemDemo");
  window.location.reload();
};
