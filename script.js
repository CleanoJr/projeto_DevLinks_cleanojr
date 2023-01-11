function toggleMode(){
    // Pegar a classe
    const html = document.documentElement
    
    //Trocar a classe light (modo de cores)
    html.classList.toggle('light')
    
    // Pegar a tag img
    const img = document.querySelector("#profile img")

    // Substituir a imagem
    if (html.classList.contains('light')) {
        //Se estiver em Light Mode
        img.setAttribute("src", "./assets/avatar-light-mode.png")
        img.setAttribute("alt", "Foto de Cleano Júnior de costas com uma camisa dourada com uma praia ao fundo")
        
    } else {
        //Se estiver em Dark Mode
        img.setAttribute("src", "./assets/avatar-dark-mode.png")
    }
}