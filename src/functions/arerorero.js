export default function arerorero() {
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
    document.querySelector(".exit").click();
  }, 7000);
}
