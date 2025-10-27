const scr = document.currentScript;
const rawConfig = scr.getAttribute('data-config');
const config = JSON.parse(rawConfig);
console.log(config)
