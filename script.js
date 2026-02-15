const playlist = [
  {
    title: "Cordero", //0
    artist: "Manuel Bonilla",
    src: "songs/Cordero.mp3",
    cover: "images/song5.jpg",
    hex: "#026107ff",
    barColor: "#009708ff"
  },
  {
    title: "Escucharte Hablar / Dios Ha Sido Bueno",
    artist: "Marcos Witt/Indiomar/Dariana",
    src: "songs/SpotiDownloader.com - Escucharte Hablar _ Dios Ha Sido Bueno - Marcos Witt.mp3",
    cover: "images/Cover of Escucharte Hablar _ Dios Ha Sido Bueno by Marcos Witt, Indiomar, Dariana (1).jpg",
    hex: "#535353",
    barColor: "#b8b8b8d8",
    libs: ["favorites", "spanish"]
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
    barColor: "#933506ff",
    libs: ["favorites", "spanish"]
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
    title: "Cuando Muera Yo Ft. Los Hermanos Reyes",//5
    artist: "Los Voceros de Cristo/Los Hermanos Reyes",
    src: "songs/Cuando Muera Yo.mp3",
    cover: "images/Cuando Muera Yo.png",
    hex: "#1c1d3a",
    barColor: "#726065d5",
    video: "videos/Voceros2.mp4",
    libs: ["favorites", "spanish"]
  },
  {
    title: "A Tu Lado en el Cielo",
    artist: "Los Voceros de Cristo",
    src: "songs/SpotiDownloader.com - A Tu Lado en el Cielo - Los Voceros de Cristo.mp3",
    cover: "images/Alvaro.jpg",
    hex: "#4f300cff",
    barColor: "#825959d5",
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
    title: "Apocalipsis 15:3",//8
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
    title: "Oh Alma Mía (2024)",//10
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
    title: "Mi cántaro vacío",//20
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
    title: "El volverá", //23
    artist: "Los Voceros de Cristo/Aníbal Marroquín",
    src: "songs/volverá.mp3",
    cover: "images/new4.png",
    hex: "#313831",
    barColor: "#527052ff"
  },
  {
    title: "Que Feliz Estoy",//24
    artist: "Francisco Orantes",
    src: "songs/SpotiDownloader.com - Que Feliz Estoy - Francisco Orantes.mp3",
    cover: "images/song10.png",
    hex: "#A16962",
    barColor: "#b84e40ff"
  },
  {
    title: "Por Herencia",//25
    artist: "Francisco Orantes/Marilú Orantes",
    src: "songs/Por Herencia.mp3",
    cover: "images/Por Herencia.jpg",
    hex: "#5a240cff",
    barColor: "#992e00ff"
  },
  {
    title: "Jesús",//26
    artist: "Francisco Orantes",
    src: "songs/Jesús.mp3",
    cover: "images/Jesús.jpg",
    hex: "#08186C",
    barColor: "#001db0ff"
  },
  {
    title: "Necesito De Ti",//27
    artist: "Francisco Orantes",
    src: "songs/Necesito De Ti.mp3",
    cover: "images/song10.png",
    hex: "#A16962",
    barColor: "#b84e40ff"
  },
  {
    title: "Te Necesito",//28
    artist: "Los Hermanos Reyes",
    src: "songs/Te necesito.mp3",
    cover: "images/Hay una ciudad.png",
    hex: "#bb9b31ff",
    barColor: "#d3a50cff"
  },
  {
    title: "Su amor siempre es su amor",//29
    artist: "Los Voceros de Cristo/Ruth E. Gomez",
    src: "songs/su amor.mp3",
    cover: "images/su amor.jpg",
    hex: "#313831",
    barColor: "#527052ff"
  },
  {
    title: "La Perdida Oveja",//30
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
    title: "Que Bueno es El Señor",//35
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
    title: "Hay una Ciudad",//40
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
    title: "Alto Precio",//45
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
    title: "Buscale",//50
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
    title: "Tu Fidelidad",//55
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
    title: "Primero Dios, Vol. 5",//60
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
    title: "Loor a ti mi Dios",//65
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
    title: "Esa Roca",//67
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
    title: "No Te Voy A Dejar",//70
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
    title: "Escogido fui de Dios",//75
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
    barColor: "#01ad91ff",
    libs: ["favorites", "spanish"]
},
{
    title: "Sueños",//80
    artist: "Un Corazón",
    src: "songs/song14.mp3",
    cover: "images/suenos.jpg",
    hex: "#504878",
    barColor: "#2204b3ff",
    libs: ["favorites", "spanish"]
},
{
    title: "¿Cómo Podré Pagarte?",
    artist: "Leonel Tuchez",
    src: "songs/song15.mp3",
    cover: "images/song15.png",
    hex: "#632D07",
    barColor: "#ca5501ff",
    libs: ["favorites", "spanish"]
},
{
    title: "Más Que Nunca Ft. Danilo Montero",
    artist: "Un Corazón",
    src: "songs/song16.mp3",
    cover: "images/song16.png",
    hex: "#464D2E",
    barColor: "#6f881bff",
    libs: ["favorites", "spanish"]
},
{
    title: "Cuando Te Encontré",
    artist: "Rojo/Strings & Heart",
    src: "songs/Cuando (1).mp3",
    cover: "images/Cuando.jpg",
    hex: "#949494",
    barColor: "#94a9d3ff",
    libs: ["favorites", "spanish"]
},
{
    title: "Eres Todopoderoso",
    artist: "Rojo",
    src: "songs/song12.mp3",
    cover: "images/song12.png",
    hex: "#680519",
    barColor: "#ad0330ff",
    libs: ["favorites", "spanish"]
},
{
    title: "Tu Amor Hace Eco En Todo Mi Universo", //85
    artist: "Rojo",
    src: "songs/song17.mp3",
    cover: "images/song17.png",
    hex: "#727272",
    barColor: "#dbb8b8ff",
    libs: ["favorites", "spanish"]
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
    title: "Deja las Drogas",//90
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
    title: "Que Bueno Es El Señor",//95
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
    title: "Una Locura",
    artist: "Musiko/La Feria Oficial",
    src: "songs/SpotiDownloader.com - Una Locura - Musiko.mp3",
    cover: "images/Si Puedes Creer.png",
    hex: "#C31307",
    barColor: "#e7c20cff"
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
    title: "El Nombre De Jesús",//100
    artist: "Redimi2/Christine D'Clario",
    src: "songs/Nombre.mp3",
    cover: "images/image (5).png",
    hex: "#44563a",
    barColor: "#e4c75258",
    video: "videos/Redimi2.mp4"
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
    title: "Arde En Mi",//105
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
    barColor: "#6bb791ff",
    libs: ["favorites", "spanish"]
},
{
    title: "El Mood",
    artist: "Redimi2",
    src: "songs/SpotiDownloader.com - El mood - Redimi2.mp3",
    cover: "images/puede.jpg",
    hex: "#293550",
    barColor: "#b5783aff",
    video: "videos/Redimi1.mp4",
    libs: ["favorites", "spanish"]
},
{
    title: "dIOS",
    artist: "Kim Richards/Indiomar/Redimi2",
    src: "songs/SpotiDownloader.com - dIOS - Kim Richards.mp3",
    cover: "images/Cover of dIOS by Kim Richards, Indiomar, Redimi2.jpg",
    hex: "#DA262E",
    barColor: "#ffb7bbff",
},
{
    title: "Flipando",
    artist: "Redimi2/Natan El Profeta",
    src: "songs/REDIMI2, NATAN EL PROFETA - FLIPANDO (VIDEO OFICIAL)_1080p.mp3",
    cover: "images/Cover of Flipando by Redimi2, Natan El Profeta.jpg",
    hex: "#1b5d9f",
    barColor: "#f7cd24ff",
    libs: ["favorites", "spanish"]
},
{
    title: "Cumbia de Mi Libertad",//110
    artist: "Redimi2",
    src: "songs/Redimi2 - Cumbia de Mi Libertad (video oficial)_320p.mp3",
    cover: "images/Cover of Flipando by Redimi2, Natan El Profeta.jpg",
    hex: "#3b7c60",
    barColor: "#f7cd24d8",
    video: "videos/Redimi4.mp4",
},
{
    title: "CMR4: El Museo",
    artist: "Alex Zurdo/Natan El Profeta",
    src: "songs/SpotiDownloader.com - CMR4_ El Museo - Alex Zurdo.mp3",
    cover: "images/Cover of CMR4_ El Museo by Alex Zurdo, Natan El Profeta.jpg",
    hex: "#1F4030",
    barColor: "#dac341d8",
},
{
    title: "Gracias Gracias Gracias",
    artist: "Redimi2/Madiel Lara",
    src: "songs/SpotiDownloader.com - Gracias Gracias Gracias - Redimi2.mp3",
    cover: "images/Cover of Flipando by Redimi2, Natan El Profeta.jpg",
    hex: "#1b5d9f",
    barColor: "#f7cd24ff",
},
{
    title: "El Culpable ft Dariana",
    artist: "Alex Zurdo/Funky/Dariana",
    src: "songs/El Culpable - Alex Zurdo, Funky ft. Dariana (Video Oficial)_320p.mp3",
    cover: "images/Cover of El Culpable by Funky, Alex Zurdo, Dariana.jpg",
    hex: "#D03030",
    barColor: "#fb965fff",
},
{
    title: "INFINITO",
    artist: "Madiel Lara",
    src: "songs/SpotiDownloader.com - INFINITO - Madiel Lara.mp3",
    cover: "images/Cover of INFINITO by Madiel Lara.jpg",
    hex: "#D28432",
    barColor: "#ffdf89ff",
},
{
    title: "A Pesar de Mí",//115
    artist: "Alex Zurdo/Funky/Redimi2/Un Corazón/Abby Valdez/Indiomar",
    src: "songs/SpotiDownloader.com - A Pesar de Mí (feat. Un Corazón, Abby Valdez, Indiomar) - Alex Zurdo.mp3",
    cover: "images/Cover of A Pesar de Mí (feat. Un Corazón, Abby Valdez, Indiomar) by Alex Zurdo, Funky, Redimi2, Un Corazón, Abby Valdez, Indiomar.jpg",
    hex: "#402727",
    barColor: "#fbf5d7ff",
},
{
    title: "365",
    artist: "Dariana",
    src: "songs/SpotiDownloader.com - 365 - Dariana.mp3",
    cover: "images/Cover of 365 by Dariana.jpg",
    hex: "#189E76",
    barColor: "#01f079ff",
},
{
    title: "Polaris",
    artist: "Dariana",
    src: "songs/SpotiDownloader.com - Polaris - Dariana.mp3",
    cover: "images/Cover of Polaris by Dariana.jpg",
    hex: "#189E76",
    barColor: "#01f079ff",
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
    title: "Mi Dios Puede",//120
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
    hex: "#443124",
    barColor: "#acc508d9",
    video: "videos/Redimi3.mp4"
},
{
    title: "Eres Mi Bendicion",
    artist: "Funky/Alex Zurdo",
    src: "songs/SpotiDownloader.com - Eres Mi Bendicion (feat. Alex Zurdo) - Funky.mp3",
    cover: "images/Cover of Eres Mi Bendicion (feat. Alex Zurdo) by Funky, Alex Zurdo.jpg",
    hex: "#484060",
    barColor: "979ec9d9"
},
{
    title: "Pentagrama",//125
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
    title: "Tú Me Llamas (feat. Musiko)",//130
    artist: "Deluz/Musiko",
    src: "songs/llamas.mp3",
    cover: "images/llamas.jpg",
    hex: "#64362E",
    barColor: "#de9444ff"
},
{
    title: "Soñe",
    artist: "Musiko/Josh Gamez",
    src: "songs/SpotiDownloader.com - Soñe - Musiko.mp3",
    cover: "images/Si Puedes Creer.png",
    hex: "#C31307",
    barColor: "#e7c20cff"
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
    title: "está bien no estar bien :):",//135
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
    title: "Es por Fe",//140
    artist: "Generación 12/Musiko/Stefy Espinosa",
    src: "songs/SpotiDownloader.com - Es por Fe - Generación 12.mp3",
    cover: "images/Cover of Es por Fe by Generación 12, Musiko, Stefy Espinosa.jpg",
    hex: "#77676F",
    barColor: "#eecbddd8",
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
    title: "Lo Que Pasó Pasó",
    artist: "Musiko/Pedro Pablo Quintero",
    src: "songs/SpotiDownloader.com - Lo Que Pasó Pasó - Musiko.mp3",
    cover: "images/Cover of Lo Que Pasó Pasó by Musiko, Pedro Pablo Quintero.jpg",
    hex: "#EE3F2F",
    barColor: "#f6beb9",
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
    title: "Vida Encontré",//145
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
},
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
{
    title: "En Las Penas de Mi Alma Ft. Los Voceros de Cristo",//149
    artist: "Los Milagros de Cristo/Los Voceros de Cristo",
    src: "songs/Los Milagros de Cristo ft. Los Voceros de Cristo - En Las Penas de Mi Alma - 35 Años (En Vivo)_320p.mp3",
    cover: "images/Cover of Exitos.jpg",
    hex: "#1e233f",
    barColor: "#041ec4d7",
    video: "videos/Voceros3.mp4",
},
{
    title: "Salmo 23",//150
    artist: "Leonel Tuchez",
    src: "songs/SpotiDownloader.com - Salmo 23 - Leonel Tuchez.mp3",
    cover: "images/Cover of Salmo 23 by Leonel Tuchez.jpg",
    hex: "#9E9698",
    barColor: "#8fdac3"
},
{
    title: "Esta Cayendo",
    artist: "Jose Luis Reyes",
    src: "songs/SpotiDownloader.com - Esta Cayendo - Jose Luis Reyes.mp3",
    cover: "images/Cover of Esta Cayendo by Jose Luis Reyes.jpg",
    hex: "#5E5759",
    barColor: "#cfc978"
},
{
    title: "BUENA ONDA",//152
    artist: "Redimi2",
    src: "songs/SpotiDownloader.com - BUENA ONDA - Redimi2.mp3",
    cover: "images/Gokey.jpg",
    hex: "#4d372cff",
    barColor: "#fd7b3aff"
},
{
    title: "TENGO EL DON",
    artist: "Redimi2/Ander Brock",
    src: "songs/SpotiDownloader.com - TENGO EL DON - Redimi2.mp3",
    cover: "images/Gokey.jpg",
    hex: "#633c29",
    barColor: "#fd7b3ad8",
    video: "videos/Redimi5.mp4",
},
{
    title: "Abba",
    artist: "Redimi2/Distrito Royal/Samantha Kate",
    src: "songs/SpotiDownloader.com - Abba - Redimi2.mp3",
    cover: "images/Cover of Flipando by Redimi2, Natan El Profeta.jpg",
    hex: "#1b5d9f",
    barColor: "#f7cd24ff",
},
{
    title: "Bacha Drill",//155
    artist: "Redimi2/Madiel Lara",
    src: "songs/SpotiDownloader.com - Bacha Drill - Redimi2.mp3",
    cover: "images/Cover of Bacha Drill by Redimi2, Madiel Lara.jpg",
    hex: "#0876EE",
    barColor: "#fd6937ff"
},
{
    title: "Colores",
    artist: "Redimi2/Funky/Alex Zurdo",
    src: "songs/SpotiDownloader.com - Colores - Redimi2.mp3",
    cover: "images/Cover of Colores by Redimi2, Funky, Alex Zurdo.jpg",
    hex: "#6E9E9E",
    barColor: "#ffe96dff"
},
{
    title: "A Pesar de Mí - Live",
    artist: "Redimi2/Funky/Alex Zurdo/Indiomar",
    src: "songs/SpotiDownloader.com - A Pesar de Mí - Live - Redimi2.mp3",
    cover: "images/Cover of A Pesar de Mí - Live by Redimi2, Funky, Alex Zurdo, Indiomar.jpg",
    hex: "#E47436",
    barColor: "#ff9c72ff"
},
{
    title: "Esto Suena Bien",
    artist: "Redimi2/Alex Zurdo/Oveja Cosmica",
    src: "songs/SpotiDownloader.com - Esto Suena Bien - Redimi2.mp3",
    cover: "images/Cover of Esto Suena Bien by Redimi2, Alexis Velez, Oveja Cosmica.jpg",
    hex: "#53423c",
    barColor: "#aa8a72ff"
},
{
    title: "Quita y Pon",//159
    artist: "Alex Zurdo/Funky/Redimi2/Peter Metivier",
    src: "songs/SpotiDownloader.com - Quita y Pon (feat. Peter Metivier) - Alex Zurdo.mp3",
    cover: "images/Cover of A Pesar de Mí (feat. Un Corazón, Abby Valdez, Indiomar) by Alex Zurdo, Funky, Redimi2, Un Corazón, Abby Valdez, Indiomar.jpg",
    hex: "#402727",
    barColor: "#fbf5d7ff",
},
  {
    title: "Replay",//160
    artist: "Redimi2/Samantha Kate",
    src: "songs/SpotiDownloader.com - Replay - Redimi2.mp3",
    cover: "images/Bien.jpg",
    hex: "#747474",
    barColor: "#a397bcff"
  },
];

