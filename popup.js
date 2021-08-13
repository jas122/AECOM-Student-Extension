document.querySelectorAll('BUTTON').forEach(button =>
  button.addEventListener('click', event => {
    chrome.tabs.create({url: button.getAttribute("link")})
  })
)
