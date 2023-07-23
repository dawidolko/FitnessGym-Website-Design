const burgerBtn = document.querySelector(".burger")
const nav = document.querySelector(".nav")
const navItems = document.querySelectorAll(".nav__item")

const handleNav = () => {
	nav.classList.toggle("active")
	navItems.forEach(item => {
		item.addEventListener("click", () => {
			nav.classList.remove("active")
		})
	})
}

burgerBtn.addEventListener("click", handleNav)