//playlist order 
const playlistOrder = {
  Worship: [14, 51, 66, 95, 15, 150, 149, 151, 16, 2, 7, 3, 4, 8, 9, 72,10, 17, 18, 19, 20, 1, 0, 12, 23, 24, 26, 27, 28, 29, 30, 32, 33, 34, 35, 37, 38, 40, 41, 44, 46, 49, 50, 54, 55, 57, 61, 63, 70, 71, 73, 74, 81, 91, 92],
  Voceros: [149, 5, 6, 8, 10, 14, 19, 20, 21, 11, 22, 23, 29, 12, 30, 31, 48, 64, 13, 65, 75],
  Reggaeton: [107, 109, 110, 152, 153, 113, 108, 119, 120, 155, 154, 156, 157, 158, 159, 111, 112, 114, 115, 116, 100, 101, 103, 102, 96, 131, 97, 99, 118, 106, 123, 135, 132, 130, 136, 142, 125, 127, 124, 160],
  upbeat: [112, 114, 140, 139, 141, 145, 146, 130, 131, 126, 124, 125, 127, 128, 129, 98, 99, 103, 123, 83, 84, 85, 86, 87, 88, 77, 79, 132, 133, 135, 136, 5, 6,],
  majoYDan: [145, 139, 141, 138, 137, 131, 146, 147, 148, 143, 144],
};




