const searchBar = document.querySelector("#search-bar")

searchBar.addEventListener("keyup", (e) => {
  let search = e.target.value.toLowerCase()
  let allUsers = document.querySelectorAll(".name")
  
  for(let i = 0; i < allUsers.length; i++) {
    const currentUser = allUsers[i].textContent.toLowerCase()
    console.log(currentUser)
  }
})