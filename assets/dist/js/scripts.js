window.onscroll = function () { myFunction() };


function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const continuousElements = document.getElementsByClassName('page')
for (let j = 0; j < continuousElements.length; j++) {
    new Waypoint({
        element: continuousElements[j],
        handler: function () {
            const title = document.querySelector('.title-header')
            const selectNav = document.querySelectorAll('a')
            for (i = 0; i < selectNav.length; i++) {
                selectNav[i].classList.remove('active');
            }
            title.innerHTML = this.element.id
            document.querySelector(`a[href='#${this.element.id}']`).classList.add('active')
        },
        offset: 'bottom-in-view'
    })
}

const app = document.getElementById('sub-header');

const typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString('software engineer')
    .typeString('<span style="color: white"> at  </span>')
    .typeString('bri life')
    .start();
