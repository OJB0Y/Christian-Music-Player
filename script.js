const playlist = [
  {
    title: "Cordero",
    artist: "Manuel Bonilla",
    src: "songs/Cordero.mp3",
    cover: "images/song5.jpg",
    hex: "#026107ff",
    barColor: "#009708ff"
  },
  {
    title: "Como Una Flor Ft. Los Hermanos Reyes",
    artist: "Hermanos Osorio, Los Hermanos Reyes",
    src: "songs/Como Una Flor (Versión Los Hermanos Reyes).mp3",
    cover: "images/Como Una Flor (Versión Los Hermanos Reyes).png",
    hex: "#939B84",
    barColor: "#332320ff"
  },
  {
    title: "Que lindo es mi Cristo",
    artist: "Wilson Camey, Los Hermanos Reyes",
    src: "songs/Que lindo es mi Cristo.mp3",
    cover: "images/Que lindo es mi Cristo.png",
    hex: "#501008",
    barColor: "#933506ff"
  },
  {
    title: "Confía En El Señor Ft Francisco Orantes",
    artist: "Hermanos Osorio, Francisco Orantes",
    src: "songs/Confía en el Señor - Hermanos Osorio.mp3",
    cover: "images/orantes.png",
    hex: "#1d3145ff",
    barColor: "#722606ff"
  },
  {
      title: "Cuando Muera Yo Ft. Los Hermanos Reyes",
      artist: "Los Voceros de Cristo/Los Hermanos Reyes",
      src: "songs/Cuando Muera Yo.mp3",
      cover: "images/Cuando Muera Yo.png",
      hex: "#3A3436",
      barColor: "#726065ff"
  },
  {
    title: "A Tu Lado en el Cielo",
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - A Tu Lado en el Cielo - Los Voceros de Cristo.mp3",
    cover: "images/Alvaro.jpg",
    hex: "#4f300cff",
    barColor: "#825959ca",
    video: "videos/Voceros1.mp4"
  },
  {
    title: "Es El Amor",
    artist: "Duo Hermanos Devia",
    src: "songs/SpotiDownloader.com - Es El Amor - Duo Hermanos Devia.mp3",
    cover: "images/Cover of Es El Amor by Duo Hermanos Devia.jpg",
    hex: "#a8893c",
    barColor: "#d67a24"
  },
  {
    title: "Apocalipsis 15:3",
    artist: "Los Voceros de Cristo/Armando Trujillo",
    src : "songs/SpotiDownloader.com - Apocalipsis 15_3 - Los Voceros de Cristo.mp3",
    cover: "images/su amor.jpg",
    hex: "#313831",
    barColor: "#527052ff"
  },
  {
    title: "Exitos de Recuerdos Ft. Los Hermanos Reyes",
    artist: "Los Milagros de Cristo/Los Hermanos Reyes",
    src: "songs/Exitos.mp3",
    cover: "images/Cover of Exitos.jpg",
    hex: "#102088",
    barColor: "#041ec4ff"
  },
  {
    title: "Oh Alma Mía (2024)",
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - Oh Alma Mía - En Vivo Desde El Salvador - Los Voceros de Cristo.mp3",
    cover: "images/Cover of Loor A Ti Mi Dios - En Vivo Desde El Salvador by Los Voceros de Cristo.jpg",
    hex: "#609FB6",
    barColor: "#4bb2d7ff"
  },
  {
    title: "Oh Alma Mía Ft Julio Melgar (2016)",
    artist: "Los Voceros de Cristo, Julio Melgar",
    src: "songs/Oh Alma Mia 2018.mp3",
    cover: "images/new4.png",
    hex: "#313831",
    barColor: "#527052ff"
  },
  {
    title: "Oh Alma Mía (2002)",
    artist: "Los Voceros de Cristo",
    src: "songs/a5.mp3",
    cover: "images/a5.png",
    hex: "#3A3436",
    barColor: "#726065ff"
  },
  {
    title: "Oh Alma Mía (2000)",
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - Oh alma mía - Los Voceros de Cristo.mp3",
    cover: "images/Loor.jpg",
    hex: "#783800",
    barColor: "#bf5900ff"
  },
  {
    title: "Escogido Fui de Dios (2025)",
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - Escogido fui de Dios (Nuevos Horizontes) - Los Voceros de Cristo.mp3",
    cover: "images/Cover of Escogido fui de Dios (Nuevos Horizontes) by Los Voceros de Cristo.jpg",
    hex: "#8F2727",
    barColor: "#130069ff"
  },
  {
    title: "Yo Te Esperare",
    artist: "Los Hermanos Reyes",
    src: "songs/Reyes.mp3",
    cover: "images/Hay una ciudad.png",
    hex: "#b09539ff",
    barColor: "#e4b20dff"
  },
  {
    title: "Soy Feliz",
    artist: "Los Hermanos Reyes",
    src: "songs/Soy feliz.mp3",
    cover: "images/He peleado la batalla.png",
    hex: "#787053ff",
    barColor: "#ac943fff"
  },
  {
    title: "La Biblia",
    artist: "Manuel Bonilla",
    src: "songs/song2.mp3",
    cover: "images/song2.jpg",
    hex: "#942409",
    barColor: "#df2d00ff"
  },
  {
    title: "En Mi Casa Vive Jesús",
    artist: "Francisco Orantes/Marilú Orantes",
    src: "songs/SpotiDownloader.com - En Mi Casa Vive Jesús - Francisco Orantes.mp3",
    cover: "images/Cover of En Mi Casa Vive Jesús by Francisco Orantes.jpg",
    hex: "#628ABF",
    barColor: "#3287f5ff"
  },
  {
    title: "Loor a ti mi Dios v2",
    artist: "Los Voceros de Cristo",
    src: "songs/Loor2.mp3",
    cover: "images/a5.png",
    hex: "#3A3436",
    barColor: "#726065ff"
  },
  {
    title: "Mi cántaro vacío",
    artist: "Los Voceros de Cristo",
    src: "songs/cántaro.mp3",
    cover: "images/a5.png",
    hex: "#3A3436",
    barColor: "#726065ff"
  },
  {
    title: "Loor A Ti Mi Dios (2024)",
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - Loor A Ti Mi Dios - En Vivo Desde El Salvador - Los Voceros de Cristo.mp3",
    cover: "images/Cover of Loor A Ti Mi Dios - En Vivo Desde El Salvador by Los Voceros de Cristo.jpg",
    hex: "#609FB6",
    barColor: "#31b6e7ff"
  },
  {
    title: "Escogido Fui de Dios (2024)",
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - Escogido Fui de Dios - En Vivo Desde El Salvador - Los Voceros de Cristo.mp3",
    cover: "images/Cover of Loor A Ti Mi Dios - En Vivo Desde El Salvador by Los Voceros de Cristo.jpg",
    hex: "#609FB6",
    barColor: "#25b4e8ff"
  },
  {
    title: "El volverá",
    artist: "Los Voceros de Cristo/Aníbal Marroquín",
    src: "songs/volverá.mp3",
    cover: "images/new4.png",
    hex: "#313831",
    barColor: "#527052ff"
  },
  {
    title: "Que Feliz Estoy",
    artist: "Francisco Orantes",
    src: "songs/SpotiDownloader.com - Que Feliz Estoy - Francisco Orantes.mp3",
    cover: "images/song10.png",
    hex: "#A16962",
    barColor: "#b84e40ff"
  },
  {
    title: "Por Herencia",
    artist: "Francisco Orantes/Marilú Orantes",
    src: "songs/Por Herencia.mp3",
    cover: "images/Por Herencia.jpg",
    hex: "#5a240cff",
    barColor: "#992e00ff"
  },
  {
    title: "Jesús",
    artist: "Francisco Orantes",
    src: "songs/Jesús.mp3",
    cover: "images/Jesús.jpg",
    hex: "#08186C",
    barColor: "#001db0ff"
  },
  {
    title: "Necesito De Ti",
    artist: "Francisco Orantes",
    src: "songs/Necesito De Ti.mp3",
    cover: "images/song10.png",
    hex: "#A16962",
    barColor: "#b84e40ff"
  },
  {
    title: "Te Necesito",
    artist: "Los Hermanos Reyes",
    src: "songs/Te necesito.mp3",
    cover: "images/Hay una ciudad.png",
    hex: "#bb9b31ff",
    barColor: "#d3a50cff"
  },
  {
    title: "Su amor siempre es su amor",
    artist: "Los Voceros de Cristo/Ruth E. Gomez",
    src: "songs/su amor.mp3",
    cover: "images/su amor.jpg",
    hex: "#313831",
    barColor: "#527052ff"
  },
  {
    title: "La Perdida Oveja",
    artist: "Los Voceros de Cristo/Leonel Tuchez",
    src: "songs/La perdida oveja.mp3",
    cover: "images/a5.png",
    hex: "#3A3436",
    barColor: "#726065ff"
  },
  {
    title: "La Biblia dice que el hombre",
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - La Biblia dice que el hombre - Los Voceros de Cristo.mp3",
    cover: "images/Cover of La Biblia dice que el hombre by Los Voceros de Cristo.jpg",
    hex: "#9D8627",
    barColor: "#c39c00ff"
  },
  {
    title: "Te Doy Gracias",
    artist: "Los Hermanos Reyes/Leonel Tuchez",
    src: "songs/song27.mp3",
    cover: "images/song27.png",
    hex: "#383838",
    barColor: "#6b5a3bff"
  },
  {
    title: "Nicodemo",
    artist: "Leonel Tuchez",
    src: "songs/Nicodemo.mp3",
    cover: "images/Esperando.jpg",
    hex: "#854b6fff",
    barColor: "#be408eff"
  },
  {
    title: "Amartesolo a ti Señor",
    artist: "Los Hermanos Reyes",
    src: "songs/Amarte.mp3",
    cover: "images/Hay un Dios.png",
    hex: "#0b2f43ff",
    barColor: "#025988ff"
  },
  {
    title: "Que Bueno es El Señor",
    artist: "Los Hermanos Reyes",
    src: "songs/Que Bueno es El Señor.mp3",
    cover: "images/Que Bueno es El Señor.png",
    hex: "#6f2d5cff",
    barColor: "#950e71ff"
  },
  {
    title: "He peleado la batalla",
    artist: "Los Hermanos Reyes",
    src: "songs/He peleado la batalla.mp3",
    cover: "images/He peleado la batalla.png",
    hex: "#787053ff",
    barColor: "#967f2cff"
  },
  {
    title: "Si Mi Pueblo Se Humillare",
    artist: "Los Hermanos Reyes",
    src: "songs/pueblo.mp3",
    cover: "images/Hay un Dios.png",
    hex: "#0b2f43ff",
    barColor: "#025c8cff"
  },
  {
    title: "Tengo un Dios",
    artist: "Los Hermanos Reyes",
    src: "songs/Tengo un Dios.mp3",
    cover: "images/Tengo un Dios.png",
    hex: "#787053ff",
    barColor: "#907926ff"
  },
  {
    title: "Hay un Dios",
    artist: "Los Hermanos Reyes",
    src: "songs/Hay un Dios.mp3",
    cover: "images/Hay un Dios.png",
    hex: "#0b2f43ff",
    barColor: "#005f92ff"
  },
  {
    title: "Hay una Ciudad",
    artist: "Los Hermanos Reyes",
    src: "songs/Hay una ciudad.mp3",
    cover: "images/Hay una ciudad.png",
    hex: "#b09539ff",
    barColor: "#e0ac02ff"
  },
  {
    title: "Alla en los Olivos",
    artist: "Los Hermanos Reyes",
    src: "songs/Alla en los olivos.mp3",
    cover: "images/Hay una ciudad.png",
    hex: "#b19433ff",
    barColor: "#e5b003ff"
  },
  {
    title: "Como una Flor",
    artist: "Los Hermanos Reyes",
    src: "songs/song19.mp3",
    cover: "images/song19.png",
    hex: "#383838",
    barColor: "#676536ff"
  },
  {
    title: "Como Una Flor - (EN VIVO)",
    artist: "Wilson Camey/Los Hermanos Reyes",
    src: "songs/Como Una Flor - En vivo - Wilson Camey.mp3",
    cover: "images/wilson.png",
    hex: "#2F5F87",
    barColor: "#0057c0ff"
  },
  {
    title: "Alto Precio - (EN VIVO)",
    artist: "Wilson Camey/Los Hermanos Reyes",
    src: "songs/Alto Precio - En vivo - Wilson Camey.mp3",
    cover: "images/wilson.png",
    hex: "#2F5F87",
    barColor: "#0057c0ff"
  },
  {
    title: "Alto Precio",
    artist: "Los Hermanos Reyes",
    src: "songs/Alto Precio.mp3",
    cover: "images/song27.png",
    hex: "#383838",
    barColor: "#676536ff"
  },
  {
    title: "Que Contento Estoy - (EN VIVO)",
    artist: "Wilson Camey/Los Hermanos Reyes",
    src: "songs/Que Contento Estoy - En vivo - Wilson Camey.mp3",
    cover: "images/wilson.png",
    hex: "#2F5F87",
    barColor: "#0057c0ff"
  },
  {
    title: "Contento Estoy",
    artist: "Los Hermanos Reyes",
    src: "songs/Contento Estoy.mp3",
    cover: "images/song27.png",
    hex: "#383838",
    barColor: "#676536ff"
  },
  {
    title: "Jesús es mi Refugio",
    artist: "Los Voceros de Cristo",
    src: "songs/Refugio.mp3",
    cover: "images/new3.png",
    hex: "#582820",
    barColor: "#941b06ff"
  },
  {
    title: "Vivir Cantado",
    artist: "Julio Elias",
    src: "songs/Julio Elias.mp3",
    cover: "images/Julio Elias.png",
    hex: "#8c3d2fff",
    barColor: "#a11901ff"
  },
  {
    title: "Buscale",
    artist: "Óscar Medina",
    src: "songs/Buscale.mp3",
    cover: "images/Buscale.jpg",
    hex: "#836531",
    barColor: "#b56702ff"
  },
  {
    title: "Te Estoy Esperando",
    artist: "Leonel Tuchez",
    src: "songs/Esperando.mp3",
    cover: "images/Esperando.jpg",
    hex: "#854b6fff",
    barColor: "#a90b6dff"
  },
  {
    title: "Tengo Un Dios - Julio Elías",
    artist: "Julio Elias",
    src: "songs/Tengo Un Dios - Julio Elías.mp3",
    cover: "images/cover1.jpg",
    hex: "#4d3939ff",
    barColor: "#751a1aff"
  },
  {
    title: "Agradecimiento",
    artist: "Manuel Bonilla",
    src: "songs/Agradecimiento - Manuel Bonilla.mp3",
    cover: "images/manuel.png",
    hex: "#726952ff",
    barColor: "#ad7e06ff"
  },
  {
    title: "Todo el Mundo Busca",
    artist: "Wilson Camey",
    src: "songs/Todo el Mundo Busca - Wilson Camey.mp3",
    cover: "images/wc.png",
    hex: "#371737",
    barColor: "#600360ff"
  },
  {
    title: "Tu Fidelidad",
    artist: "Marcos Witt/Alex Campos",
    src: "songs/a6.mp3",
    cover: "images/a6.png",
    hex: "#323c49ff",
    barColor: "#073979ff"
  },
  {
    title: "Me Dicen Que Me Aman",
    artist: "Jesús Adrián Romero",
    src: "songs/a4.mp3",
    cover: "images/a4.png",
    hex: "#353933",
    barColor: "#457a2aff"
  },
  {
    title: "Renuévame",
    artist: "Marcos Witt",
    src: "songs/a2.mp3",
    cover: "images/a2.png",
    hex: "#0E434A",
    barColor: "#006c7bff"
  },
  {
    title: "Quien me podrá separar",
    artist: "Los Hermanos Reyes",
    src: "songs/a3.mp3",
    cover: "images/a3.png",
    hex: "#17494eff",
    barColor: "#01747eff"
  },
  {
    title: "En Paz",
    artist: "Daniel Calveti",
    src: "songs/a1.mp3",
    cover: "images/a1.png",
    hex: "#616060ff",
    barColor: "#9a4e4eff"
  },
/*  {
    title: "Prometí aceptar tu palabra",
    artist: "Julio Elias",
    src: "songs/Prometí aceptar tu palabra.mp3",
    cover: "images/cover2.jpg"
  },*/
  {
    title: "Primero Dios, Vol. 5",
    artist: "Agustin Amador",
    src: "songs/Primero Dios, Vol. 5.mp3",
    cover: "images/cover3.jpg",
    hex: "#846122",
    barColor: "#c07d02ff"
  },
  {
    title: "Ahora Soy Feliz",
    artist: "Los Hermanos Reyes",
    src: "songs/song1.mp3",
    cover: "images/song1.jpg",
    hex: "#383838",
    barColor: "#676536ff"
  },
  {
    title: "Un Grano de Arena",
    artist: "Manuel Bonilla",
    src: "songs/Un Grano De Arena.mp3",
    cover: "images/Un Grano De Arena.png",
    hex: "#3D445C",
    barColor: "#2f458eff"
  },
{ 
    title: "Oh Juventud",
    artist: "Zulmy Mejia",
    src: "songs/Zulmy.mp3",
    cover: "images/zulmy.jpg",
    hex: "#294579ff",
    barColor: "#00589fff"
},
{
    title: "Cristo por su Iglesia viene",
    artist: "Los Voceros de Cristo",
    src: "songs/Cristo.mp3",
    cover: "images/Cristo.jpg",
    hex: "#2E3F3F",
    barColor: "#108787ff"
},
{
    title: "Loor a ti mi Dios",
    artist: "Los Voceros de Cristo",
    src: "songs/Loor.mp3",
    cover: "images/Loor.jpg",
    hex: "#783800",
    barColor: "#ca5e00ff"
},
{
    title: "Todos Deben de Saber/Conocer",
    artist: "Los Hermanos Reyes/Manuel Bonilla",
    src: "songs/song28.mp3",
    cover: "images/song28.png",
    hex: "#968E90",
    barColor: "#c5c55aff"
},
{
    title: "Esa Roca",
    artist: "Francisco Orantes",
    src: "songs/song3.mp3",
    cover: "images/song3.jpg",
    hex: "#236394ff",
    barColor: "#259423ff"
},
{
    title: "El Amor de Dios",
    artist: "Manuel Bonilla",
    src: "songs/song4.mp3",
    cover: "images/song4.jpg",
    hex: "#2F4617",
    barColor: "#447e06ff"
},
{
    title: "En El Monte Cavalrio",
    artist: "Manuel Bonilla",
    src: "songs/song5.mp3",
    cover: "images/song5.jpg",
    hex: "#003D03",
    barColor: "#00a108ff"
},
{
    title: "No Te Voy A Dejar",
    artist: "Leonel Tuchez",
    src: "songs/song6.mp3",
    cover: "images/song6.png",
    hex: "#854b6fff",
    barColor: "#cf1989ff"
},
{
    title: "Supe Que Me Amabas",
    artist: "Marcela Gandera",
    src: "songs/song7.mp3",
    cover: "images/song7.png",
    hex: "#9B4A3C",
    barColor: "#d74c10ff"
},
{
    title: "A Quien Iremos",
    artist: "Los Hermanos Reyes",
    src: "songs/song8.mp3",
    cover: "images/song8.png",
    hex: "#383838",
    barColor: "#676536ff"
},
{
    title: "Llegó el Amor",
    artist: "Aníbal Marroquin",
    src: "songs/song9.mp3",
    cover: "images/song9.png",
    hex: "#7D2708",
    barColor: "#c93601ff"
},
{
    title: "Confía En El Señor",
    artist: "Francisco Orantes",
    src: "songs/song10.mp3",
    cover: "images/song10.png",
    hex: "#94625bff",
    barColor: "#bd4232ff"
},
{
    title: "Escogido fui de Dios",
    artist: "Los Voceros de Cristo",
    src: "songs/song11.mp3",
    cover: "images/song11.png",
    hex: "#91190A",
    barColor: "#d11800ff"
},
{
    title: "Todo Va a Estar Bien",
    artist: "Redimi2/Evan Craft",
    src: "songs/Bienn.mp3",
    cover: "images/Bien.jpg",
    hex: "#747474",
    barColor: "#a397bcff"
},
{
    title: "Más Rico Del Mundo",
    artist: "Evan Craft",
    src: "songs/Más_Rico_Del_Mundo.mp3",
    cover: "images/Más_Rico_Del_Mundo.png",
    hex: "#0083A5",
    barColor: "#00cd8fff"
},
{
    title: "La Milla Extra",
    artist: "Evan Craft",
    src: "songs/La Milla Extra.mp3",
    cover: "images/La Milla Extra.png",
    hex: "#7E393C",
    barColor: "#aa123dff"
},
{
    title: "Desesperado",
    artist: "Evan Craft",
    src: "songs/Desesperado.mp3",
    cover: "images/evan.png",
    hex: "#186B5D",
    barColor: "#01ad91ff"
},
{
    title: "Sueños",
    artist: "Un Corazón",
    src: "songs/song14.mp3",
    cover: "images/suenos.jpg",
    hex: "#504878",
    barColor: "#2204b3ff"
},
{
    title: "¿Cómo Podré Pagarte?",
    artist: "Leonel Tuchez",
    src: "songs/song15.mp3",
    cover: "images/song15.png",
    hex: "#632D07",
    barColor: "#ca5501ff"
},
{
    title: "Más Que Nunca Ft. Danilo Montero",
    artist: "Un Corazón",
    src: "songs/song16.mp3",
    cover: "images/song16.png",
    hex: "#464D2E",
    barColor: "#6f881bff"
},
{
    title: "Cuando Te Encontré",
    artist: "Rojo/Strings & Heart",
    src: "songs/Cuando (1).mp3",
    cover: "images/Cuando.jpg",
    hex: "#949494",
    barColor: "#94a9d3ff"
},
{
    title: "Eres Todopoderoso",
    artist: "Rojo",
    src: "songs/song12.mp3",
    cover: "images/song12.png",
    hex: "#680519",
    barColor: "#ad0330ff"
},
{
    title: "Tu Amor Hace Eco En Todo Mi Universo",
    artist: "Rojo",
    src: "songs/song17.mp3",
    cover: "images/song17.png",
    hex: "#727272",
    barColor: "#dbb8b8ff"
},
{
    title: "Es Lo Que Quiero",
    artist: "Emmanuel y Linda",
    src: "songs/Es Lo Que Quiero.mp3",
    cover: "images/Es Lo Que Quiero.png",
    hex: "#9c3270ff",
    barColor: "#db24a4ff"
},
{
    title: "Si No Fuera Por Ti",
    artist: "Rojo",
    src: "songs/Si No Fuera Por Ti.mp3",
    cover: "images/Si No Fuera Por Ti.png",
    hex: "#959595",
    barColor: "#94a9d3ff"
},
{
    title: "Siguiéndote Los Pasos",
    artist: "Rojo",
    src: "songs/Pasos.mp3",
    cover: "images/song17.png",
    hex: "#727272",
    barColor: "#dbb8b8ff"
},
{
    title: "Has Cambiado mi lamento",
    artist: "Los Hermanos Reyes",
    src: "songs/lamento.mp3",
    cover: "images/lamento.jpg",
    hex: "#007693",
    barColor: "#00c3eaff"
},
{
    title: "Deja las Drogas",
    artist: "Aníbal Marroquín",
    src: "songs/song22.mp3",
    cover: "images/song22.png",
    hex: "#740800",
    barColor: "#d40e00ff"
},
{
    title: "A Luchar Hermano",
    artist: "Aníbal Marroquín",
    src: "songs/song23.mp3",
    cover: "images/song23.png",
    hex: "#7D2708",
    barColor: "#e23c00ff"
},
{
    title: "Josué 1: 8 Y 9",
    artist: "Leonel Tuchez",
    src: "songs/song24.mp3",
    cover: "images/song24.png",
    hex: "#662F08",
    barColor: "#db5b00ff"
},
{
    title: "Los Que Esperan En Jehová",
    artist: "Manuel Bonilla",
    src: "songs/Esperan.mp3",
    cover: "images/new5.png",
    hex: "#961410",
    barColor: "#d9036eff"
},
{
    title: "He Peleado la Batalla",
    artist: "Luismi Acosta y Gloria de Dios",
    src: "songs/Luismi.mp3",
    cover: "images/new1.png",
    hex: "#AC6F00",
    barColor: "#f88400ff"
},
{
    title: "Que Bueno Es El Señor",
    artist: "Luismi Acosta y Gloria de Dios",
    src: "songs/SpotiDownloader.com - Que bueno es el Señor - Luismi Acosta y Gloria de Dios.mp3",
    cover: "images/new1.png",
    hex: "#AC6F00",
    barColor: "#f88400ff"
},
{
    title: "Jesús Pt. 2",
    artist: "Lead/Musiko",
    src: "songs/Pt 2.mp3",
    cover: "images/image (2).png",
    hex: "#84233fff",
    barColor: "#10ea76ff"
},
{
    title: "Lo Que Quieras Tú",
    artist: "La Feria Oficial/Redimi2",
    src: "songs/Quieras.mp3",
    cover: "images/Lo.jpg",
    hex: "#58827C",
    barColor: "#16b9c1ff"
},
{
    title: "GOZO",
    artist: "Miel San Marcos/Redimi2",
    src: "songs/GOZO.mp3",
    cover: "images/gozo.jpg",
    hex: "#b74823ff",
    barColor: "#efbc12ff"
},
{
    title: "El Nombre De Jesús",
    artist: "Redimi2/Christine D'Clario",
    src: "songs/Nombre.mp3",
    cover: "images/image (5).png",
    hex: "#8E8E8E",
    barColor: "#e4c752ff"
},
{
    title: "Espíritu Santo",
    artist: "Redimi2/Barak",
    src: "songs/Espíritu.mp3",
    cover: "images/image (5).png",
    hex: "#8E8E8E",
    barColor: "#e4c752ff"
},
{
    title: "Viviré",
    artist: "Redimi2/Evan Craft",
    src: "songs/Viviré.mp3",
    cover: "images/image (6).png",
    hex: "#70776A",
    barColor: "#d1e65bff"
},
{
    title: "NO HAY NADA IMPOSIBLE",
    artist: "Redimi2/Danny Gokey",
    src: "songs/Gokey.mp3",
    cover: "images/Gokey.jpg",
    hex: "#4d372cff",
    barColor: "#fd7b3aff"
},
{
    title: "La Casa De Jehová",
    artist: "Redimi2/Barak",
    src: "songs/Barak.mp3",
    cover: "images/Barak.jpg",
    hex: "#08373E",
    barColor: "#91e7f4ff"
},
{
    title: "Arde En Mi",
    artist: "Evan Craft/Redimi2",
    src: "songs/Arde.mp3",
    cover: "images/Arde.jpg",
    hex: "#16706A",
    barColor: "#b71c6fff"
},
{
    title: "Del Salmo 23",
    artist: "Redimi2/Distrito Royal",
    src: "songs/SpotiDownloader.com - Del Salmo 23 - Redimi2.mp3",
    cover: "images/Cover of Del Salmo 23 by Redimi2, Distrito Royal.jpg",
    hex: "#716942",
    barColor: "#6bb791ff"
},
{
    title: "El Mood",
    artist: "Redimi2",
    src: "songs/SpotiDownloader.com - El mood - Redimi2.mp3",
    cover: "images/puede.jpg",
    hex: "#6B8681",
    barColor: "#ac9250ff"
},
{
    title: "Exaltación",
    artist: "Redimi2/Averly Morillo",
    src: "songs/SpotiDownloader.com - Exaltación - Redimi2.mp3",
    cover: "images/Cover of Exaltación by Redimi2, Averly Morillo.jpg",
    hex: "#383810",
    barColor: "#f4f447ff"
},
{
    title: "Mi Padre",
    artist: "Redimi2/Samantha Kate/Distrito Royal",
    src: "songs/padre.mp3",
    cover: "images/puede.jpg",
    hex: "#70918b",
    barColor: "#ac9250ff"
},
{
    title: "Mi Dios Puede",
    artist: "Redimi2/Sarai Rivera",
    src: "songs/puede.mp3",
    cover: "images/puede.jpg",
    hex: "#6B8681",
    barColor: "#ac9250ff"
},
{
    title: "VUELVO A TI",
    artist: "Redimi2/Betsy Jo",
    src: "songs/VUELVO.mp3",
    cover: "images/Gokey.jpg",
    hex: "#5c4134",
    barColor: "#fd7b3aff"
},
{
    title: "Gracias",
    artist: "Redimi2/Marcos Brunet",
    src: "songs/GraciasR.mp3",
    cover: "images/image (6).png",
    hex: "#6c7565",
    barColor: "#d1e65bff"
},
{
    title: "Be Alright",
    artist: "Evan Craft/Danny Gokey/Redimi2",
    src: "songs/Be Alright.mp3",
    cover: "images/alrighty.jpg",
    hex: "#8f4311ff",
    barColor: "#c59c08ff"
},
{
    title: "Pentagrama",
    artist: "Alex Zurdo",
    src: "songs/Penta.mp3",
    cover: "images/Penta.jpg",
    hex: "#A81A77",
    barColor: "#1aa8a6ff"
},
{
    title: "Empezar de Nuevo",
    artist: "Kike Pavón/Funky",
    src: "songs/Empezar.mp3",
    cover: "images/kiki.png",
    hex: "#37353A",
    barColor: "#90a2f5ff"
},
{
    title: "Soy Soldado",
    artist: "Alex Campos/Redimi2",
    src: "songs/soldado.mp3",
    cover: "images/soldado.jpg",
    hex: "#525252",
    barColor: "#887f9dff"
},
{
    title: "Todo Lo Has Cambiado",
    artist: "Danilo Montero/Su Presencia/Thalles Roberto/Victoria Montero",
    src: "songs/Cambiado.mp3",
    cover: "images/Cambiado.jpg",
    hex: "#9E1F10",
    barColor: "#7de6f9ff"
},
{
    title: "Cuando Yo Te Conocí",
    artist: "Alex Zurdo",
    src: "songs/Cuando.mp3",
    cover: "images/Penta.jpg",
    hex: "#A81A77",
    barColor: "#1aa8a6ff"
},
{
    title: "Tú Me Llamas (feat. Musiko)",
    artist: "Deluz/Musiko",
    src: "songs/llamas.mp3",
    cover: "images/llamas.jpg",
    hex: "#64362E",
    barColor: "#de9444ff"
},
{
    title: "Solo tú",
    artist: "Un Corazón/Lead/Kim Richards/Louie Abrego",
    src: "songs/Solo tú.mp3",
    cover: "images/image (3).png",
    hex: "#DB3A1D",
    barColor: "#a236d8ff"
},
{
    title: "Fiesta",
    artist: "Un Corazón/Louie Abrego/Kim Richards/Alex Zurdo",
    src: "songs/Fiesta.mp3",
    cover: "images/song14.png",
    hex: "#368eb6ff",
    barColor: "#d488fdff"
},
{
    title: "Que lo sepa la calle",
    artist: "Un Corazón/Lead/Kim Richards",
    src: "songs/la calle.mp3",
    cover: "images/image (3).png",
    hex: "#DB3A1D",
    barColor: "#a236d8ff"
},
{
    title: "está bien no estar bien :):",
    artist: "PRISMA Más Vida/Un Corazón",
    src: "songs/bien.mp3",
    cover: "images/image (4).png",
    hex: "#9e8b6cff",
    barColor: "#a2f6d7ff"
},
{
    title: "REAL",
    artist: "PRISMA Más Vida/Samu Robles",
    src: "songs/REAL.mp3",
    cover: "images/image (4).png",
    hex: "#9e8b6cff",
    barColor: "#a2f6d7ff"
},
{
    title: "Gracias (Remix)",
    artist: "Majo y Dan/Musiko",
    src: "songs/G_Remix.mp3",
    cover: "images/G_Remix.jpg",
    hex: "#727264",
    barColor: "#a5c255ff"
},
{
    title: "Que Pase El Mundo",
    artist: "Majo y Dan",
    src: "songs/song6 (1).mp3",
    cover: "images/song6 (1).png",
    hex: "#aa6c57ff",
    barColor: "#c55e47ff"
},
{
    title: "Gracias",
    artist: "Majo y Dan/Musiko",
    src: "songs/song7 (1).mp3",
    cover: "images/song7 (1).png",
    hex: "#308090",
    barColor: "#58c22dff"
},
{
    title: "Si Puedes Creer",
    artist: "Musiko/Majo y Dan",
    src: "songs/Si Puedes Creer.mp3",
    cover: "images/Si Puedes Creer.png",
    hex: "#C31307",
    barColor: "#e7c20cff"
},
{
    title: "Laberintos",
    artist: "La Feria Oficial/Majo y Dan",
    src: "songs/song25.mp3",
    cover: "images/song25.png",
    hex: "#683037",
    barColor: "#306854ff"
},
{
    title: "El Secreto",
    artist: "Majo y Dan",
    src: "songs/song26.mp3",
    cover: "images/song26.png",
    hex: "#473F27",
    barColor: "#e7c663ff"
},
{
    title: "Vida Encontré",
    artist: "Majo y Dan",
    src: "songs/song13.mp3",
    cover: "images/song13.png",
    hex: "#283830",
    barColor: "#36a595ff"
},
{
    title: "Volverás",
    artist: "Majo y Dan",
    src: "songs/Volverás.mp3",
    cover: "images/G_Remix.jpg",
    hex: "#727564",
    barColor: "#7a9737ff"
},
{
    title: "Juró Volver",
    artist: "Majo y Dan",
    src: "songs/song10 (1).mp3",
    cover: "images/song10 (1).png",
    hex: "#1F2D4D",
    barColor: "#3f6dd8ff"
},
{
    title: "no te vas",
    artist: "PRISMA Más Vida/Majo y Dan",
    src: "songs/song9 (1).mp3",
    cover: "images/song9 (1).png",
    hex: "#36463E",
    barColor: "#56cb7fff"
}
  /*CHRISTMAS SONGS
  {
    title: "Ha Nacido (Venid y Adoremos)",
    artist: "Un Corazón",
    src: "songs/nacido.mp3",
    cover: "images/nacido.jpg",
    hex: "#367DBA"
  },
  {
    title: "Gloria en las Alturas",
    artist: "Jonathan & Sarah Jerez",
    src: "songs/gloria.mp3",
    cover: "images/gloria.jpg",
    hex: "#88979F"
  },
  {
    title: "Medley Navideño",
    artist: "Los Hermanos Osorio, Evelyn Edith GT",
    src: "songs/medley.mp3",
    cover: "images/medley.png",
    hex: "#1a3c14ff"
  },*/
];

