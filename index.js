const html = prompt("Oznacte sve schopnosti v psani HTML cislem 0 - 100")
const css = prompt("Oznacte sve schopnosti v psani CSS cislem 0 - 100")
const javaScript = prompt("Oznacte sve schopnosti v psani Javascriptu cislem 0 - 100")

const skillHtml = document.querySelector("#skill1")
const skillCss = document.querySelector("#skill2")
const skillJavascript = document.querySelector("#skill3")

const updateSkill = (id, number) => {
    newValue = id.querySelector(".skill__value")
    newValue.textContent = number + "/100"
}

updateSkill(skillHtml, html)
updateSkill(skillCss, css)
updateSkill(skillJavascript, javaScript)