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

        image: "images/premium/isn001.jpg",

        description:
            "A clean, delicate fragrance with an effortlessly elegant character. Inspired by the simplicity of freshly laundered linen and soft florals, this scent opens with a crisp, airy freshness before settling into a gentle floral heart and a smooth, comforting musk.",

        fragranceFamily:
            "Floral • Sweet • Powdery",

        topNotes:
            "Add top notes here.",

        heartNotes:
            "Add heart notes here.",

        baseNotes:
            "Add base notes here.",

        inspiration:
            "For those who appreciate the understated elegance of Byredo Blanche, ISN001 captures a similarly clean and sophisticated fragrance experience, fresh, feminine, and beautifully refined..",

        bestFor:
            "Daytime • Everyday • Special Occasions"

    },


    /* ======================================
       ISN002
    ====================================== */

    ISN002: {

        code: "ISN002",

        collection: "dubai",

        image: "images/dubai/isn002.jpg",

        description:
            "Write the main description of the fragrance here.",

        fragranceFamily:
            "Add fragrance family here.",

        topNotes:
            "Add top notes here.",

        heartNotes:
            "Add heart notes here.",

        baseNotes:
            "Add base notes here.",

        inspiration:
            "Add the subtle inspiration/reference information here.",

        bestFor:
            "Add recommended occasions here."

    },


    /* ======================================
       ISN003
    ====================================== */

    ISN003: {

        code: "ISN003",

        collection: "dubai",

        image: "images/dubai/isn003.jpg",

        description:
            "Write the main description of the fragrance here.",

        fragranceFamily:
            "Add fragrance family here.",

        topNotes:
            "Add top notes here.",

        heartNotes:
            "Add heart notes here.",

        baseNotes:
            "Add base notes here.",

        inspiration:
            "Add the subtle inspiration/reference information here.",

        bestFor:
            "Add recommended occasions here."

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
            "Add fragrance family here.",

        topNotes:
            "Add top notes here.",

        heartNotes:
            "Add heart notes here.",

        baseNotes:
            "Add base notes here.",

        inspiration:
            "Add the subtle inspiration/reference information here.",

        bestFor:
            "Add recommended occasions here."

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
            "Add fragrance family here.",

        topNotes:
            "Add top notes here.",

        heartNotes:
            "Add heart notes here.",

        baseNotes:
            "Add base notes here.",

        inspiration:
            "Add the subtle inspiration/reference information here.",

        bestFor:
            "Add recommended occasions here."

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
            "Add fragrance family here.",

        topNotes:
            "Add top notes here.",

        heartNotes:
            "Add heart notes here.",

        baseNotes:
            "Add base notes here.",

        inspiration:
            "Add the subtle inspiration/reference information here.",

        bestFor:
            "Add recommended occasions here."

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
            "Add fragrance family here.",

        topNotes:
            "Add top notes here.",

        heartNotes:
            "Add heart notes here.",

        baseNotes:
            "Add base notes here.",

        inspiration:
            "Add the subtle inspiration/reference information here.",

        bestFor:
            "Add recommended occasions here."

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
            "Add fragrance family here.",

        topNotes:
            "Add top notes here.",

        heartNotes:
            "Add heart notes here.",

        baseNotes:
            "Add base notes here.",

        inspiration:
            "Add the subtle inspiration/reference information here.",

        bestFor:
            "Add recommended occasions here."

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
            "Add fragrance family here.",

        topNotes:
            "Add top notes here.",

        heartNotes:
            "Add heart notes here.",

        baseNotes:
            "Add base notes here.",

        inspiration:
            "Add the subtle inspiration/reference information here.",

        bestFor:
            "Add recommended occasions here."

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
            "Add fragrance family here.",

        topNotes:
            "Add top notes here.",

        heartNotes:
            "Add heart notes here.",

        baseNotes:
            "Add base notes here.",

        inspiration:
            "Add the subtle inspiration/reference information here.",

        bestFor:
            "Add recommended occasions here."

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