// --- element refs ---
const audio = document.getElementById('audio');
const seekBar = document.getElementById('seek-bar');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playlistEl = document.getElementById('playlist');

const playBtn = document.getElementById('play');
const playIcon = document.getElementById('play-icon');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');

const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('total-duration');
const searchBar = document.getElementById('search-bar');

const playlistWrapper = document.querySelector('.playlist-wrapper');
const togglePlaylistBtn = document.getElementById('toggle-playlist');

const miniCover = document.getElementById('mini-cover');
const miniTitle = document.getElementById('mini-title');
const miniArtist = document.getElementById('mini-artist');
const miniPlay = document.getElementById('mini-play');
const miniPause = document.getElementById('mini-pause');

const visualizer = document.querySelector('.visualizer');

// ================= VISUALIZER (NO AUDIOCONTEXT) =================

let visualizerBars = [];
let visualizerRunning = false;
let currentBarColor = "#ffffff";
let visualizerRAF = null;

// cache bars once
function initVisualizer() {
  if (visualizerBars.length) return;

  visualizerBars = Array.from(document.querySelectorAll(".visualizer .bar"));
}

// fake “energy” generator (smooth + musical)
function getEnergy(time, index) {
  const base =
    Math.sin(time * 2 + index) * 0.5 +
    Math.sin(time * 0.9 + index * 2) * 0.3 +
    Math.random() * 0.1;

  return Math.max(0, base);
}

