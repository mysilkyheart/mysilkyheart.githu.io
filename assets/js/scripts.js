window.onscroll = function () { myFunction() };


function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-bar").style.width = scrolled + "%";
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const app = document.getElementById('sub-header');

fetch('https://api.github.com/users/deanufriana')
    .then(res => {
        console.log(res)
        return res.json()
    }).then(data => {
        console.log(data)
    })

const date = new Date()
const getYear = new Date().getFullYear()
const firstJob = new Date('12-12-2018').getFullYear()

document.getElementById('year').innerHTML = getYear