// --- element refs ---
const libraryPlaylistCover = document.getElementById('libraryPlaylistCover');

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

const libraryPlaylistEl = document.getElementById('libraryPlaylist');
const libraryTitle = document.getElementById('libraryTitle');

let currentLibraryQueue = [];
let libraryQueueIndex = 0;
let usingLibraryQueue = false;


// music timer 
const timerBtn = document.getElementById('timer');
const timerScreen = document.getElementById('timerScreen');
const timerMinutesInput = document.getElementById('timerMinutes');
const startTimerBtn = document.getElementById('startTimer');
const cancelTimerBtn = document.getElementById('cancelTimer');


// Queue refs 
const queueBtn = document.getElementById('queue'); 
const queueScreen = document.getElementById('queueScreen');
const queueList = document.getElementById('queueList');
const closeQueueBtn = document.querySelector('.close-queue');

// Replace the DOMContentLoaded section with this:
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.screen-track');

  const navAll = document.getElementById('nav-all');
  const navLibrary = document.getElementById('nav-library');
  const navPlaylists = document.getElementById('nav-playlist');

  function goToScreen(index) {
    track.style.transform = `translateX(-${index * 100}vw)`;

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    if (index === 0) navAll.classList.add('active');
    if (index === 1) navLibrary.classList.add('active');
    if (index === 2) navPlaylists.classList.add('active');
  }

  navAll.addEventListener('click', () => goToScreen(0));
  navLibrary.addEventListener('click', () => goToScreen(1));
  navPlaylists.addEventListener('click', () => goToScreen(2));

  // Ensure correct initial state
  goToScreen(1);

  // Add back button functionality
  const libraryBackBtn = document.getElementById('libraryBackBtn');
  if (libraryBackBtn) {
    libraryBackBtn.addEventListener('click', () => goToScreen(1));
  }

  function buildLibraryPlaylist(libKey) {
    libraryPlaylistEl.innerHTML = '';

    const order = playlistOrder[libKey];
    
    if (!order || !Array.isArray(order)) {
      console.error('Invalid playlist order for key:', libKey);
      return;
    }

    currentLibraryQueue = [...order]; // save play order

    order.forEach(songIndex => {
      // Check if songIndex exists in playlist
      if (songIndex < 0 || songIndex >= playlist.length) {
        console.warn(`Song index ${songIndex} not found in playlist for ${libKey}`);
        return;
      }
      
      const song = playlist[songIndex];

      const li = document.createElement('li');
      li.className = 'library-playlist-item';

      li.innerHTML = `
  <img src="${song.cover}" class="libraryPlaylist-cover" loading="lazy">

  <div class="libraryPlaylist-text">
    <div class="libraryPlaylist-title">${song.title}</div>
    <div class="libraryPlaylist-artist">${song.artist}</div>
  </div>

  <button class="options-btn">
    <svg viewBox="0 0 16 16" fill="#ffffff">
      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
    </svg>
  </button>
`;

const optionsBtn = li.querySelector('.options-btn');

optionsBtn.addEventListener('click', (e) => {
  e.stopPropagation();   // DO NOT play the song
  openSongOptionsPopup(optionsBtn, songIndex);

  
});


      li.addEventListener('click', () => {
        usingLibraryQueue = true;
        
        // Find the index of this song in the current library queue
        const songPos = currentLibraryQueue.indexOf(songIndex);
        if (songPos !== -1) {
          libraryQueueIndex = songPos;
        } else {
          libraryQueueIndex = 0;
        }
        
        // Reset shuffle since we're using library order
        if (shuffle) {
          createLibraryShuffleQueue(libraryQueueIndex)
        }
        
        changeSong(songIndex);
      });

      libraryPlaylistEl.appendChild(li);
    });

    goToScreen(2); // Go to library playlist screen
  }

  // Function to open library playlist
  function openLibraryPlaylist(key) {
    buildLibraryPlaylist(key);
  }

  document.querySelectorAll('.library-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.library;

    // get the image from the library tile
    const img = btn.querySelector('img').src;

    // animate + swap
    libraryPlaylistCover.classList.add('pop');
    libraryPlaylistCover.src = img;

    setTimeout(() => {
      libraryPlaylistCover.classList.remove('pop');
    }, 300);

    openLibraryPlaylist(key);
  });
});

});




