function addClass(o, c) {
  var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
  if (re.test(o.className)) return
  o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}

function removeClass(o, c) {
  var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
  o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}