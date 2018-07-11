// ::string => ::dom
const createDOMFromString = (domString) => {
  const div = document.createElement('div')
  div.innerHTML = domString
  return div
}

// 把组件的 DOM 元素插入页面 并且在 setState 的时候更新页面
const mount = (component, wrapper) => {
  wrapper.appendChild(component._renderDOM())
  component.onStateChange = (oldEl, newEl) => {
    el.insertBefore(newEl, oldEl)
    el.removeChild(oldEl)
  }
}