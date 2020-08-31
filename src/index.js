const css = require('./style.scss');

document.querySelector('.combat-controls-attack').addEventListener('click', function () {
    document.querySelector(".combat-controls-attack").classList.add("combat-controls-animation")
    document.querySelector(".unit-sprite-enemy").classList.add("unit-sprite-enemy-animation")
    document.querySelector(".unit-sprite-enemy-plume").classList.add("unit-sprite-enemy-plume-animation")
    setTimeout(function(){
        document.querySelector(".combat-controls-attack").classList.remove("combat-controls-animation")
        document.querySelector(".unit-sprite-enemy").classList.remove("unit-sprite-enemy-animation")
        document.querySelector(".unit-sprite-enemy-plume").classList.remove("unit-sprite-enemy-plume-animation")
    }, 600)
});

document.querySelector('.combat-controls-skill').addEventListener('click', function () {
    document.querySelector(".unit-sprite-enemy").classList.add("unit-sprite-enemy-skill-animation")
    document.querySelector(".unit-sprite-enemy").classList.toggle("unit-sprite-enemy-skill")
    document.querySelector(".combat-controls-skill").classList.add("combat-controls-skill-animation")
    document.querySelector(".unit-sprite-enemy-plume").classList.add("unit-sprite-enemy-plume-skill-animation")
    setTimeout(function(){
        document.querySelector(".combat-controls-skill").classList.remove("combat-controls-skill-animation")
        document.querySelector(".unit-sprite-enemy").classList.remove("unit-sprite-enemy-skill-animation")
        document.querySelector(".unit-sprite-enemy-plume").classList.remove("unit-sprite-enemy-plume-skill-animation")
    }, 1000)
});
