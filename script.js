
let catalog_json = `[
     {
        "name": "1 BG00 15x90x10 непол.Рект (Керамический гранит)",
        "size": 0.131,
        "vendor_code":37553,
        "noginsk_available": 2.88,
        "noginsk_all": 2.88,
        "samara_available": 0,
        "samara_all": 0
    },
    {
        "name": "2 BG00 15x90x10 непол.Рект (Керамический гранит)",
        "vendor_code":37554,
        "size": 0.131,
        "noginsk_available": 0,
        "noginsk_all": 0,
        "samara_available": 3.33,
        "samara_all": 3.33
    },
    {
        "name": "3 BG00 15x90x10 непол.Рект (Керамический гранит)",
        "vendor_code":37555,
        "size": 0.131,
        "noginsk_available": 0,
        "noginsk_all": 0,
        "samara_available": 0,
        "samara_all": 0
    },
    {
        "name": "4 BG00 15x90x10 непол.Рект (Керамический гранит)",
        "vendor_code":37556,
        "size": 0.131,
        "noginsk_available": 2.88,
        "noginsk_all": 2.88,
        "samara_available": 3.22,
        "samara_all": 5.34
        
    }
]`



//корзина
let cart = [];


/// подсветка активного меню sidebar

for (const item of document.querySelectorAll('.menu-item')) {
    if (document.location.href == item.href) {
        item.classList.add("menu-item-current");

    }
    else {
        item.classList.remove("menu-item-current");
    }
}
let data = JSON.parse(catalog_json);



//.sidebar-cart-area область корзины



// "name": "BG00 15x90x10 непол.Рект (Керамический гранит)",
//         "size": 0.131,
//         "vendor_code":37553,
//         "noginsk_available": 2.88,
//         "noginsk_all": 2.88,
//         "samara_available": 0,
//         "samara_all": 0

//заполнение таблицы catalog

fill_catalog_table();
function fill_catalog_table() {
    let out = document.querySelector('#catalog-table-body');
    let catalog = "";
    let count = 0;
    for (let index = 0; index < data.length; index++) {
        let iterator = data[index];
        catalog += '<tr>';
        catalog += `<td><a class="a-catalog-table"> ${iterator.name} <a> </td>`;
        catalog += `<td> ${iterator.size} </td>`;
        catalog += `<td> ${iterator.vendor_code} </td>`;
        catalog += `<td> ${iterator.noginsk_available} </td>`;
        catalog += `<td> ${iterator.noginsk_all} </td>`;
        catalog += `<td> ${iterator.samara_available} </td>`;
        catalog += `<td> ${iterator.samara_all} </td>`;
        catalog += '<button class="bt-small red catalog-table">Добавить</button>';
        catalog += '</tr>';
    }
    out.innerHTML = catalog;
}


// повление кнопки добавить в таблице
show_add_buttons();
function show_add_buttons() {
    let add_buttons = document.querySelectorAll("button.catalog-table");
    let a_catalog_tables = document.querySelectorAll(".a-catalog-table");

    for (let index = 0; index < a_catalog_tables.length; index++) {
        const element = a_catalog_tables[index];
        element.onclick = function () {
            add_buttons[index].style.display = "block";
        }
    }
}



//добавление в корзину из таблицы
add_items_to_cart();

function add_items_to_cart() {

    let catalog_table_body_raws = document.querySelectorAll("#catalog-table-body tr");
    let add_buttons = document.querySelectorAll("button.catalog-table");

    for (let index = 0; index < add_buttons.length; index++) {
        const element = add_buttons[index];
        element.onclick = function () {
            cart.push(catalog_table_body_raws[index].innerText);
            draw_cart();
        }
    }

}


//отображение корзины

draw_cart();
function draw_cart() {
    let out = document.querySelector(".sidebar-cart-area");

    let context = "";
    for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        context += '<hr>'
        context += `<p>${element}</p>`;
    }

    out.innerHTML = context;

}































