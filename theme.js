var dark = document.getElementById("dark");
var light = document.getElementById("light");
var holi = document.getElementById("holi");
 let flag = true;

dark.addEventListener('click',() => {
    document.documentElement.style.setProperty('--back-color', 'linear-gradient(to right, rgb(92, 94, 94), rgb(94, 121, 121))' );
    flag = false;
});

light.addEventListener('click',() => {
    document.documentElement.style.setProperty('--back-color', 'linear-gradient(to right, rgb(39, 121, 228), rgb(167, 203, 236))' );
    flag = false;
});

holi.addEventListener('click',() => {
    document.documentElement.style.setProperty('--back-color', 'linear-gradient(to right, rgb(243, 9, 80), rgb(241, 85, 7))' );
    flag = false;
});