function animateVisualizer() {
  if (!visualizerRunning) return;

  const time = audio.currentTime;

  visualizerBars.forEach((bar, i) => {
    const energy = getEnergy(time, i);
    const height = 5 + energy * 40;

    bar.style.height = `${height}%`;

    const boost = energy * 55;
    const dark  = shadeHex(currentBarColor, -30 + boost * 0.2);
    const mid   = shadeHex(currentBarColor,   0 + boost * 0.3);
    const light = shadeHex(currentBarColor,  40 + boost * 0.4);

    bar.style.background =
      `linear-gradient(to top, ${dark}, ${mid}, ${light})`;
  });

  visualizerRAF = requestAnimationFrame(animateVisualizer);
}

function startVisualizer() {

  initVisualizer();
  if (visualizerRunning) return;

  visualizerRunning = true;
  visualizer.classList.add("active");

  visualizerBars.forEach(bar => {
    bar.style.height = "5%";
  });

  animateVisualizer();
}

function stopVisualizer() {

  visualizerRunning = false;
  visualizer.classList.remove("active");

  if (visualizerRAF) {
    cancelAnimationFrame(visualizerRAF);
    visualizerRAF = null;
  }

  visualizerBars.forEach(bar => {
    bar.style.height = "5%";
    bar.style.background = "";
  });
}





