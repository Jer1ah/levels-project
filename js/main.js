const mobileMenu = document.getElementsByClassName("mobileMenu")[0];
const navList = document.getElementsByClassName("nav__list")[0];
const navigation = document.getElementsByClassName("nav")[0];

//Adding menu button display for mobile devices 
$(window).resize(() => {
    if( window.innerWidth < 991 ) {
        mobileMenu.style.display = "flex";
    } else if( window.innerWidth > 990 ) {
        mobileMenu.style.display = "none";
    }
});

//Adding dropdown nav for mobile devices
$(mobileMenu).on("click", () => {
    if( $(navList).css("display") === "none" ) {
        $(navList).css("display", "flex");
    } else if( $(navList).css("display") === "flex" ) {
        $(navList).css("display", "none")
    }
});

//Checking viewport's width to see if its smaller or larger than 990px and setting the nav's display accordingly
$(window).resize(() => {
    if( window.innerWidth < 991 ) {
        navList.style.display = "none";
    } else if( window.innerWidth > 990 ) {
        navList.style.display = "flex";
    }
});

//Shrinking navbar's height when user scroll's down
window.onscroll = () => {
    if( $(window).scrollTop() > 55 ) {
        navigation.style.height = "7.5rem";
    } else if( $(window).scrollTop() < 55 ) {
        navigation.style.height = "10rem";
    }
}