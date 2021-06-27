const introduction = document.querySelector(".about");

new Booked4us({
  CalendarId: "1",
  Mode: "button",
  ButtonClickMode: "popup",
  ButtonColor: "blue",
  ButtonText: "Időpontfoglalás",
  // ButtonWidth: "12rem",
  // ButtonHeight: "3rem",
  SchemaName: "yogalab",
  HideUser: true,
  ShowStepper: true,
  HideCompanyInfo: true,
});
document.querySelector(".booked4-us-button").style.padding = "1.2em 1.2em ";
document.querySelector(".booked4-us-button").style.fontSize = "1rem";
document.querySelector(".booked4-us-button").style.textAlign = "center";
document.querySelector(".booked4-us-button").style.width = "20%";
document.querySelector(".booked4-us-button").style.minWidth = "fit-content";
document.querySelector(".booked4-us-button").style.borderRadius = "8px";
document.querySelector(".booked4-us-button").style.backgroundColor = "#233e8b";
document.querySelector(".booked4-us-button").style.marginBottom = "2em";