// umm

miniPlay.addEventListener('click', e => {
  e.stopPropagation();
  audio.play();
});

miniPause.addEventListener('click', e => {
  e.stopPropagation();
  audio.pause();
});

audio.addEventListener('play', () => {
  miniPlay.style.display = 'none';
  miniPause.style.display = 'block';
});

audio.addEventListener('pause', () => {
  miniPlay.style.display = 'block';
  miniPause.style.display = 'none';
});





// --- state ---
let currentSong = 0;
let isPlaying = false;
let repeat = false;
let shuffle = false;
let playlistVisible = true;
let autoScrollEnabled = true;


// shuffle queue + position
let shuffleQueue = [];
let shuffleIndex = -1;

// --- shuffle helpers ---
function createShuffleQueue(startIndex = currentSong) {
  shuffleQueue = Array.from({ length: playlist.length }, (_, i) => i);

  // Fisher–Yates shuffle
  for (let i = shuffleQueue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleQueue[i], shuffleQueue[j]] = [shuffleQueue[j], shuffleQueue[i]];
  }

  // make sure currentSong is at the front, then start after it
  const pos = shuffleQueue.indexOf(startIndex);
  if (pos > -1) {
    [shuffleQueue[0], shuffleQueue[pos]] = [shuffleQueue[pos], shuffleQueue[0]];
  }
  shuffleIndex = 0;
}

