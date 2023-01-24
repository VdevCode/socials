const tabs = document.querySelectorAll(".profile-menu-link")
const contents = document.querySelectorAll(".timeline-right")

tabs.forEach((tab,index) => {
    tab.addEventListener("click", () => {
        // tab
        tabs.forEach(tab =>
            tab.classList.remove("active"))
        tab.classList.add("active")
        //content
        contents.forEach(content =>
               content.classList.remove("active") 
        )
        contents[index].classList.add("active")
    })
})