// Check if device is desktop
const IS_DESKTOP = window.innerWidth >= 550 && window.innerWidth <= 1450 && window.innerHeight <= 800;


//resizing cover width if too wide and not tall enough 
function updateCoverSize() {
  const nowPlayingImg = document.getElementById('cover');
  const playerContainer = document.querySelector('.player');
  const libraryPlaylist = document.querySelector('#libraryPlaylist');
  
  if (IS_DESKTOP) {
    nowPlayingImg.style.maxWidth = '350px';
    nowPlayingImg.style.marginBottom = '0.8rem';
    playerContainer.style.marginTop = '0px';
    libraryPlaylist.style.maxHeight = 'calc(100% - 60%)'
  } else {
    nowPlayingImg.style.maxWidth = '400px';
    nowPlayingImg.style.marginBottom = '1.5rem';
    playerContainer.style.marginTop = '20px';
    libraryPlaylist.style.maxHeight = 'calc(100% - 52%)'
  }
}

// Initial call
updateCoverSize();

// Update on window resize
window.addEventListener('resize', () => {
  const wasDesktop = IS_DESKTOP;
  IS_DESKTOP = window.innerWidth >= 768;
  
  // Only update if the state changed
  if (wasDesktop !== IS_DESKTOP) {
    updateCoverSize();
  }
});

