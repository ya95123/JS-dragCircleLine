const circleBgs = document.querySelectorAll(".circle-bg")
const circles = document.querySelectorAll(".circle")

// *circleBG 範圍內被 mousedown
circleBgs.forEach((item, idx) => {
  item.addEventListener("mousedown", (e) => {
    console.log(e.pageX);

    // *觸發滑鼠移動監聽 window mousemove
    window.addEventListener("mousemove", (e) => {
      console.log(e.pageY);
    })
    // *關閉滑鼠移動監聽 window mouseup
  })
})