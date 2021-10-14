let a = { "Alva Majo arde en su Ferrari": "https://www.youtube.com/watch?v=c1uVWBz4R7E", "Dije que su juego era BASURA y volvió para vengarse": "https://www.youtube.com/watch?v=hbY21f69GaE", "Me envían un juego en un USB de 1 METRO (DEMASIADO...": "https://www.youtube.com/watch?v=I9tp3FHquRY", "Guinxu se infiltra en mi game jam y pasa a la fina...": "https://www.youtube.com/watch?v=O92yLDtqPcc", "Destruyo a HeyNau con mi mazo - Tu juego a juicio": "https://www.youtube.com/watch?v=FN_2FeO3KRU", "Tu juego a juicio JAM": "https://www.youtube.com/watch?v=HvjspO2ar7Q", "Haciendo llorar a desarrolladores: Carlos Coronado...": "https://www.youtube.com/watch?v=F5tvdci0MR0", "Cómo hacer un buen juego de jam": "https://www.youtube.com/watch?v=X7CgaBvQwVU", "Lo declaro SEXY - Tu juego a juicio 6": "https://www.youtube.com/watch?v=bYoBRyp8zKs", "Mejora la jugabilidad un 500%": "https://www.youtube.com/watch?v=qf9vq-ru2Ks", "Friday Night FURRO - Tu juego a juicio 5": "https://www.youtube.com/watch?v=VpBQYMklCh4", "Cómo elegir el precio de tu videojuego": "https://www.youtube.com/watch?v=VqG-58b4bmE", "Tu juego a JUICIO 4": "https://www.youtube.com/watch?v=YRnQCjFPaPA", "¿Quién controla el precio y los descuentos de tu j...": "https://www.youtube.com/watch?v=HIE3x-4xsvY", "A JUICIO tu juego 3": "https://www.youtube.com/watch?v=4jioXOC8e9k", "¿Puedo hacer un programa que hable con mi voz?": "https://www.youtube.com/watch?v=ALAy3XF4nuA", "A tu juego JUICIO 2": "https://www.youtube.com/watch?v=27C95XoHEM8", "¿De dónde salen las claves de videojuegos?": "https://www.youtube.com/watch?v=YQbv8YxZ548", "Tu juego a JUICIO": "https://www.youtube.com/watch?v=l0TZDGlq6vg", "¡El volumen no es lineal! Cómo programarlo BIEN": "https://www.youtube.com/watch?v=MquQQX0Ak0k", "Los juegos de mis subs a veces no están tan mal": "https://www.youtube.com/watch?v=6spg5wSoCaM", "Juegos de subs originales y respetuosos con la pro...": "https://www.youtube.com/watch?v=ybaCA8IqHUY", "¿Cuánto dinero he ganado haciendo juegos y videos ...": "https://www.youtube.com/watch?v=nIQ55guj4Ig", "Juegos de subs de alto calibre": "https://www.youtube.com/watch?v=EpqScm6gfLU", "memes de pureya": "https://www.youtube.com/watch?v=Rw2jcZWxrz4", "Juegos de subs con buenos gráficos": "https://www.youtube.com/watch?v=7c-7XJcrHSQ", "¿Qué tal fue el lanzamiento de pureya?": "https://www.youtube.com/watch?v=Nb82XD1zLzo", "pureya ya a la venta": "https://www.youtube.com/watch?v=G_VijeIqe18", "QUIERO PURE YA": "https://www.youtube.com/watch?v=zdziWGXk4NY", "Editor profesional de trailers de videojuegos crit...": "https://www.youtube.com/watch?v=2Wr59xFT6og", "¿Cuánto tiene que vender mi juego para ser un éxit...": "https://www.youtube.com/watch?v=ntb1xTsym9w", "¡Limita los FPS de tu juego!": "https://www.youtube.com/watch?v=K50fP79eemc", "Juegos de suBscriptores que me confunden": "https://www.youtube.com/watch?v=FKh_b5qYArI", "7 trucos de pureya para mejorar la jugabilidad": "https://www.youtube.com/watch?v=uhU8hUP6TXY", "Juegos de subscriptores que no dan para video": "https://www.youtube.com/watch?v=ah3d7DN-1jY", "ÚLTIMO minijuego de pureya (Ahora en serio, lo juro)": "https://www.youtube.com/watch?v=tjpw-YKDHY8", "Tony Hawk se vuelve a su tumba AVERGONZADO tras ve...": "https://www.youtube.com/watch?v=GVDDypqKHMQ", "Cuidado a quién llamas fea en el colegio": "https://www.youtube.com/watch?v=cVEXyUjs_mc", "Recap de la tercera temporada del canal de Alva Majo": "https://www.youtube.com/watch?v=YihNCVGynUU", "2020: Un segundo al día": "https://www.youtube.com/watch?v=BhQDqidWHWU", "Mi historia con los videojuegos - Especial de medi...": "https://www.youtube.com/watch?v=GuhzMY6MIcw", "El último minijuego de pureya": "https://www.youtube.com/watch?v=7qCjpTTb0aA", "Día en la vida de Alva Majo, desarrollador de vide...": "https://www.youtube.com/watch?v=Z89LmGm9L5k", "¿En serio pensabas que el desarrollo de pureya hab...": "https://www.youtube.com/watch?v=O7jzRrs52NQ", "Juegos de subscriptores de alto nivel": "https://www.youtube.com/watch?v=1ZBLGMP17dA", "¿Puede algún desarrollador ganarme en mi propio ju...": "https://www.youtube.com/watch?v=gJMInSOOm1I", "¿El último minijuego de pureya?": "https://www.youtube.com/watch?v=KUHMUqCTDPQ", "¿Qué pasa cuando un youtuber famoso juega a tu jue...": "https://www.youtube.com/watch?v=Wu4ncQIHotA", "El nuevo juego de HeyNau (y más) | Probando juegos": "https://www.youtube.com/watch?v=6hwcNNyfzNk", "¿Puede una flecha roja salvar mi video?": "https://www.youtube.com/watch?v=DKmfQemgazI" }
let prepare = (link, video, description) => {
    link.addEventListener('click', (e) => {
        show(video)
        document.body.querySelector('.description').innerText = description
        e.preventDefault()
    })
}
Object.keys(a).forEach(k => {
    let div = document.createElement('div')
    let link = document.createElement('a')
    let info = div.cloneNode()
    let video = a[k].split('=')[1]
        // https://i.ytimg.com/vi/AjbD6b8UTpM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCDcSzDD7u-iZNrzz4lKE32eg9t6A
    let yt = `<img width="168" height="94" src="https://i.ytimg.com/vi/${video}/hqdefault.jpg" alt=""></img>`
    div.innerHTML = yt
    link.href = a[k]
    link.innerText = k
    info.appendChild(link)
    div.appendChild(info)
    prepare(link, video, k)
    prepare(div.children[0], video, k)
    document.body.querySelector('.right').appendChild(div)
})

