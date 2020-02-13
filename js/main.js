document.addEventListener('DOMContentLoaded', function() {
          var elemsParallax = document.querySelectorAll('.parallax');
          var optionsParallax = { 'responsiveThreshold' :300 };
          var instancesParallax = M.Parallax.init(elemsParallax, optionsParallax);

          var materialBoxElems = document.querySelectorAll('.materialbox');
          var optionsMaterialBox = { };
          var instancesMaterialBox = M.Materialbox.init(materialBoxElems, optionsMaterialBox);

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});