function getNextShuffleSong() {
  if (shuffleIndex + 1 >= shuffleQueue.length) {
    createShuffleQueue(currentSong); // reshuffle when done
  }
  shuffleIndex++;
  return shuffleQueue[shuffleIndex];
}

function getPrevShuffleSong() {
  if (shuffleIndex > 0) {
    shuffleIndex--;
    return shuffleQueue[shuffleIndex];
  }
  return currentSong; // stay if no prev
}

function darkenHex(hex, {
  lightness = 200,   // % to darken (higher = darker)
  saturation = 0   // % to reduce saturation (positive = less colorful)
} = {}) {
  let col = hex.replace("#", "");

  if (col.length === 3) {
    col = col.split("").map(c => c + c).join("");
  }

  let r = parseInt(col.substring(0, 2), 16) / 255;
  let g = parseInt(col.substring(2, 4), 16) / 255;
  let b = parseInt(col.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  // --- artistic controls ---
  l = Math.max(0, l - lightness / 100);
  s = Math.max(0, Math.min(1, s - saturation / 100));

  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }

  let r2, g2, b2;

  if (s === 0) {
    r2 = g2 = b2 = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r2 = hue2rgb(p, q, h + 1 / 6);
    g2 = hue2rgb(p, q, h);
    b2 = hue2rgb(p, q, h - 1 / 6);
  }

  return `#${[r2, g2, b2]
    .map(v => Math.round(v * 255).toString(16).padStart(2, "0"))
    .join("")}`;
}



