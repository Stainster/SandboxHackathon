// This file is required by the index.html file and will be executed in the context of the renderer process.

const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
}
  
func()

document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})
  