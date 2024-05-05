
let order;
let cookieSelection;
let buildCookie;
let Cookiecart

const cookieMenu = {
    cookie1: "MonsterChip",
    price1: "1.5$",
    cookie2: "Spots & Strawberries",
    price2: "2$",
    cookie3: "Vampire Velvet Cookies",
    price3: "3$",
    cookie4: "Zombie Brain Bites (with raspberry filling)",
    price4: "2.5$",
    cookie5: "Mummy's Peanut Butter Fingers",
    price5: "2$",
};


class createYourCookie {
    constructor(nameOfCookie, ingridientsCookie) {
        this.nameOfCookie = nameOfCookie;
        this.ingridientsCookie = ingridientsCookie;
    }

};

const selection = [];

class cookieList {
    constructor(monster) {
        this.monster = monster;
    }
};

function showMenu() {
    const cookies = confirm("A continuación podrás visualizar nuestro menú a través de su consola presionando el botón de ok. \n\n Si está listo para hacer su pedido presione cancelar");

    if (cookies == true) {

        alert("Deleitate de nuestra gran variedad. \n\nRedirigiendo a menú principal...");

        for (let property in cookieMenu) {
            console.log(cookieMenu[property]);
        };
    }
}

function addCookies() {

    cookieSelection = prompt("¿Qué mounstro desea escoger el día de hoy?")

    const newCookie = new cookieList(cookieSelection);

    selection.push(newCookie);

    confirm(cookieSelection + " ha sido agregada al pedido.");


};


function yourCookie() {
    alert("¡Bienvenido! En ésta sección podrás crear a tu propio Monster Cookie, la cual será agregada a tu orden. \n\nPodrás escoger su nombre, y si nos gusta; puede que sea parte de nuestro menú los días viernes");

    do {
        const cookieName = prompt("Nombre mounstroso a crear. \n\nEjemplo: Mounstrosa Mordida, Vampire Crumbs, etc");
        const buildCookie = prompt("Agregue los ingredientes a usar, separa los ingredientes por comas");

        const yourNewCookie = new createYourCookie(cookieName, buildCookie);
        selection.push(yourNewCookie);
        confirm(cookieName + " ha sido creado con exito. \n\nDesea continuar?");

    } while (confirm == true);
};


function showCookies() {
    alert("Esto es lo que has agregado a tu pedido hasta ahora \n\nPuedes visualizarlo en consola");
    for (let cart in selection) {
        console.log(selection[cart]);
    };
};


function deleteCookies() {
    const eraseCookies = parseInt(prompt("Ingrese a continuación la cantidad de Monster Cookies que desea eliminar del pedido. En su consola podrá visualizar su pedido. \n\nEstas serán eliminadas de abajo hacia arriba en orden en que tenga su pedido."));
    for (let i = 0; i < selection.lenght; i++) {
        selection.pop(eraseCookies);
        console.log(selection[i]);
    }

};


let menu;

alert("¡Bienvenido a Monsters & Cookies! \n\n¿Estás listo para adentrarte en un mundo de deliciosos sabores monstruosos? \n\nDesde las clásicas y reconfortantes galletas de chocolate hasta las audaces y sorprendentes creaciones inspiradas en nuestros monstruos favoritos, ¡nuestro menú te llevará en un viaje inolvidable! \n\n Para una mejor experiencia, abre tu consola");

do {
    menu = parseInt(prompt("Deja que los mounstros invadan tu paladar. A continuación elija una de las 3 opciones \n\ 1. Menú \n\ 2. Hacer pedido  \n\ 3. Crea tu Monster Cookie personalizada \n\ 4. Visualizar mi pedido \n\ 5. Eliminar mi ultimo pedido \n\ 6. Salir del menu"));
    switch (menu) {
        case 1:
            showMenu();
            break;

        case 2:
            addCookies();
            break;

        case 3:
            yourCookie();
            break;

        case 4:
            showCookies();
            break;

        case 5:
            deleteCookies();
            break;

        case 6:
            alert("Un placer haberlo tenido por aca, lo esperamos pronto")
            break;

        default:
            alert("Ingrese por favor una de las opciones validas. \n\nRedirigiendo a menú principal...");
            break;
    }


} while (menu !== 6);