//changing background color
function updatePlaylistGradient(hexColor) {
  const playlistSheet = document.getElementById("playlist-sheet");
  const openPlaylistBtn = document.getElementById("open-playlist");

  const darker = darkenHex(hexColor, {
  lightness: 25,
  saturation: 0
});


  // playlist background gradient
  playlistSheet.style.background =
    `linear-gradient(to bottom, ${hexColor}, ${darker})`;

  // open-playlist button solid color
  openPlaylistBtn.style.backgroundColor = hexColor;
}


// --- load & play ---
function loadSong(index) {


  
  const song = playlist[index];

  audio.src = song.src;

  audio.load();

  
  title.textContent = song.title;
  artist.textContent = song.artist;

  // Update cover immediately
  cover.src = song.cover;
  
  // Mini player
  miniCover.src = song.cover;
  miniTitle.textContent = song.title;
  miniArtist.textContent = song.artist;

  updatePlaylistGradient(song.hex || "#181a1e");
  updateActiveSong();

  currentBarColor = song.barColor;

if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: song.title,
    artist: song.artist,
    artwork: [
      { src: song.cover, sizes: '96x96', type: 'image/jpeg' },
      { src: song.cover, sizes: '128x128', type: 'image/jpeg' },
      { src: song.cover, sizes: '192x192', type: 'image/jpeg' },
      { src: song.cover, sizes: '256x256', type: 'image/jpeg' },
      { src: song.cover, sizes: '384x384', type: 'image/jpeg' },
      { src: song.cover, sizes: '512x512', type: 'image/jpeg' }
    ]
  });

  // Enable playback controls on lock screen
  navigator.mediaSession.setActionHandler('play', () => audio.play());
  navigator.mediaSession.setActionHandler('pause', () => audio.pause());
  navigator.mediaSession.setActionHandler('previoustrack', () => prevBtn.click());
  navigator.mediaSession.setActionHandler('nexttrack', () => nextBtn.click());
}
}


