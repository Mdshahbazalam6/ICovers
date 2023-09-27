import {
  amenitiesData,
  memberShipData,
  insurancePlane,
  preferBrandData,
  productSuitsData,
  reviewData,
  FAQs,
} from "./data.js";
const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("toggleButton");
const amenities = document.getElementById("amenities");
const memberShipContainer = document.getElementById("memberShipContainer");
const insurancePlanContainer = document.getElementById(
  "insurancePlanContainer"
);
const preferBrandContainer = document.getElementById("preferBrandContainer");
const productSuitsContainer = document.getElementById("productSuitsContainer");
const reviewContainer = document.getElementById("reviewContainer");
const reviewSwiperContainer = document.getElementById("reviewSwiperContainer");
const FAQSContainer = document.getElementById("FAQSContainer");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

for (let i = 0; i < amenitiesData.length; i++) {
  const item = `
  <div class=" flex justify-center gap-3 items-start py-6">
    <div>
        <img src=${amenitiesData?.[i]?.image} alt="icon" class="w-8 h-8">
    </div>
    <div class="font-[Open Sans]">
        <p class="text-TEXT_ORANGE text-xl md:text-2xl font-semibold whitespace-nowrap">${amenitiesData?.[i]?.heading1}</p>
        <p class="text-base text-TEXT_BLACK mt-[6px] md:mt-3 whitespace-nowrap">${amenitiesData?.[i]?.heading2}</p>
    </div>
  </div>
  `;
  const container = document.createElement("div");
  container.innerHTML = item;
  amenities.append(container);
}

memberShipData?.forEach((ele) => {
  const innerList = ele?.benifits?.map((elem) => {
    return `
    <p class="text-TEXT_ORANGE text-base md:text-xl font-[Open Sans] mb-3">${elem}</p>
  `;
  });
  const item = `
  <div class="w-11/12 lg:w-full mx-auto mx-auto mb-5">
  <img src=${ele?.image} alt="member image" class="w-[100vw] sm:w-full"/>
  <p class="text-2xl text-TEXT_BLACK font-[Prata] my-5">
    ${ele?.title}
  </p>
 ${innerList.join("")}
  <button
    class="rounded-3xl bg-TEXT_ORANGE text-lg lg:text-xl font-[Open Sans] font-semibold px-4 py-2 lg:px-5 lg:py-3 text-white hover:text-TEXT_ORANGE hover:bg-[#F8F8F9]"
  >
    Learn More
  </button>
</div>
`;
  const container = document.createElement("div");
  container.innerHTML = item;
  container.style.margin = "auto";
  memberShipContainer.append(container);
});

insurancePlane?.forEach((ele) => {
  const item = `
  <div class="flex items-center gap-3 mb-3 md:mb-5" >
  <img src="./images/logo2.png" alt="insurance" class="w-8 h-7 hidden md:block">
      <img src="./images/right-arrow.png" alt="icon" class="md:hidden w-[18px] h-[18px]">
      <p class="text-TEXT_BLACK text-base md:text-xl font-semibold">${ele}</p>
      </div>
  `;
  const container = document.createElement("div");
  container.innerHTML = item;
  insurancePlanContainer.append(container);
});
const buttonContainer = document.createElement("div");
const Button = `
<button
class="rounded-3xl bg-TEXT_ORANGE text-xl font-[Open Sans] font-semibold px-4 py-2 lg:px-5 lg:py-3 text-white mt-3 md:mt-10 hover:text-TEXT_ORANGE hover:bg-[#F8F8F9]"
>
View Policies
</button>
`;
buttonContainer.innerHTML = Button;
insurancePlanContainer.append(buttonContainer);

preferBrandData?.forEach((ele) => {
  const item = `
  <div class="flex items-center gap-3 mb-3 md:mb-5" >
  <img src="./images/logo2.png" alt="brand" class="w-8 h-7 hidden md:block">
      <img src="./images/right-arrow.png" alt="icon" class="md:hidden w-[18px] h-[18px]">
      <p class="text-TEXT_BLACK text-base md:text-xl font-semibold">${ele}</p>
      </div>
  `;
  const container = document.createElement("div");
  container.innerHTML = item;
  preferBrandContainer.append(container);
});
let preferButtonContainer = document.createElement("div");
let preferButton = `
<button
class="rounded-3xl bg-TEXT_ORANGE text-xl font-[Open Sans] font-semibold px-4 py-2 lg:px-5 lg:py-3 text-white mt-3 md:mt-10 hover:text-TEXT_ORANGE hover:bg-[#F8F8F9]"
>
View Policies
</button>
`;
preferButtonContainer.innerHTML = preferButton;
preferBrandContainer.append(preferButtonContainer);

productSuitsData?.forEach((ele) => {
  const item = `
  <div class="flex items-center gap-3 mb-3 md:mb-5" >
  <img src="./images/logo2.png" alt="product" class="w-8 h-7 hidden md:block">
      <img src="./images/right-arrow.png" alt="icon" class="md:hidden w-[18px] h-[18px]">
      <p class="text-TEXT_BLACK text-base md:text-xl font-semibold">${ele}</p>
      </div>
  `;
  const container = document.createElement("div");
  container.innerHTML = item;
  productSuitsContainer.append(container);
});
let productSuitsButtonContainer = document.createElement("div");
let productSuitsButton = `
<button
class="rounded-3xl bg-TEXT_ORANGE text-xl font-[Open Sans] font-semibold px-4 py-2 lg:px-5 lg:py-3 text-white mt-3 md:mt-10 hover:text-TEXT_ORANGE hover:bg-[#F8F8F9]"
>
View Policies
</button>
`;
productSuitsButtonContainer.innerHTML = productSuitsButton;
productSuitsContainer.append(productSuitsButtonContainer);