// Open queue screen
queueBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  queueScreen.classList.add('open');
  renderQueueUI();
});

// Close queue screen
closeQueueBtn.addEventListener('click', () => {
  queueScreen.classList.remove('open');
});

// Close queue screen when clicking outside
document.addEventListener('click', (e) => {
  if (queueScreen.classList.contains('open') && 
      !queueScreen.contains(e.target) && 
      !queueBtn.contains(e.target)) {
    queueScreen.classList.remove('open');
  }
});

// Render queue UI function
function renderQueueUI() {
  queueList.innerHTML = '';
  
  // Show current song first
  const currentItem = document.createElement('div');
  currentItem.className = 'queue-item active-queue-song';
  currentItem.innerHTML = `
    <img src="${playlist[currentSong].cover}" class="queue-cover">
    <div class="queue-text">
      <div>${playlist[currentSong].title} (Now Playing)</div>
      <div>${playlist[currentSong].artist}</div>
    </div>
  `;
  queueList.appendChild(currentItem);
  
  // Show queue items
  queue.forEach((songIndex, i) => {
    const song = playlist[songIndex];
    
    const item = document.createElement('div');
    item.className = 'queue-item';
    item.innerHTML = `
      <img src="${song.cover}" class="queue-cover">
      <div class="queue-text">
        <div>${song.title}</div>
        <div>${song.artist}</div>
      </div>
    `;
    
    item.addEventListener('click', () => {
      // Play this song from queue
      queueIndex = i;
      changeSong(songIndex);
      renderQueueUI(); // Refresh to update active state
    });
    
    queueList.appendChild(item);
  });
  
  // If queue is empty, show message
  if (queue.length === 0) {
    const emptyMsg = document.createElement('div');
    emptyMsg.className = 'queue-empty';
    emptyMsg.textContent = 'Queue is empty. Add songs from the playlist.';
    emptyMsg.style.textAlign = 'center';
    emptyMsg.style.opacity = '0.6';
    emptyMsg.style.padding = '40px 20px';
    queueList.appendChild(emptyMsg);
  }
}