function shadeHex(hex, amount) {
  hex = hex.replace("#", "");

  const hasAlpha = hex.length === 8;

  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);
  let a = hasAlpha ? parseInt(hex.slice(6, 8), 16) / 255 : 1;

  r = Math.min(255, Math.max(0, r + amount));
  g = Math.min(255, Math.max(0, g + amount));
  b = Math.min(255, Math.max(0, b + amount));

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}


function changeSong(index, { animate = true, direction = "next", autoPlay = true } = {}) {
  currentSong = index;
  const song = playlist[index];

  // === IMMEDIATE UI UPDATE (NO DELAYS) ===
  title.textContent = song.title;
  artist.textContent = song.artist;
  miniTitle.textContent = song.title;
  miniArtist.textContent = song.artist;

  miniCover.src = song.cover;

  updatePlaylistGradient(song.hex || "#181a1e");
  updateActiveSong();

  // NEW: Update visualizer color immediately
  currentBarColor = song.barColor;

  // === AUDIO SETUP ===
  audio.src = song.src;
  audio.load();
  
const bgVideo = document.getElementById('bg-video');
const videoOverlay = document.getElementById('video-overlay');
const nowPlayingCover = document.getElementById('cover');

if (song.video) {
  // show video
  bgVideo.src = song.video;
  bgVideo.muted = true;   // allow autoplay
  bgVideo.loop = true;    // optional
  bgVideo.style.display = 'block';
  videoOverlay.style.display = 'block'; // show overlay

  bgVideo.load();
  bgVideo.play().catch(() => {});

  requestAnimationFrame(() => bgVideo.classList.add('show'));

  // fade out cover
  //nowPlayingCover.style.transition = 'opacity 0.5s ease';
  nowPlayingCover.style.opacity = '0';

  // stop visualizer
  visualizer.classList.remove('active');
  stopVisualizer();
} else {
  // hide video
  bgVideo.classList.remove('show');
  setTimeout(() => bgVideo.style.display = 'none', 500);
  videoOverlay.style.display = 'none'; // hide overlay

  // fade cover back in
  setTimeout(() => nowPlayingCover.style.opacity = '1', 600);

  // animate cover if needed
  if (animate) animateCoverChange(song.cover, direction);
  else cover.src = song.cover;

  // start visualizer
  startVisualizer();
}


  // Set up audio to play when ready (only if autoPlay is true)
    if (autoPlay) {
    audio.play().catch(() => {});
  }

    if (animate) {
    animateCoverChange(song.cover, direction);
  } else {
    cover.src = song.cover;
  }

  // Add this to your initialization/loadSong function:
if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: song.title,
    artist: song.artist,
    artwork: [
      { src: song.cover, sizes: '96x96', type: 'image/jpeg' },
      { src: song.cover, sizes: '128x128', type: 'image/jpeg' },
      { src: song.cover, sizes: '192x192', type: 'image/jpeg' },
      { src: song.cover, sizes: '256x256', type: 'image/jpeg' },
      { src: song.cover, sizes: '384x384', type: 'image/jpeg' },
      { src: song.cover, sizes: '512x512', type: 'image/jpeg' }
    ]
  });

  // Enable playback controls on lock screen
  navigator.mediaSession.setActionHandler('play', () => audio.play());
  navigator.mediaSession.setActionHandler('pause', () => audio.pause());
  navigator.mediaSession.setActionHandler('previoustrack', () => prevBtn.click());
  navigator.mediaSession.setActionHandler('nexttrack', () => nextBtn.click());
}

}

function playSong(index) {
  currentSong = index;
  loadSong(index);
  
  const playPromise = audio.play();
}

function togglePlay() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
}

// --- build playlist UI/searchbar ---
function buildPlaylistUI(filterText = "") {
  playlistEl.innerHTML = "";
  const lowerFilter = filterText.toLowerCase();

  playlist.forEach((song, index) => {
    if (song.title.toLowerCase().includes(lowerFilter) || 
        song.artist.toLowerCase().includes(lowerFilter)) 
      {
      const li = document.createElement('li');
       li.classList.add('playlist-item');

      li.innerHTML = `
        <img src="${song.cover}" class="playlist-cover" loading="lazy">
        <div class="playlist-text">
          <div class="playlist-title">${song.title}</div>
          <div class="playlist-artist">${song.artist}</div>
        </div>
      `;

      li.addEventListener('click', () => {
        changeSong(index);
        if (shuffle) createShuffleQueue(index);
      });

      playlistEl.appendChild(li);
    }
  });

  updateActiveSong();
}

// build on load
buildPlaylistUI();

// hook up search
searchBar.addEventListener('input', () => {
  buildPlaylistUI(searchBar.value);
});

