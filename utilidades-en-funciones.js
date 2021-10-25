/* ARRAY */

//! Comparar 2 arrays --------------------

const isEqual = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

// Ejemplo
isEqual([1, 2, 3], [1, 2, 3]); // true
isEqual([1, 2, 3], [1, '2', 3]); // false

//! --------------------------------

//! Comparar 2 arrays sin importar el orden-------------
// arr3 y arr4 son arrays
const isEqualNoOrder = (arr3, arr4) =>
  JSON.stringify(arr3.sort()) === JSON.stringify(arr4.sort());

// Ejemplo
isEqualNoOrder([1, 2, 3], [1, 2, 3]); // true
isEqualNoOrder([1, 2, 3], [1, 3, 2]); // true
isEqualNoOrder([1, 2, 3], [1, '2', 3]); // false

//! -------------------------------------

//! Encontrar numero de string más largo en un array -------------------
const findLongest = (words) => Math.max(...words.map((el) => el.length));

// Ejemplo
findLongest(['always', 'look', 'on', 'the', 'bright', 'side', 'of', 'life']); // 6

//! -----------------------------------------

//! Obtener el valor único de un array ------------------
const unique1 = (arr) => [...new Set(arr)];

// O
const unique2 = (arr) => arr.filter((el, i, array) => array.indexOf(el) === i);

// O
const unique3 = (arr) =>
  arr.reduce((acc, el) => (acc.includes(el) ? acc : [...acc, el]), []);

//!-----------------------

//! Contar cuantas veces sucede un valor en un array -------------------
const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// Ejemplo
countOccurrences([2, 1, 3, 3, 2, 3], 2); // 2
countOccurrences(['a', 'b', 'a', 'c', 'a', 'b'], 'a'); // 3

//! --------------------------

/* DOM */
//! SCROLL HASTA EL INICIO DE LA PAGINA -------
const goToTop = () => window.scrollTo(0, 0);
//! ----------------------------

//! ESCONDER UN ELEMENTO -------------
// None o Hidden según se necesite
const hide1 = (ele) => (ele.style.display = 'none');

// O
const hide2 = (ele) => (ele.style.visibility = 'hidden');

//! ------------------

//! MOSTRAR UN ELEMENTO ----------------------
const show = (ele) => (ele.style.display = '');
//!---------------------------------

//! ALTERNAR MOSTRAR ESCONDER ELEMENTO ---------------------
const toggle = (ele) =>
  (ele.style.display = ele.style.display === 'none' ? 'block' : 'none');
//! ----------------------------------

//! RECARGAR LA PAGINA ACTUAL ----------------
const reload1 = () => location.reload();

// o
const reload2 = () => (location.href = location.href);
//! ------------------------

//! IR A LA PAGINA ANTERIOR ----------------------
history.back();

// O
history.go(-1);
//! -----------------------

//! REDIRIGIR A OTRA PAGINA ----------------------
const goTo = (url) => (location.href = url);
//! --------------------------

/* FUNCIONES */

/* FECHAS */
//! COMPROBAR SI UNA FECHA ES HOY
// Objeto Date: new Date()
const isToday = (date) =>
  date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10);

//! ----------------------

//! COMPROBAR SI UNA FECHA ESTÁ ENTRE 2 FECHAS
// Instancias de Date, date min y max
const isBetween = (date, min, max) =>
  date.getTime() >= min.getTime() && date.getTime() <= max.getTime();
//! -------------------------

//! ORDENAR UN ARRAY DE FECHAS
// arr es un array de fechas
const sortDescending = (arr) => arr.sort((a, b) => a.getTime() > b.getTime());
const sortAscending = (arr) => arr.sort((a, b) => a.getTime() < b.getTime());
//! ---------------------------

/* EXTRAS */
//! OBTENER VALOR DE UN PARAMETRO DE UNA URL ----------------
const getParam = (url, param) =>
  new URLSearchParams(new URL(url).search).get(param);

// Ejemplo
getParam('http://domain.com?message=hello', 'message'); // 'hello'
//! ---------------------

//! OBTENER LA URL BASE SIN NINGUN PARAMETRO --------------------
const baseUrl = (url) =>
  url.indexOf('?') === -1 ? url : url.slice(0, url.indexOf('?'));

// O
// Includes no es soportado por IE 11
const baseUrl = (url) =>
  url.includes('?') ? url.slice(0, url.indexOf('?')) : url;

// Ejemplo
baseUrl('https://domain.com/path/sub/path?foo=bar&hello=world'); // 'https://domain.com/path/sub/path'
//! --------------------------------
