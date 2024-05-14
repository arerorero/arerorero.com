export default function intro() {
  setTimeout(() => {
    document.querySelector("#welcome").classList = "show";
  }, 1000);
  setTimeout(() => {
    document.querySelector("#to").classList = "show";
  }, 2000);
  setTimeout(() => {
    document.querySelector("#arerorero").classList = "arerorero";
  }, 3000);
  setTimeout(() => {
    try {
      document.querySelector(".info").classList = "show-info";
    } catch (error) {
      console.log("fast af boi");
    }
  }, 6500);
}
