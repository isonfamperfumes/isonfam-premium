/* ==========================================
   ISONFAM PREMIUM SCENTS
   PRODUCT DATABASE
========================================== */


/*
   THIS IS WHERE YOU WILL ENTER
   YOUR PRODUCT INFORMATION.

   You do NOT need to change the website HTML
   when adding/editing scent information.

*/


const scents = {


    /* ======================================
       ISN001
    ====================================== */

    ISN001: {

        code: "ISN001",

        collection: "premium",

        image: "https://i.imgur.com/5keWiJ0.jpeg",

        description:
            "A soft and elegant blend of fresh florals, clean musk, and powdery notes that leaves you smelling effortlessly fresh, feminine, and beautifully clean.",

        fragranceFamily:
            "Clean • Soft • Elegant",

        topNotes:
            "aldehydic • fresh• musky",

        heartNotes:
            "powdery • floral • rose",

        baseNotes:
            "woody • violey",

        inspiration:
            "For those who appreciate the understated elegance of Byredo Blanche, ISN001 captures a similarly clean and sophisticated fragrance experience, fresh, feminine, and beautifully refined..",

        bestFor:
            " •  • "

    },


    /* ======================================
       ISN002
    ====================================== */

    ISN002: {

        code: "ISN002",

        collection: "dubai",

        image: "https://i.imgur.com/JsrI2oe.png",

        description:
            "Write the main description of the fragrance here.",

        fragranceFamily:
            "Sweet • Floral • Feminine",

        topNotes:
            "white floral • musky • fresh",

        heartNotes:
            "fresh spicy • woody • green",

        baseNotes:
            "floral • powdery • citrusy",

        inspiration:
            "Asdaaf Ameerat Al Arab",

        bestFor:
            "Add recommended occasions here."

    },


    /* ======================================
       ISN003
    ====================================== */

    ISN003: {

        code: "ISN003",

        collection: "dubai",

        image: "https://i.imgur.com/ZVsuZHl.jpeg",

        description:
            "Write the main description of the fragrance here.",

        fragranceFamily:
            "Sweet • Creamy • Soft",

        topNotes:
            "sweet • powdery • vanilla",

        heartNotes:
            "tropical",

        baseNotes:
            "musky • floral",

        inspiration:
            "Lattaf Perfumes Yara",

        bestFor:
            " •  • "

    },


    /* ======================================
       ISN004
    ====================================== */

    ISN004: {

        code: "ISN004",

        collection: "premium",

        image: "images/premium/isn004.jpg",

        description:
            "Write the main description of the fragrance here.",

        fragranceFamily:
            " •  • ",

        topNotes:
            " •  • ",

        heartNotes:
            " •  • ",

        baseNotes:
            " •  • ",

        inspiration:
            "Add the subtle inspiration/reference information here.",

        bestFor:
            " •  • "

    },


    /* ======================================
       ISN005
    ====================================== */

    ISN005: {

        code: "ISN005",

        collection: "premium",

        image: "images/premium/isn005.jpg",

        description:
            "Write the main description of the fragrance here.",

        fragranceFamily:
            " •  • ",

        topNotes:
            " •  • ",

        heartNotes:
            " •  • ",

        baseNotes:
            " •  • ",

        inspiration:
            "Add the subtle inspiration/reference information here.",

        bestFor:
            " •  • "

    },


    /* ======================================
       ISN006
    ====================================== */

    ISN006: {

        code: "ISN006",

        collection: "premium",

        image: "images/premium/isn006.jpg",

        description:
            "Write the main description of the fragrance here.",

        fragranceFamily:
            " •  • ",

        topNotes:
            " •  • ",

        heartNotes:
            " •  • ",

        baseNotes:
            " •  • ",

        inspiration:
            "Add the subtle inspiration/reference information here.",

        bestFor:
            " •  • "

    },


    /* ======================================
       ISN007
    ====================================== */

    ISN007: {

        code: "ISN007",

        collection: "dubai",

        image: "images/dubai/isn007.jpg",

        description:
            "Write the main description of the fragrance here.",

        fragranceFamily:
            " •  • ",

        topNotes:
            " •  • ",

        heartNotes:
            " •  • ",

        baseNotes:
            " •  • ",

        inspiration:
            "Add the subtle inspiration/reference information here.",

        bestFor:
            " •  • "

    },


    /* ======================================
       ISN008
    ====================================== */

    ISN008: {

        code: "ISN008",

        collection: "premium",

        image: "images/premium/isn008.jpg",

        description:
            "Write the main description of the fragrance here.",

        fragranceFamily:
            " •  • ",

        topNotes:
            " •  • ",

        heartNotes:
            " •  • ",

        baseNotes:
            " •  • ",

        inspiration:
            "Add the subtle inspiration/reference information here.",

        bestFor:
            " •  • "

    },


    /* ======================================
       ISN009
    ====================================== */

    ISN009: {

        code: "ISN009",

        collection: "dubai",

        image: "images/dubai/isn009.jpg",

        description:
            "Write the main description of the fragrance here.",

        fragranceFamily:
            " •  • ",

        topNotes:
            " •  • ",

        heartNotes:
            " •  • ",

        baseNotes:
            " •  • ",

        inspiration:
            "Add the subtle inspiration/reference information here.",

        bestFor:
            " •  • "

    },


    /* ======================================
       ISN010
    ====================================== */

    ISN010: {

        code: "ISN010",

        collection: "premium",

        image: "images/premium/isn010.jpg",

        description:
            "Write the main description of the fragrance here.",

        fragranceFamily:
            " •  • ",

        topNotes:
            " •  • ",

        heartNotes:
            " •  • ",

        baseNotes:
            " •  • ",

        inspiration:
            "Add the subtle inspiration/reference information here.",

        bestFor:
            " •  • "

    }

};