// Update the queue when songs change
audio.addEventListener('play', renderQueueUI);




// queue
let queue = [];
let queueIndex = 0; // position inside queue

// music popup
let currentOptionsPopup = null;

function openSongOptionsPopup(button, songIndex) {
  // Remove old popup if it exists
  if (currentOptionsPopup) {
    currentOptionsPopup.remove();
    currentOptionsPopup = null;
  }

  const popup = document.createElement('div');
  popup.className = 'song-options-popup';
  popup.innerHTML = `
    <div class="option-item" onclick="addToQueue(${songIndex})">Add to Queue</div>
  `;

  document.body.appendChild(popup);

  // Position next to the button
  const rect = button.getBoundingClientRect();
  popup.style.top = rect.top + window.scrollY + "px";
  popup.style.left = rect.left - 150 + "px";

  currentOptionsPopup = popup;

  // Close when clicking elsewhere
  setTimeout(() => {
    document.addEventListener('click', closeOptionsPopup, { once: true });
  }, 0);
}

function closeOptionsPopup() {
  if (currentOptionsPopup) {
    currentOptionsPopup.remove();
    currentOptionsPopup = null;
  }
}


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

queue.forEach((songIndex, i) => {
  const song = playlist[songIndex];

  const item = document.createElement('div');
  item.className = 'queue-item';

  if (i === queueIndex) {
    item.classList.add('active-queue-song');
  }

  item.innerHTML = `
    <img src="${song.cover}" class="queue-cover">
    <div class="queue-text">
      <div>${song.title}</div>
      <div>${song.artist}</div>
    </div>
  `;

  item.addEventListener('click', () => {
    queueIndex = i;
    changeSong(songIndex);
    renderQueueUI();
  });

  queueContent.appendChild(item);
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
let libraryShuffleQueue = [];
let libraryShuffleIndex = -1;


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

function createLibraryShuffleQueue(startIndexInLibrary) {
  libraryShuffleQueue = [...currentLibraryQueue];

  // Fisher–Yates
  for (let i = libraryShuffleQueue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [libraryShuffleQueue[i], libraryShuffleQueue[j]] =
      [libraryShuffleQueue[j], libraryShuffleQueue[i]];
  }

  // Put current song first
  const currentSongIndex = currentLibraryQueue[startIndexInLibrary];
  const pos = libraryShuffleQueue.indexOf(currentSongIndex);

  if (pos > -1) {
    [libraryShuffleQueue[0], libraryShuffleQueue[pos]] =
      [libraryShuffleQueue[pos], libraryShuffleQueue[0]];
  }

  libraryShuffleIndex = 0;
}

function getNextLibraryShuffleSong() {
  if (libraryShuffleIndex + 1 >= libraryShuffleQueue.length) {
    createLibraryShuffleQueue(libraryQueueIndex);
  }
  libraryShuffleIndex++;
  return libraryShuffleQueue[libraryShuffleIndex];
}

function getPrevLibraryShuffleSong() {
  if (libraryShuffleIndex > 0) {
    libraryShuffleIndex--;
    return libraryShuffleQueue[libraryShuffleIndex];
  }
  return currentSong;
}

const libraryBigPlay = document.getElementById('libraryBigPlay');
const libraryBigShuffle = document.getElementById('libraryBigShuffle');

libraryBigPlay.addEventListener('click', () => {
  if (!currentLibraryQueue.length) return;

  usingLibraryQueue = true;
  shuffle = false;
  setToggleButtonState(shuffleBtn, false);

  libraryQueueIndex = 0;
  const firstSongIndex = currentLibraryQueue[0];

  changeSong(firstSongIndex);
});


libraryBigShuffle.addEventListener('click', () => {
  if (!currentLibraryQueue.length) return;

  usingLibraryQueue = true;
  shuffle = true;
  setToggleButtonState(shuffleBtn, true);

  // --- create a true random order of the library ---
  libraryShuffleQueue = [...currentLibraryQueue];

  for (let i = libraryShuffleQueue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [libraryShuffleQueue[i], libraryShuffleQueue[j]] =
      [libraryShuffleQueue[j], libraryShuffleQueue[i]];
  }

  // Start at the first random song
  libraryShuffleIndex = 0;

  const firstRandomSong = libraryShuffleQueue[0];

  // Sync libraryQueueIndex to the random song
  libraryQueueIndex = currentLibraryQueue.indexOf(firstRandomSong);

  changeSong(firstRandomSong);
});



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
  // Rebuild queue from this song onward (INDEXES)
//queue = [];
//for (let i = index + 1; i < playlist.length; i++) {
  //queue.push(i);
//}
//queueIndex = -1;

// If we're in library mode but clicked a song not in the library queue, exit library mode
  if (usingLibraryQueue && currentLibraryQueue.length > 0) {
    if (!currentLibraryQueue.includes(index)) {
      usingLibraryQueue = false;
      libraryQueueIndex = 0;
    }
  }  


  currentSong = index;
  
  // --- keep library queue in sync with the real song ---
if (usingLibraryQueue && currentLibraryQueue.length) {
  const pos = currentLibraryQueue.indexOf(index);

  if (pos !== -1) {
    libraryQueueIndex = pos;
  } else {
    // user escaped library by picking a song not in it
    usingLibraryQueue = false;
  }
}


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

// Build queue from this point forward
  //queue = playlist.slice(index);
  //queueIndex = 0;

  //loadSong(queue[queueIndex]);
  //audio.play();

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

      <button class="options-btn">
      <svg viewBox="0 0 16 16" fill="#ffffff">
      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
      </svg>
      </button>
      `;

      const optionsBtn = li.querySelector('.options-btn');

      optionsBtn.addEventListener('click', (e) => {  
        e.stopPropagation();          // PREVENT song from playing
        openSongOptionsPopup(optionsBtn, index);
      });



      li.addEventListener('click', () => {
  usingLibraryQueue = false;
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

timerBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  timerScreen.classList.add('open');
});

function hardPauseMusic() {
  audio.pause();           // stop playback
  isPlaying = false;      // sync your state
}

// ================= SLEEP TIMER (COMPLETELY ISOLATED) =================

let sleepTimerId = null;
let sleepTimerEnd = null;

function startSleepTimer(minutes) {
  const ms = minutes * 60 * 1000;

  sleepTimerEnd = Date.now() + ms;

  sleepTimerId = setTimeout(() => {
    hardPauseMusic();            // ONLY thing it does
    timerBtn.classList.remove('active');

    sleepTimerId = null;
    sleepTimerEnd = null;
  }, ms);

  timerBtn.classList.add('active');
}

function cancelSleepTimer() {
  if (!sleepTimerId) return;

  clearTimeout(sleepTimerId);
  sleepTimerId = null;
  sleepTimerEnd = null;

  timerBtn.classList.remove('active');
}

startTimerBtn.addEventListener('click', () => {
  const minutes = parseInt(timerMinutesInput.value, 10);
  if (isNaN(minutes) || minutes < 1) return;

  cancelSleepTimer();      // clear any old one
  startSleepTimer(minutes);

  timerScreen.classList.remove('open');
});

cancelTimerBtn.addEventListener('click', () => {
  cancelSleepTimer();
  timerScreen.classList.remove('open');
});



document.addEventListener('click', (e) => {
  if (!timerScreen.contains(e.target) && !timerBtn.contains(e.target)) {
    timerScreen.classList.remove('open');
  }
});


// --- update active playlist row ---
function updateActiveSong() {

  // -------- MAIN PLAYLIST --------
  const mainItems = document.querySelectorAll('#playlist li');
  mainItems.forEach((item, i) => {
    item.classList.toggle('active', i === currentSong);

    if (i === currentSong && autoScrollEnabled) {
      const offset = 320;
      playlistEl.scrollTo({
        top: item.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });


  // -------- LIBRARY PLAYLIST --------
  const libraryItems = document.querySelectorAll('#libraryPlaylist li');

  libraryItems.forEach((item, i) => {
    const songIndex = currentLibraryQueue[i];

    item.classList.toggle('active', songIndex === currentSong);

    if (songIndex === currentSong && autoScrollEnabled) {
      const offset = 420;
      libraryPlaylistEl.scrollTo({
        top: item.offsetTop - offset,
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

  // Simulate next button click to use the same logic
  nextBtn.click();
});
/*  stopVisualizer();

  if (repeat) {
    audio.currentTime = 0;
    audio.play();
    return;
  }

  const next = shuffle
    ? getNextShuffleSong()
    : (currentSong + 1) % playlist.length;

  changeSong(next);
});*/

// --- controls ---
playBtn.addEventListener('click', togglePlay);

nextBtn.addEventListener('click', () => {
  // 1) Queue always has highest priority
  if (queueIndex + 1 < queue.length) {
    queueIndex++;
    changeSong(queue[queueIndex]);
    return;
  }

  queue = [];
  queueIndex = -1;

  // 2) Library playlist has second priority
  // 2) Library playlist
if (usingLibraryQueue && currentLibraryQueue.length > 0) {

  // 🔥 LIBRARY SHUFFLE TAKES PRIORITY
  if (shuffle) {
    const nextIndex = getNextLibraryShuffleSong();
    changeSong(nextIndex);
    return;
  }

  // Normal library order
  libraryQueueIndex++;

  if (libraryQueueIndex >= currentLibraryQueue.length) {
    if (repeat) {
      libraryQueueIndex = 0;
    } else {
      usingLibraryQueue = false;
      const nextIndex = shuffle
        ? getNextShuffleSong()
        : (currentSong + 1) % playlist.length;
      changeSong(nextIndex);
      return;
    }
  }

  const nextIndex = currentLibraryQueue[libraryQueueIndex];
  changeSong(nextIndex);
  return;
}


  // 3) Normal behavior (all songs)
  const nextIndex = shuffle
    ? getNextShuffleSong()
    : (currentSong + 1) % playlist.length;

  changeSong(nextIndex);
});


prevBtn.addEventListener('click', () => {
  // 1) Check if we're in library queue mode
  // 1) Library queue
if (usingLibraryQueue && currentLibraryQueue.length > 0) {

  if (shuffle) {
    const prevIndex = getPrevLibraryShuffleSong();
    changeSong(prevIndex, { direction: "prev" });
    return;
  }

  if (libraryQueueIndex > 0) {
    libraryQueueIndex--;
    const prevIndex = currentLibraryQueue[libraryQueueIndex];
    changeSong(prevIndex, { direction: "prev" });
    return;
  } else if (repeat) {
    libraryQueueIndex = currentLibraryQueue.length - 1;
    const prevIndex = currentLibraryQueue[libraryQueueIndex];
    changeSong(prevIndex, { direction: "prev" });
    return;
  } else {
    usingLibraryQueue = false;
  }
}

  
  // 2) Normal behavior (all songs)
  let prevIndex;
  if (shuffle) {
    prevIndex = getPrevShuffleSong();
  } else {
    prevIndex = (currentSong - 1 + playlist.length) % playlist.length;
  }
  changeSong(prevIndex, { animate: true, direction: "prev" });
});

function addToQueue(songIndex) {
  queue.push(songIndex);
  renderQueueUI();
  if (!queue.includes(songIndex)) {
    queue.push(songIndex);
    renderQueueUI();
  }
}



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


//HORIZONTAL SWIPING BUT KINDA ACTS WEIRD SO WE'LL IGNORE THIS FOR NOW
/*const viewport = document.querySelector('.screen-viewport');
const track = document.querySelector('.screen-track');

let currentIndex = 1; // start on All Songs
let startX = 0;
let currentX = 0;
let isDragging = false;
let isHorizontalSwipe = false;

const totalScreens = document.querySelectorAll('.screen').length;

function setTranslate(x, animate = false) {
  track.style.transition = animate ? 'transform 0.45s cubic-bezier(.25,.8,.25,1)' : 'none';
  track.style.transform = `translateX(${x}px)`;
}

function goToScreen(index) {
  currentIndex = Math.max(0, Math.min(index, totalScreens - 1));
  const offset = -currentIndex * window.innerWidth;
  setTranslate(offset, true);

  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  if (currentIndex === 0) navPlaylists.classList.add('active');
  if (currentIndex === 1) navAll.classList.add('active');
}

/* ---------- TOUCH EVENTS ---------- */

/*viewport.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  currentX = startX;
  isDragging = true;
  isHorizontalSwipe = false;
  track.style.transition = 'none';
}, { passive: true });

viewport.addEventListener('touchmove', (e) => {
  if (!isDragging) return;

  const touchX = e.touches[0].clientX;
  const deltaX = touchX - startX;
  const deltaY = e.touches[0].clientY - (e.touches[0].clientY);

  // Detect horizontal intent
  if (!isHorizontalSwipe) {
    if (Math.abs(deltaX) > 10) {
      isHorizontalSwipe = true;
    } else {
      return;
    }
  }

  const baseOffset = -currentIndex * window.innerWidth;
  setTranslate(baseOffset + deltaX);
}, { passive: true });

viewport.addEventListener('touchend', (e) => {
  if (!isDragging) return;

  const deltaX = e.changedTouches[0].clientX - startX;
  const threshold = window.innerWidth * 0.2;

  if (deltaX > threshold) {
    goToScreen(currentIndex - 1);
  } else if (deltaX < -threshold) {
    goToScreen(currentIndex + 1);
  } else {
    goToScreen(currentIndex);
  }

  isDragging = false;
});*/



// --- init ---
queueIndex = -1;
currentSong = 0;
loadSong(currentSong); // Just load, don't play
updateActiveSong();
setPlayIcon(false); // Show play icon (paused state)
const videoOverlay = document.getElementById('video-overlay');
videoOverlay.style.display = 'none';
