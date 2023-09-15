"use strict";
import { getTiempo, key_api_tiempo, cargarTiempo } from "./time_module.js";
import { getHoras } from "./horas_module.js";
import getNoticia from "./noticias_module.js";
import { cargarCancion } from "./cancion_module.js";

getTiempo();
getHoras();
getNoticia();
cargarCancion();