/* ==========================================
   RENDER COLLECTION
========================================== */


function renderCollection() {

    const container =
        document.getElementById("scent-container");


    if (!container) {
        return;
    }


    const collection =
        document.body.dataset.collection;


    const products =
        Object.values(scents)
        .filter(
            scent =>
                scent.collection === collection
        );


    products.forEach(
        (scent, index) => {


            const section =
                document.createElement("section");


            section.className =
                "scent-section";


            section.innerHTML = `

                <div class="scent-image">

                    <img
                        src="${scent.image}"
                        alt="${scent.code}"
                        onerror="this.style.display='none'"
                    >

                    <span class="image-placeholder">
                        ${scent.code}
                    </span>

                </div>


                <div class="scent-details">

                    <p class="scent-number">
                        ${String(index + 1).padStart(2, "0")}
                    </p>


                    <p class="eyebrow dark">
                        ${collection === "dubai"
                            ? "DUBAI SCENTS"
                            : "PREMIUM SCENTS"}
                    </p>


                    <h2>
                        ${scent.code}
                    </h2>


                    <p class="scent-description">
                        ${scent.description}
                    </p>


                    <div class="scent-info">

                        <div>

                            <span>
                                FRAGRANCE PROFILE
                            </span>

                            <p>
                                ${scent.fragranceFamily}
                            </p>

                        </div>


                        <div>

                            <span>
                                TOP NOTES
                            </span>

                            <p>
                                ${scent.topNotes}
                            </p>

                        </div>


                        <div>

                            <span>
                                HEART NOTES
                            </span>

                            <p>
                                ${scent.heartNotes}
                            </p>

                        </div>


                        <div>

                            <span>
                                BASE NOTES
                            </span>

                            <p>
                                ${scent.baseNotes}
                            </p>

                        </div>


                        <div>

                            <span>
                                BEST FOR
                            </span>

                            <p>
                                ${scent.bestFor}
                            </p>

                        </div>

                    </div>


                    <div class="inspiration">

                        <span>
                            THE INSPIRATION
                        </span>

                        <p>
                            ${scent.inspiration}
                        </p>

                    </div>

                </div>

            `;


            container.appendChild(section);

        }
    );

}


/* ==========================================
   START
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    renderCollection
);