{
  let reviewDataIndex = 0;
  while (reviewDataIndex < reviewData?.length) {
    const container1 = document.createElement("div");
    const container2 = document.createElement("div");

    container1.innerHTML = `
   <div class="w-72 p-5 rounded-lg border border-red-200 ${
     reviewDataIndex % 6 === 3 && "mt-60"
   }">
   <img src="./images/quote-svgrepo-com.png" alt="icon" class="w-12 h-12"/>
   <div
     class="w-[245px] text-TEXT_BLACK text-xl font-light font-['Open Sans'] mt-5"
   >
     ${reviewData?.[reviewDataIndex]?.review}
   </div>
   <div class="flex gap-3 items-center mt-7">
     <img class="w-10 h-10 rounded-full" src=${
       reviewData?.[reviewDataIndex]?.image
     } alt="avatar"/>
     <p class="text-TEXT_BLACK text-xl font-semibold font-['Open Sans']">
       ${reviewData?.[reviewDataIndex]?.name}
     </p>
   </div>
 </div>
   `;

    container2.innerHTML = `
   <div class="${reviewDataIndex % 6 === 3 && "-mt-40"}">
   <div class="w-72 p-5 rounded-lg border border-red-200">
     <img src="./images/quote-svgrepo-com.png" alt="avatar" class="w-12 h-12" />
     <div
       class="w-[245px] text-TEXT_BLACK text-xl font-light font-['Open Sans'] mt-5"
     >
     ${reviewData?.[reviewDataIndex + 1]?.review}
     </div>
     <div class="flex gap-3 items-center mt-7">
       <img
         class="w-10 h-10 rounded-full"
         src=${reviewData?.[reviewDataIndex + 1]?.image}
       />
       <p class="text-TEXT_BLACK text-xl font-semibold font-['Open Sans']">
       ${reviewData?.[reviewDataIndex + 1]?.name}
       </p>
     </div>
   </div>
   <div class="w-72 p-5 rounded-lg border border-red-200 mt-5">
     <img src="./images/quote-svgrepo-com.png" alt="avatar" class="w-12 h-12" />
     <div
       class="w-[245px] text-TEXT_BLACK text-xl font-light font-['Open Sans'] mt-5"
     >
     ${reviewData?.[reviewDataIndex + 2]?.review}
     </div>
     <div class="flex gap-3 items-center mt-7">
       <img
         class="w-10 h-10 rounded-full"
         src=${reviewData?.[reviewDataIndex + 2]?.image}
       />
       <p class="text-TEXT_BLACK text-xl font-semibold font-['Open Sans']">
       ${reviewData?.[reviewDataIndex + 2]?.name}
       </p>
     </div>
   </div>
 </div>
   `;
    reviewContainer.append(container1, container2);
    reviewDataIndex += 3;
  }
}

reviewData.forEach((ele) => {
  const element = `
        <div class="w-11/12 mx-auto p-5 rounded-lg border border-red-200">
        <img
            src="./images/quote-svgrepo-com.png"
            alt="avatar"
            class="w-12 h-12"
        />
        <div
            class="w-full text-TEXT_BLACK text-xl font-light font-['Open Sans'] mt-5"
        >
           ${ele?.review}
        </div>
        <div class="flex gap-3 items-center mt-7">
            <img
            class="w-10 h-10 rounded-full"
            src=${ele?.image}
            />
            <p
            class="text-TEXT_BLACK text-xl font-semibold font-['Open Sans']"
            >
            ${ele?.name}
            </p>
        </div>
        </div>
        `;
  const container = document.createElement("div");
  container.innerHTML = element;
  container.setAttribute("class", "swiper-slide");
  reviewSwiperContainer.append(container);
});

FAQs.forEach((ele, id) => {
  const element = `
    <div>
    <div
        class="py-1 px-5 rounded-lg border border-red-200 flex justify-between items-center cursor-pointer accordion"
    >
        <p class="text-xl font-['Open Sans']">${ele?.que}</p>
        <span
        class="material-symbols-outlined text-TEXT_ORANGE text-4xl block"
        id="expand${id}"
        >
        expand_more
        </span>
    </div>
    <div class="panel">
        <p>${ele?.ans}</p>
    </div>
    </div>
    `;
  const container = document.createElement("div");
  container.innerHTML = element;
  FAQSContainer.append(container);
});

const accordionList = document.getElementsByClassName("accordion");

for (let i = 0; i < accordionList.length; i++) {
  accordionList[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    const btn = document.getElementById(`expand${i}`);
    if (btn.style.display === "") {
      btn.style.display === "none";
    } else {
      btn.style.display === "";
    }
    if (panel.style.display === "block") {
      btn.style.transform = "rotate(0deg)";
      btn.style.transitionDuration = ".3s";
      panel.style.display = "none";
    } else {
      btn.style.transform = "rotate(180deg)";
      btn.style.transitionDuration = ".3s";
      panel.style.display = "block";
    }
  });
}
