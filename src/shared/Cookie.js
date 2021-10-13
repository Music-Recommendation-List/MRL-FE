const getCookie = (name) => {
  let value = ";" + document.cookie;

  let parts = value.split(";" + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  //날짜 더하기
  date.setTime(date.getTime() + exp * 60 * 60 * 24 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
};

const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();
  console.log(date);
  document.cookie = name + "=; expires=" + date;
};

export { getCookie, setCookie, deleteCookie };
