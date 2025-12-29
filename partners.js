
export const partners = [
  { id: 0,title: "Eva's apothecary ", description: "partner of audvis", width: 110, website: "#Our partners" },
  { id: 1,title: "Techniki Apopsi", description: "partner of audvis", width: 110, website: "#Our partners" },
  { id: 2,title: "dk frames", description: "partner of audvis", width: 110, website: "#Our partners" },
  { id: 3,title: "nutri chef", description: "partner of audvis", width: 110, website: "#Our partners" },
  { id: 4,title: "people per hour", description: "partner of audvis", width: 110, website: "#Our partners" },
  { id: 18,title: "stroggilos", description: "partner of audvis", width: 110, website: "#Our partners" },
  { id: 24,title: "LINDA FARROW", description: "partner of audvis", width: 110, website: "https://lindafarrow.com/"  },
  { id: 5,title: "Albatross hotel", description: "partner of audvis", width: 110, website: "#Our partners" },
  { id: 6,title: "Nomad labs scientific", description: "phytoextractivism", width: 110, website: "#Our partners" },
  { id: 7,title: "AriLeads consulting", description: "partner of audvis", width: 110, website: "https://www.arileads.gr" },
  { id: 8,title: "Panaidis", description: "eyewear boutique", width: 110, website: "#Our partners"  },
  { id: 27,title: "NOVACON", description: "partner of audvis", width: 110, website: "#Our partners"  },
  { id: 20,title: "Maia", description: "Fani Zahila Damarlaki", width: 110, website: "#Our partners"  },
  { id: 21,title: "Carbonaki Hotel", description: "Mykonos Town", width: 110, website: "#Our partners"  },
  { id: 26,title: "Ydreos.gr", description: "Naxos Accomondation", width: 110, website: "https://www.ydreosnaxos.com/" },
  { id: 23,title: "CSK LAW", description: "partner of audvis", width: 110, website: "#Our partners"  },
  { id: 22,title: "Lavender Pharmacy", description: "Beauty and self-care products", width: 110, website: "#Our partners"  },
  { id: 22,title: "ANASA CORFU", description: "partner of audvis", width: 110, website: "#Our partners"  },
  { id: 28,title: "Evol Monkey", description: "Just for computies", width: 110, website: "#Our partners"  },
  { id: 9,title: "Ermis", description: "partner of audvis", width: 110, website: "#Our partners"  },
  { id: 10,title: "adaptoras", description: "partner of audvis", width: 110, website: "#Our partners"  },
  { id: 19,title: "Explicit Poets", description: "from Athens to you", width: 110, website: "#Our partners"  },

  { id: 17,title: "have fun", description: "partner of audvis", width: 110, website: "#Our partners"  },
  { id: 16,title: "happy belly tours", description: "partner of audvis", width: 110, website: "#Our partners"  },
  { id: 25,title: "DIO CUTS", description: "haircut & shave", width: 110, website: "#Our partners" },
  { id: 11,title: "BOX", description: "hair studio", width: 110, website: "#Our partners" },
  { id: 12,title: "cityluxe", description: "suites and rooms", width: 110, website: "#Our partners" },
  { id: 13,title: "bv advertising", description: "partner of audvis", width: 110, website: "#Our partners"  },
  { id: 14,title: "gruppo ottico", description: "partner of audvis", width: 110, website: "#Our partners"  },
  { id: 15,title: "Association of Greek commercialists", description: "partner of audvis", width: 110, website: "#Our partners"  }
];

const half = Math.ceil(partners.length / 3);
const firstRow = partners.slice(0, half);
const secondRow = partners.slice(half, half * 2);
const thirdRow = partners.slice(half * 2, half * 3);  // Τρίτη γραμμή

// Duplicate partners for infinite effect
const firstRowLoop = [...firstRow, ...firstRow];
const secondRowLoop = [...secondRow, ...secondRow];
const thirdRowLoop = [...thirdRow, ...thirdRow];