// --- update active playlist row ---
function updateActiveSong() {
  const items = document.querySelectorAll('#playlist li');
  items.forEach((item, i) => {
    item.classList.toggle('active', i === currentSong);
    if (i === currentSong) {
      const container = playlistEl; // the scrolling element
      const offset = 320;   //less is higher & more is lower

      const itemTop = item.offsetTop;
      const containerHeight = container.clientHeight;

      container.scrollTo({
        top: itemTop - offset,
        behavior: 'smooth'
      });
    }
  });
}

// --- time formatting ---
function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${secs}`;
}

// --- audio events ---
togglePlaylistBtn.addEventListener('click', () => {
  playlistVisible = !playlistVisible;
  autoScrollEnabled = playlistVisible;

  playlistWrapper.classList.toggle('playlist-hidden', !playlistVisible);
  togglePlaylistBtn.classList.toggle('mode-active', !playlistVisible);
});


audio.addEventListener('timeupdate', () => {
  seekBar.value = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = `/ ${formatTime(audio.duration || 0)}`;
});

audio.addEventListener("play", () => {
  isPlaying = true;
  setPlayIcon(true);
  startVisualizer();
});


seekBar.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
  }
});


audio.addEventListener("pause", () => {
  isPlaying = false;
  setPlayIcon(false);
  stopVisualizer();
});


audio.addEventListener("ended", () => {
  stopVisualizer();

  if (repeat) {
    audio.currentTime = 0;
    audio.play();
    return;
  }

  const next = shuffle
    ? getNextShuffleSong()
    : (currentSong + 1) % playlist.length;

  changeSong(next);
});

// --- controls ---
playBtn.addEventListener('click', togglePlay);

nextBtn.addEventListener('click', () => {
  let nextIndex;
  if (shuffle) {
    nextIndex = getNextShuffleSong();
  } else {
    nextIndex = (currentSong + 1) % playlist.length;
  }
  changeSong(nextIndex, { animate: true, direction: "next" });
});

prevBtn.addEventListener('click', () => {
  let prevIndex;
  if (shuffle) {
    prevIndex = getPrevShuffleSong();
  } else {
    prevIndex = (currentSong - 1 + playlist.length) % playlist.length;
  }
  changeSong(prevIndex, { animate: true, direction: "prev" });
});




// --- repeat & shuffle toggles ---
function setToggleButtonState(button, enabled) {
  if (enabled) {
    button.classList.add('mode-active');
    button.setAttribute('aria-pressed', 'true');
  } else {
    button.classList.remove('mode-active');
    button.setAttribute('aria-pressed', 'false');
  }
}

shuffleBtn.addEventListener('click', () => {
  shuffle = !shuffle;
  if (shuffle) {
    repeat = false;
    createShuffleQueue(currentSong);
  }
  setToggleButtonState(shuffleBtn, shuffle);
  setToggleButtonState(repeatBtn, repeat);
});

repeatBtn.addEventListener('click', () => {
  repeat = !repeat;
  if (repeat) shuffle = false;
  setToggleButtonState(repeatBtn, repeat);
  setToggleButtonState(shuffleBtn, shuffle);
});

// --- play/pause icon ---
function setPlayIcon(isNowPlaying) {
  playBtn.innerHTML = isNowPlaying
    ? `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.07612 8.61732C8 8.80109 8 9.03406 8 9.5V14.5C8 14.9659 8 15.1989 8.07612 15.3827C8.17761 15.6277 8.37229 15.8224 8.61732 15.9239C8.80109 16 9.03406 16 9.5 16C9.96594 16 10.1989 16 10.3827 15.9239C10.6277 15.8224 10.8224 15.6277 10.9239 15.3827C11 15.1989 11 14.9659 11 14.5V9.5C11 9.03406 11 8.80109 10.9239 8.61732C10.8224 8.37229 10.6277 8.17761 10.3827 8.07612C10.1989 8 9.96594 8 9.5 8C9.03406 8 8.80109 8 8.61732 8.07612C8.37229 8.17761 8.17761 8.37229 8.07612 8.61732ZM13.0761 8.61732C13 8.80109 13 9.03406 13 9.5V14.5C13 14.9659 13 15.1989 13.0761 15.3827C13.1776 15.6277 13.3723 15.8224 13.6173 15.9239C13.8011 16 14.0341 16 14.5 16C14.9659 16 15.1989 16 15.3827 15.9239C15.6277 15.8224 15.8224 15.6277 15.9239 15.3827C16 15.1989 16 14.9659 16 14.5V9.5C16 9.03406 16 8.80109 15.9239 8.61732C15.8224 8.37229 15.6277 8.17761 15.3827 8.07612C15.1989 8 14.9659 8 14.5 8C14.0341 8 13.8011 8 13.6173 8.07612C13.3723 8.17761 13.1776 8.37229 13.0761 8.61732Z" fill="#ffffff"></path> </g></svg>`
    : `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#ffffff"></path> </g></svg>`;
}


// button code becuase im too lazy to organize anymore
const openPlaylistBtn = document.getElementById("open-playlist");
const playlistSheet = document.getElementById("playlist-sheet");

openPlaylistBtn.addEventListener("click", () => {
  // force browser to register closed state before opening
  if (!playlistSheet.classList.contains("open")) {
    playlistSheet.getBoundingClientRect();
  }

  playlistSheet.classList.toggle("open");
});

/* close playlist when menu button is pressed */
togglePlaylistBtn.addEventListener("click", () => {
  playlistSheet.classList.remove("open");
});

// CHANGE SONG COVER ANIMATION THINGYMABOB
function animateCoverChange(newCoverSrc, direction = "next", callback) {
  const cover = document.getElementById("cover");
  const slideOutClass = direction === "next" ? "slide-out-left" : "slide-out-right";
  const slideInClass = direction === "next" ? "slide-in-right" : "slide-in-left";

  // 1. Slide OLD cover out
  cover.classList.add(slideOutClass);

  setTimeout(() => {
    // 2. Freeze transitions and move off-screen opposite side
    cover.classList.add("no-transition");
    cover.classList.remove(slideOutClass);

    // 3. Change the image while off-screen
    cover.src = newCoverSrc;

    // 4. Position new image off-screen on the opposite side
    cover.classList.add(slideInClass);

    // Force browser to commit layout
    cover.getBoundingClientRect();

    // 5. Re-enable transition and slide in
    requestAnimationFrame(() => {
      cover.classList.remove("no-transition");
      cover.classList.remove(slideInClass);

      // 6. Call callback after slide-in finishes
      if (callback) callback();
    });

  }, 550); // match CSS slide-out duration
}






// --- init ---
currentSong = 0;
loadSong(currentSong); // Just load, don't play
updateActiveSong();
setPlayIcon(false); // Show play icon (paused state)
const videoOverlay = document.getElementById('video-overlay');
videoOverlay.style.display = 'none';
