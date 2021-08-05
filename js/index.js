const circleBgs = document.querySelectorAll(".circle-bg")
const circles = document.querySelectorAll(".circle")

// *拖拉同心圓 function
circleBgs.forEach((item, idx) => {
  // 監聽滑鼠移動開關
  let move

  // *circleBG 範圍內被 mousedown
  item.addEventListener("mousedown", (e) => {
    // 紀錄 dom 寬、高
    let circleWidth = circles[0].offsetWidth
    let circleHeight = circles[0].offsetHeight
    // 紀錄 mouse 一開始 X 起點
    let mouseX = e.pageX

    // 可以移動
    move = true

    // *觸發滑鼠移動監聽 window mousemove
    window.addEventListener("mousemove", (e) => {
      if (move) {
        console.log(e.pageX - mouseX);
        // TODO circle 大小改變，要記得加上絕對值！
        let percent = e.pageX - mouseX
        circles[idx].setAttribute("style", `width:${circleWidth + percent}%; height:${circleHeight + percent}%;`)
      }
    })

    // *關閉滑鼠移動監聽 window mouseup
    window.addEventListener("mouseup", () => {
      move = false
    })
  })
})