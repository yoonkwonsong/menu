const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "steak dinner",
        category: "dinner",
        price: 39.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
]

window.addEventListener("DOMContentLoaded", () => {
    loadMenu(menu)
    getBtns()
})

const getBtns = () => {
    let categories = ["all"]

    menu.forEach((m) => {
        !categories.includes(m.category) && categories.push(m.category)
    })

    const categoryBtnElements = categories
        .map((c) => {
            return `<button class="btn ${c}">${c}</button>`
        })
        .join("")

    document.querySelector(".btns").innerHTML = categoryBtnElements

    const btns = document.querySelectorAll(".btn")

    btns.forEach((btn) =>
        btn.addEventListener("click", (e) => {
            console.log(e.target.textContent)

            if (e.target.textContent == "all") {
                loadMenu(menu)

                return
            } else {
                const categoryMenu = menu.filter(
                    (m) => m.category == e.target.textContent
                )

                loadMenu(categoryMenu)

                return
            }
        })
    )
}

const loadMenu = (m) => {
    const menuElements = m
        .map((mm) => {
            return `
                   <div class="card">
                          <div class="image">
                              <img src="${mm.img}" alt="" />
                          </div>
                          <div class="text">
                              <div class="text-top">
                                  <h3 class="title">${mm.title}</h3>
                                  <h3 class="price">$${mm.price}</h3>
                              </div>
                              <div class="text-bot">
                                  <p>
                                      ${mm.desc}
                                  </p>
                              </div>
                          </div>
                      </div>
            `
        })
        .join("")

    document.querySelector(".bot").innerHTML = menuElements
}

document.querySelector(".btn-dark").addEventListener("click", () => {
    document.querySelector("html").classList.toggle("dark-mode")
    document.querySelector("html").classList.contains("dark-mode")
        ? (document.querySelector(".btn-dark").textContent = "light")
        : (document.querySelector(".btn-dark").textContent = "dark")
})
