import Busqueda from "./filttrandoSeries.js";

import Sliders from "./sliders.js";
import MuestraMenu from "./menu_formulario.js";

document.addEventListener("DOMContentLoaded",e=>{
    Sliders();
    Busqueda(".card-filter",".item");
    MuestraMenu(".circule-user",".circule-user-2");

});

