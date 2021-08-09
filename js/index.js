const circleBgs = document.querySelectorAll(".circle-bg")
const circles = document.querySelectorAll(".circle")

// *拖拉同心圓 function
circleBgs.forEach((item, idx) => {

  // *circleBG 範圍內被 mousedown
  item.addEventListener("mousedown", (e) => {
    e.preventDefault()

    // 紀錄 dom 中心 X 座標 (offetLeft 是與父元素的左側距離)
    let circleBgCenter = item.offsetLeft + (item.offsetWidth / 2)
    console.log(circleBgCenter)

    // circle 大小改變，加上絕對值！
    const moveCircle = (e) => {
      // e.pageX　為滑鼠 X 座標
      let percent = Math.abs(e.pageX - circleBgCenter)
      console.log(percent)
      // 更改 circle 寬高 %
      circles[idx].setAttribute("style", `width:${percent}%; height:${percent}%;`)
    }

    // *觸發滑鼠移動監聽 window mousemove
    window.addEventListener("mousemove", moveCircle, false)

    // *關閉滑鼠移動監聽 window mouseup
    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", moveCircle);
      console.log("over")
    })
  })
})