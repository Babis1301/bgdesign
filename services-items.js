export const servicesTitles = [
  {id:1,
    number: '01.',
    title: 'FINANCIAL AUDITS',
    hover: "services-hover",
    linehover: "line-hover",
    class: "toggle-content",
    description:"We provide comprehensive financial audit services to ensure the accuracy and transparency of your financial statements. Our experts conduct detailed evaluations to verify compliance with industry regulations and standards, helping your business maintain credibility with stakeholders. By identifying potential risks and inefficiencies, our financial audits not only protect your organization but also provide actionable insights for improved financial decision-making and performance."
  },
  {id:2,
    number: '02.',
    title: 'INTERNAL CONTROLS',
    hover: "",
    linehover: " ",
    class: " ",
    description:"Our internal control assessment services are designed to strengthen your organization's operational efficiency and risk management. We evaluate existing processes to identify weaknesses and implement robust control measures that align with regulatory requirements. By optimizing internal systems, we help you safeguard assets, enhance efficiency, and build a strong foundation for sustainable growth."
  },
  {id:3,
    number: '03.',
    title: 'TAX ADVISORY SERVICES',
    hover: "",
    linehover: " ",
    class: " ",
    description:"Our tax compliance and advisory services help businesses navigate complex tax regulations with ease. We ensure accurate filings, identify tax-saving opportunities, and minimize the risk of penalties. Whether it’s strategic tax planning or resolving compliance challenges, we tailor solutions that optimize your tax obligations while aligning with your broader business goals."
  },
  {id:4,
    number: '04.',
    title: 'CONSULTING SERVICES',
    hover: "",
    linehover: " ",
    class: " ",
    description: "We offer risk management and consulting services to help businesses anticipate and mitigate financial risks. Our team conducts thorough risk assessments, develops customized mitigation strategies, and provides actionable advice to enhance decision-making. By proactively addressing potential challenges, we help you build resilience and ensure long-term success."
  }
];

export function servicesEffect(){
  
const servicesArray = servicesTitles.map(serviceItem =>
  `
  <div class="div${serviceItem.id}" tabindex="0">
  <div class="services-title ${serviceItem.hover}">
    <h2>${serviceItem.number}</h2>
    <h3>${serviceItem.title}</h3>
<div class="line"></div>
<div class="line-2 ${serviceItem.linehover}"></div>
  </div>
</div>
  <div class="div${(serviceItem.id + 4)} description ${serviceItem.class}" aria-hidden="true">
  <p>
  ${serviceItem.description}
  </p>
  </div>
  `
).join(" ");
const servicesContent = document.querySelector(".services");
servicesContent.innerHTML = servicesArray;

const listBtns = document.getElementsByClassName("services-title");
const listDescription = document.getElementsByClassName("description");	
const lines = document.getElementsByClassName("line-2")

for(let i = 0 ; i < listBtns.length; i++ ){

listBtns[i].addEventListener("mouseover",()=>{
 
  document.querySelector(".toggle-content")?.classList.remove("toggle-content");
  listDescription[i].classList.add("toggle-content");
  listDescription[i].setAttribute('aria-hidden','false');
  document.querySelector(".services-hover")?.classList.remove("services-hover");
  listBtns[i].classList.add("services-hover");
  listBtns[i].setAttribute('aria-expanded','true');
  document.querySelector(".line-hover")?.classList.remove("line-hover");
  lines[i].classList.add("line-hover");
  
});

listBtns[i].addEventListener("mouseleave",()=>{
 
  listDescription[i].setAttribute('aria-hidden','true');
  listBtns[i].setAttribute('aria-expanded','false');
  
});
};
};

