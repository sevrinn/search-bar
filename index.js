const searchBar = document.querySelector("#search-bar")

searchBar.addEventListener("keyup", (e) => {
  let search = e.target.value
  console.log(search)
})