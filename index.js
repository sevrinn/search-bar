const searchBar = document.querySelector("#search-bar")

searchBar.addEventListener("keyup", (e) => {
  let search = e.target.value.toLowerCase()
  console.log(search)
})