const firstRowHTML = firstRowLoop.map(partner =>
  `<div class="partner" id="partner-${partner.id}" aria-label="partner-${partner.description}">
      <img src="partners/partner-${partner.id}.jpg" loading="lazy" alt="${partner.title} , ${partner.description}" width="${partner.width}" height="${partner.width}">
      <div class="partner-info" id="info-${partner.id}">
      <h6>${partner.title}</h6>
        <p>${partner.description}</p>
        <a href="${partner.website}" target="_blank"><img src="assets/right-arrow.png" alt="arrow that link to ${partner.website}" width="24" height="24"></a>
      </div>
    </div>`).join(" ");

const secondRowHTML = secondRowLoop.map(partner =>
  `<div class="partner" id="partner-${partner.id}" aria-label="partner-${partner.description}">
      <img src="partners/partner-${partner.id}.jpg" loading="lazy" alt="${partner.title} , ${partner.description}" width="${partner.width}" height="${partner.width}">
      <div class="partner-info" id="info-${partner.id}">
      <h6>${partner.title}</h6>
        <p>${partner.description}</p>
        <a href="${partner.website}" target="_blank"><img src="assets/right-arrow.png" alt="arrow that link to ${partner.website}" width="24" height="24"></a>
      </div>
    </div>`).join(" ");

const thirdRowHTML = thirdRowLoop.map(partner =>
  `<div class="partner" id="partner-${partner.id}" aria-label="partner-${partner.description}">
      <img src="partners/partner-${partner.id}.jpg" loading="lazy" alt="${partner.title} , ${partner.description}" width="${partner.width}" height="${partner.width}">
      <div class="partner-info" id="info-${partner.id}">
      <h6>${partner.title}</h6>
        <p>${partner.description}</p>
        <a href="${partner.website}" target="_blank"><img src="assets/right-arrow.png" alt="arrow that link to ${partner.website}" width="24" height="24"></a>
      </div>
    </div>`).join(" ");

const slider = document.querySelector(".partners");
slider.innerHTML = `
  <div class="partners-wrapper">
    <div class="gradient-overlay left"></div>
    <div class="partners-track first-row">${firstRowHTML}</div>
    <div class="partners-track second-row">${secondRowHTML}</div>
    <div class="partners-track third-row">${thirdRowHTML}</div>
    <div class="gradient-overlay right"></div>
  </div>
`;

export function partnersEffect() {
  const firstTrack = document.querySelector(".first-row");
  const secondTrack = document.querySelector(".second-row");
  const thirdTrack = document.querySelector(".third-row");
  const partners = document.querySelectorAll(".partner");

  firstTrack.style.animation = "slide-left 350s linear infinite";
  secondTrack.style.animation = "slide-right 350s linear infinite";
  thirdTrack.style.animation = "slide-left 350s linear infinite";  // Same animation as the first row

  slider.addEventListener("mouseenter", () => {
    firstTrack.style.animationPlayState = "paused";
    secondTrack.style.animationPlayState = "paused";
    thirdTrack.style.animationPlayState = "paused";
  });

  slider.addEventListener("mouseleave", () => {
    firstTrack.style.animationPlayState = "running";
    secondTrack.style.animationPlayState = "running";
    thirdTrack.style.animationPlayState = "running";
  });

  partners.forEach(partner => {
    const info = partner.querySelector(".partner-info");
    partner.addEventListener("mouseenter", () => {
      partner.style.transform = "scale(1.01)";
      partner.style.boxShadow = "4px 4px 12px 4px rgba(128, 128, 128, 0.160)";
      info.style.visibility = "visible";
      info.style.opacity = 1;

      partners.forEach(other => {
        if (other !== partner) {
          other.style.filter = "blur(4px)";
        }
      });
    });

    partner.addEventListener("mouseleave", () => {
      partner.style.transform = "scale(1)";
      partner.style.boxShadow = "1px 1px 5px 1px rgba(128, 128, 128, 0.200)";
      info.style.visibility = "hidden";
      info.style.opacity = 0;
      partners.forEach(other => {
        other.style.filter = "none";
      });
    });
  });



}