let resize = () => {
    let width = document.body.querySelector('.video').children[0].children[0].offsetWidth
    let height = Math.floor(width * (9 / 16))
    document.body.querySelector('.video').children[0].children[0].height = height + 'px'
    console.log('a');
}
window.addEventListener('resize', () => {
    resize()
})
let div = document.createElement('div')
let show = (video) => {
    let height = document.body.querySelector('.video').offsetWidth
    let width = Math.floor(height * (9 / 16))
    let yt2 = `<iframe width="100%" height="${width}px" src="https://www.youtube.com/embed/${video}" frameborder="0" allow=" autoplay;" allowfullscreen></iframe>`;
    div.innerHTML = yt2
    document.body.querySelector('.video').appendChild(div)
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
}
show('c1uVWBz4R7E')


let input = document.querySelector('input')
input.addEventListener('keyup', (e) => {

    document.body.querySelectorAll('.right > div').forEach(e => {
        if (e.innerText.toLowerCase().indexOf(input.value) > -1) {
            e.style.display = 'flex'
        } else {
            e.style.display = 'none'
        }
    })
})

document.querySelector('aside').addEventListener('click',()=>{
    let warrior = `https://garrongarron.github.io/rpg-test-3/`
    let udemy = `https://www.udemy.com/course/threejs-basico-en-espanol/`
    let game = 'https://garrongarron.github.io/rpg-marketing/index.html'
    window.open(game, '_blank').focus();
})