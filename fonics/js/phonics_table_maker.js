class PhonicsTableMaker {
    constructor(table_root, cb_selected) {
        this.appendStyle();
        table_root.style.display = "flex";
        table_root.firstElementChild.style.display = "inline-block";
        table_root.insertAdjacentHTML('afterbegin','\
        <div id="phonics_three_pains">\n\
          <div id="left">\n\
              <table id="category_table"></table>\n\
          </div>\n\
          <div id="center">\n\
          </div>\n\
          <div id="right">\n\
              <table id="material_table"></table>\n\
          </div>\n\
        <div>');
        this.createLeftPain(document.querySelector("#category_table"));
        this.cb_selected = cb_selected;
    }
    appendStyle = () => {
        let style = document.createElement("style");
        style.innerHTML = '\
        #phonics_three_pains {\n\
            display:inline-block;\n\
            display:flex;\n\
            height:98vh;\
        }\n\
        table {\n\
            padding: 2px;\n\
            margin: 4px;\n\
            border-collapse: collapse;\n\
            text-align: left;\n\
        }\n\
        td, th {\n\
            white-space:nowrap;\n\
            margin-left: auto;\n\
            margin-right: auto;\n\
            border: solid #000 1px;\n\
        }\n\
        th {\n\
            background-color: #eee;\n\
            font-weight: bold;\n\
            text-align: center;\n\
        }\n\
        #left table td {\n\
            vertical-align: top;\n\
        }\
        #left table td.mix {\n\
            vertical-align: middle;\n\
        }\
        img {\n\
            display: block;\n\
            margin: auto\n\
        }\n\
        \n\
        .selected {\n\
            background-color: #eeffee;\n\
        }\n\
        .listed {\n\
            background-color: #eeffee;\n\
        }\n\
        .playing {\n\
            color: green;\n\
            font-weight: bold;\n\
        }\n\
        #left {\n\
            display:inline-block;\n\
        }\n\
        #center {\n\
            width: 1%;\n\
            display:inline-block;\n\
        }\n\
        #right {\n\
            display:inline-block;\n\
            height: 100 %;\n\
            vertical-align: top;\n\
            overflow-y: scroll;\n\
            scroll-behavior: smooth;\n\
        }\n\
        #material_table{\n\
            margin-left:20px;\n\
            margin-right:20px;\n\
        }\n\
        .row_header {\n\
            font-size: 20pt;\n\
        }\n\
        .word {\n\
            font-size: 20pt;\n\
        }\n\
        .exception {\n\
            color: #ff0000;\n\
        }';
        document.querySelector("head").appendChild(style);
    }
    createLeftPain = (category_table) => {
        var info = {
            headers: [
                { text: "分類", group: "all", colSpan: 1 },
                { text: "一文字の基本音", group: "c1", colSpan: 1 },
                { text: "エー/イー/アイ/オー/ユー読み", group: "c2", colSpan: 2 },
                { text: "←の子音母音混合", group: "c3", colSpan: 1 },
                { text: "早口", group: "c4", colSpan: 1 },
                { text: "２文字で別の音", group: "c5", colSpan: 1 },
                { text: "その他例外", group: "c6", colSpan: 2 },
            ],
            rows: [
                {
                    header: "子音",
                    group: "c",
                    cols: [
                        {
                            colSpan: 1,
                            rowSpan: 1,
                            table: {
                                title: {
                                    text: "１文字子音",
                                    colSpan: 2
                                },
                                groups: ["c", "c1"],
                                chars: [
                                    { text: "b", words: "bag big" },
                                    { text: "p", words: "panda pet" },
                                    { text: "c", words: "cat cola coco" },
                                    { text: "q", words: "queen mosquito" },
                                    { text: "d", words: "dad denim devil" },
                                    { text: "r", words: "rat red" },
                                    { text: "f", words: "fan fox" },
                                    { text: "s", words: "sun six son" },
                                    { text: "g", words: "gun gem" },
                                    { text: "t", words: "tunnel ten" },
                                    { text: "h", words: "hand hip hoho" },
                                    { text: "v", words: "van vampire" },
                                    { text: "j", words: "Japan jump" },
                                    { text: "w", words: "wind wolf" },
                                    { text: "k", words: "kid kennel" },
                                    { text: "x", words: "fox exit" },
                                    { text: "l", words: "lily love" },
                                    { text: "y", words: "yes yui" },
                                    { text: "m", words: "magic mom" },
                                    { text: "z", words: "zipper zero" },
                                    { text: "n", words: "number net" },
                                    { text: "" }
                                ]
                            }
                        },
                        {
                            colSpan: 2,
                            rowSpan: 1
                        },
                        {
                            colSpan: 1,
                            rowSpan: 2,
                            align:"mix",
                            table: {
                                title: {
                                    text: "特定の連続子音",
                                    colSpan: 1
                                },
                                groups: ["c", "v", "c3"],
                                chars: [
                                    { text: "all", words: "ball fall mall" },
                                    { text: "ild", words: "child wildlife" },
                                    { text: "ind", words: "mankind find blind" },
                                    { text: "old", words: "cold gold" }
                                ]
                            }
                        },
                        {
                            colSpan: 1,
                            rowSpan: 1,
                            table: {
                                title: {
                                    text: "連続子音",
                                    colSpan: 3
                                },
                                groups: ["c", "c4"],
                                chars: [
                                    { text: "sm", words: "smile small" },
                                    { text: "bl", words: "black blue blanket cable" },
                                    { text: "br", words: "branch bride library" },
                                    { text: "sn", words: "snail snow" },
                                    { text: "pl", words: "plane plant" },
                                    { text: "fr", words: "France fruits refrigerator fried_checken" },
                                    { text: "sk", words: "ski skirt desk" },
                                    { text: "cl", words: "clip bicycle" },
                                    { text: "cr", words: "crab crown" },
                                    { text: "sp", words: "spy Spain" },
                                    { text: "gl", words: "glass globe jungle" },
                                    { text: "gr", words: "graph grapes" },
                                    { text: "st", words: "stamp stomach" },
                                    { text: "fl", words: "fly flag" },
                                    { text: "dr", words: "dress drill" },
                                    { text: "sw", words: "swan sweater" },
                                    { text: "sl", words: "slide slime" },
                                    { text: "tr", words: "travel tree triangle" },
                                    { text: "thr", words: "three thread" },
                                    { text: "spr", words: "spray spring" },
                                    { text: "str", words: "Australia ostrich stranger strawberry" }
                                ]
                            }
                        },
                        {
                            colSpan: 1,
                            rowSpan: 1,
                            table: {
                                title: {
                                    text: "２文字子音",
                                    colSpan: 1
                                },
                                groups: ["c", "c5"],
                                chars: [
                                    { text: "sh", words: "dish fish ship" },
                                    { text: "ch", words: "cherry children chihiro chocolate" },
                                    { text: "ph", words: "phone alphabet" },
                                    { text: "wh", words: "whale wheel" },
                                    { text: "th", words: "thunder bath death birthday breath" },
                                    { text: "ng", words: "king shopping" }
                                ],
                            },
                        },
                        {
                            colSpan: 1,
                            rowSpan: 2,
                            table: {
                                title: {
                                    text: "その他",
                                    colSpan: 1
                                },
                                groups: ["c", "c6"],
                                chars: [
                                    { text: "その他", words: "a any are busy do does don't every from for her hers I many of one over the they their theirs there to you your yours who whose where hello" },
                                ]
                            }
                        }
                    ],
                },
                {
                    header: "母音",
                    group: "v",
                    cols: [
                        {
                            colSpan: 1,
                            rowSpan: 1,
                            table: {
                                title: {
                                    text: "１文字母音",
                                    colSpan: 1
                                },
                                groups: ["v", "c1"],
                                chars: [
                                    { text: "a", words: "apple ant bag dad jam cat" },
                                    { text: "e", words: "egg elf web bed red pen" },
                                    { text: "i", words: "ink Italy pig fig" },
                                    { text: "o", words: "owl otter oil dog mom hot fox" },
                                    { text: "u", words: "up urban bug sun cup" },
                                ]
                            }
                        },
                        {
                            colSpan: 1,
                            rowSpan: 1,
                            table:
                            {
                                title: {
                                    text: "はなれた無音ｅ",
                                    colSpan: 1
                                },
                                groups: ["v", "c2"],
                                chars: [
                                    { text: "a-e", words: "cake bagle tape game spade scale ex:have" },
                                    { text: "e-e", words: "Japanese" },
                                    { text: "i-e", words: "cider knife hike ex:give" },
                                    { text: "o-e", words: "note rope globe explode" },
                                    { text: "u-e", words: "cube tube" },
                                ]
                            }
                        },
                        {
                            colSpan: 1,
                            rowSpan: 1,
                            table: {
                                title: {
                                    text: "つながる無音母音",
                                    colSpan: 1
                                },
                                groups: ["v", "c2"],
                                chars: [
                                    { text: "ai", words: "paint mail" },
                                    { text: "ay", words: "today way crayfish" },
                                    { text: "ea", words: "bean leaf meat eagle ex:head ex:bread" },
                                    { text: "ee", words: "bee coffee" },
                                    { text: "ey", words: "honey key Desney" },
                                    { text: "ie", words: "pie tie ex:field ex:piece" },
                                    { text: "oa", words: "boat goat road" },
                                    { text: "ow", words: "cow elbow pillow" },
                                    { text: "ue", words: "cue tissue glue" },
                                    { text: "ui", words: "suit juice fruits" },
                                ]
                            }
                        },
                        {
                            colSpan: 1,
                            rowSpan: 1,
                            table: {
                                title: {
                                    text: "２文字母音",
                                    colSpan: 1
                                },
                                groups: ["v", "c4"],
                                chars: [
                                    { text: "oo", words: "zoo book cookie" },
                                    { text: "ou", words: "mouth cloud house mouse ex:young ex:country ex:touch" },
                                    { text: "ow", words: "town crown" },
                                    { text: "oi", words: "coin oil" },
                                    { text: "oy", words: "toy oyster cowboy" },
                                    { text: "au", words: "Australia sause autumn" },
                                    { text: "aw", words: "hawk straw" },
                                ]
                            }
                        },
                        {
                            colSpan: 1,
                            rowSpan: 2,
                            table: {
                                title: {
                                    text: "ｒで伸ばす",
                                    colSpan: 1
                                },
                                groups: ["v", "c5"],
                                chars: [
                                    { text: "ar", words: "park car harp" },
                                    { text: "er", words: "flower spider water" },
                                    { text: "ir", words: "girl shirt bird" },
                                    { text: "or", words: "organ" },
                                    { text: "ur", words: "nurse turtle" },
                                    { text: "air", words: "chair stair" },
                                    { text: "ear", words: "ear bear gear" },
                                    { text: "wor", words: "firework sword" },
                                ]
                            }
                        }
                    ]
                }
            ]
        };
        var category_table_header = category_table.insertRow(-1);
        info.headers.forEach((header) => {
            let th = document.createElement("th");
            th.innerHTML = header.text;
            th.colSpan = String(header.colSpan);
            th.classList.add(header.group);
            category_table_header.appendChild(th);
        });
        info.rows.forEach((row) => {
            let category_table_tr = category_table.insertRow(-1);
            let th = document.createElement("th");
            th.innerHTML = row.header;
            th.classList.add(row.group);
            category_table_tr.appendChild(th); // thはtrに足さないと反映されない。
            row.cols.forEach((col) => {
                let outer_tbl_td = category_table_tr.insertCell(-1);
                outer_tbl_td.colSpan = String(col.colSpan);
                outer_tbl_td.rowSpan = String(col.rowSpan);
                outer_tbl_td.classList.add("outer_td");
                if (col.align!=undefined) outer_tbl_td.classList.add(col.align);
                if (col.table != undefined) {
                    let inner_tbl = document.createElement("table");
                    let inner_th = document.createElement("th");
                    inner_th.colSpan = String(col.table.title.colSpan);
                    inner_th.innerHTML = col.table.title.text;
                    inner_th.classList.add("inner_tbl");
                    let inner_tbl_row = inner_tbl.insertRow(-1);
                    inner_tbl_row.appendChild(inner_th);

                    let i = 0;
                    col.table.chars.forEach((char) => {
                        if (i % col.table.title.colSpan == 0) {
                            inner_tbl_row = inner_tbl.insertRow(-1);
                        }
                        let inner_tbl_col = inner_tbl_row.insertCell(-1);
                        inner_tbl_col.innerHTML = char.text;
                        inner_tbl_col.dataset.words = char.words;
                        inner_tbl_col.classList.add("key");
                        inner_tbl_col.classList.add("inner_tbl");
                        col.table.groups.forEach((group) => {
                            inner_tbl_col.classList.add(group);
                        })
                        i++;
                    });
                    outer_tbl_td.appendChild(inner_tbl);
                }
            });
        });
        category_table.addEventListener("click", (ev) => {
            document.querySelectorAll(".selected").forEach((elm) => {
                elm.classList.remove("selected");
            });
            let query_root = undefined;
            if (ev.target.classList.contains("outer_td")) {
                query_root = ev.target;
            }
            if (ev.target.classList.contains("inner_tbl")) {
                let p = ev.target;
                for (let i = 0; i < 3; i++) {
                    p = p.parentElement;
                    if (p.tagName.toLowerCase() == "table") {
                        query_root = p;
                        break;
                    }
                }
            }
            let cv = "";
            if (query_root == undefined) {
                if (ev.target.tagName.toLowerCase() == "th") {
                    if (ev.target.classList.contains("c")) {
                        cv = ".c";
                    }
                    if (ev.target.classList.contains("v")) {
                        cv = ".v";
                    }
                    if (ev.target.classList.contains("all")) {
                        cv = "";
                    }
                    ["c1", "c2", "c3", "c4", "c5", "c6"].forEach(c => {
                        if (ev.target.classList.contains(c)) {
                            cv = "." + c;
                            return;
                        }
                    });
                    if (cv != "") {
                        query_root = document;
                    }
                }
            }

            if (query_root != undefined) {
                query_root.querySelectorAll(".key" + cv).forEach((elm) => {
                    elm.classList.add("selected");
                });
                let materials_elm = document.querySelector("#material_table");
                materials_elm.innerHTML = "";
                let materials_tbl_header = materials_elm.insertRow(-1);
                let header_texts = ["パターン", "単語", "イメージ"];
                header_texts.forEach((header_text) => {
                    let th = document.createElement("th");
                    th.innerHTML = header_text;
                    materials_tbl_header.appendChild(th);
                });
                document.querySelectorAll(".selected").forEach((selected) => {
                    if (selected.innerText == "") {
                        return;
                    }
                    let words = selected.dataset.words.split(' ');
                    let rowSpan = words.length;
                    words.forEach((word) => {
                        let r = materials_elm.insertRow(-1);
                        if (rowSpan != 0) {
                            let i = r.insertCell(-1);
                            i.rowSpan = rowSpan;
                            i.innerHTML = selected.innerText;
                            i.classList.add("row_header");
                            rowSpan = 0;
                        }
                        if (word != "undefined") {
                            let c = r.insertCell(-1);
                            c.classList.add("word");
                            let naked = word.replace("ex:", "");
                            if (naked != word) {
                                c.classList.add("exception");
                            }
                            let replaced = naked.replace("_", " ");
                            c.innerHTML = replaced;

                            let i = r.insertCell(-1);
                            i.innerHTML = '<img src="img/' + naked + '.png" width="80" height="80" data-word="' + naked + '" />';
                            i.classList.add("image");
                        }
                    });
                });
            }
        });
        document.querySelector('#material_table').addEventListener('click', (ev) => {
            document.querySelectorAll("#material_table td").forEach((elm) => {
                elm.classList.remove("listed");
                elm.classList.remove("do_scroll");
            });
            if (ev.target.tagName.toLowerCase() == "th") {
                let query_root;
                query_root = document.querySelector("#material_table");
                query_root.querySelectorAll(".row_header, .word, .image").forEach((td) => {
                    td.classList.add("listed");
                    td.classList.add("do_scroll");
                });
            } else if (ev.target.tagName.toLowerCase() == "td" && ev.target.classList.contains("row_header")) {
                let query_root = ev.target.parentNode;
                for (let i = 0; i < ev.target.rowSpan; i++) {
                    query_root.querySelectorAll(".row_header, .word, .image").forEach((td) => {
                        td.classList.add("listed");
                    });
                    query_root = query_root.nextElementSibling;
                }
            } else if (ev.target.tagName.toLowerCase() == "td" && ev.target.classList.contains("word")) {
                let query_root = ev.target.parentNode;
                query_root.querySelectorAll(".word, .image").forEach((td) => {
                    td.classList.add("listed");
                })
            } else if (ev.target.tagName.toLowerCase() == "img") {
                let query_root = ev.target.parentNode.parentNode;
                query_root.querySelectorAll(".word, .image").forEach((td) => {
                    td.classList.add("listed");
                });
            }
            let words = document.querySelector("#material_table").querySelectorAll(".word.listed");
            this.cb_selected(words);
        });
    }
    start = (word) => {
        word.classList.add("playing");
    }
    end = (word) => {
        word.classList.remove("playing");
    }
    scroll = (word) => {
        if (word.classList.contains("do_scroll")) {
            document.querySelector("#right").scrollTop += word.clientHeight;
        }
    }
}
