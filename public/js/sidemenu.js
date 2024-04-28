
$(document).ready(() => {
    const cateSidemenu = $("#cate-sidemenu")
    const hamburgerMenu = $("#hamburger-menu")
    const filterMenu = $('#filter-menu')

    // Create a backdrop and hide it
    const offcanvasBackdrop = $("<div>")
    offcanvasBackdrop.attr('id', 'offcanvas-backdrop')
    offcanvasBackdrop.fadeOut(0)
    $("body").append(offcanvasBackdrop)

    $("#cate-btn").on('click', () => {
        offcanvasBackdrop.fadeIn(300)
        cateSidemenu.toggleClass("show")
    })

    $("#navbar-burger").on('click', () => {
        offcanvasBackdrop.fadeIn(300)
        hamburgerMenu.toggleClass("show")
    })

    $("#filter-btn").on('click', () => {
        offcanvasBackdrop.fadeIn(300)
        filterMenu.toggleClass("show")
    })

    // Hide the sidemenu when clicked outside
    offcanvasBackdrop.on('click', () => {
        offcanvasBackdrop.fadeOut(300)
        cateSidemenu.removeClass("show")
        hamburgerMenu.removeClass("show")
        filterMenu.removeClass("show")
    })
})
