function renderBox(wrap) {
    const cardWrap = document.createElement("div");
    const cardText = document.createElement("h3");
    const cardImg = document.createElement("img");
    const loadBtn = document.createElement("button");
  
    loadBtn.innerText = "Load Image";
    loadBtn.style.padding = "15px";
  
    cardText.innerText = "Loading...";
    cardText.style.display = "none";
  
    cardImg.src = "https://picsum.photos/id/755/400/400";
  
    cardWrap.style.display = "flex";
    cardWrap.style.flexDirection = "column";
    cardWrap.style.margin = "50px";
  
    cardWrap.style.width = "400px";
    cardWrap.style.height = "400px";
  
    wrap.style.display = "grid";
    wrap.style.gridTemplateColumns = "1fr 1fr 1fr";
  
    cardWrap.appendChild(cardImg);
    cardWrap.appendChild(cardText);
    cardWrap.appendChild(loadBtn);
  
    loadBtn.addEventListener("click", () => {
      const randomNums = Math.floor(Math.random() * 800);
      cardImg.src = `https://picsum.photos/id/${randomNums}/400/400`;
  
      cardImg.style.display = "none";
      cardText.style.display = "block";
  
      setTimeout(() => {
        cardText.style.display = "none";
        cardImg.style.display = "block";
      }, 1000);
    });
    wrap.appendChild(cardWrap);
  }
  
  module.exports = {
    renderBox,
  };
  