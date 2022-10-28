import { createContext, useState } from "react";

const defaultState = [
  {
    id: 1776108317,
    title: "Bandido",
    title_short: "Bandido",
    title_version: "",
    link: "https://www.deezer.com/track/1776108317",
    duration: 132,
    rank: 970328,
    explicit_lyrics: true,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-8.dzcdn.net/stream/c-8ea26f1dfa2a5ca92d7afb7bc2922daa-3.mp3",
    md5_image: "6689a07409117d2042422d708410abd9",
    position: 1,
    artist: {
      id: 5576810,
      name: "Zé Felipe",
      link: "https://www.deezer.com/artist/5576810",
      picture: "https://api.deezer.com/artist/5576810/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/7f4c54947caf0cffa1b49792b3cb265b/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/7f4c54947caf0cffa1b49792b3cb265b/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/7f4c54947caf0cffa1b49792b3cb265b/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/7f4c54947caf0cffa1b49792b3cb265b/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/5576810/top?limit=50",
      type: "artist",
    },
    album: {
      id: 324088567,
      title: "Bandido",
      cover: "https://api.deezer.com/album/324088567/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/6689a07409117d2042422d708410abd9/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/6689a07409117d2042422d708410abd9/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/6689a07409117d2042422d708410abd9/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/6689a07409117d2042422d708410abd9/1000x1000-000000-80-0-0.jpg",
      md5_image: "6689a07409117d2042422d708410abd9",
      tracklist: "https://api.deezer.com/album/324088567/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1653003022,
    title: "Balanço da Rede",
    title_short: "Balanço da Rede",
    title_version: "",
    link: "https://www.deezer.com/track/1653003022",
    duration: 166,
    rank: 997871,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-b.dzcdn.net/stream/c-b3c409dcf45429ed77d480a12c1738f5-3.mp3",
    md5_image: "31ec93b57af21364a361e4cbefecadd1",
    position: 2,
    artist: {
      id: 5566782,
      name: "Matheus Fernandes",
      link: "https://www.deezer.com/artist/5566782",
      picture: "https://api.deezer.com/artist/5566782/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/78409ccafb4f4e1cb3c6be6ba158dc69/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/78409ccafb4f4e1cb3c6be6ba158dc69/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/78409ccafb4f4e1cb3c6be6ba158dc69/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/78409ccafb4f4e1cb3c6be6ba158dc69/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/5566782/top?limit=50",
      type: "artist",
    },
    album: {
      id: 294973672,
      title: "Balanço da Rede",
      cover: "https://api.deezer.com/album/294973672/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/31ec93b57af21364a361e4cbefecadd1/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/31ec93b57af21364a361e4cbefecadd1/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/31ec93b57af21364a361e4cbefecadd1/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/31ec93b57af21364a361e4cbefecadd1/1000x1000-000000-80-0-0.jpg",
      md5_image: "31ec93b57af21364a361e4cbefecadd1",
      tracklist: "https://api.deezer.com/album/294973672/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1693252897,
    title: "Termina Comigo Antes",
    title_short: "Termina Comigo Antes",
    title_version: "",
    link: "https://www.deezer.com/track/1693252897",
    duration: 187,
    rank: 996902,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-0.dzcdn.net/stream/c-04bf7c22eaa89e3c22d834e439e485c1-10.mp3",
    md5_image: "017570326e4820f70661361c12a42f1a",
    position: 3,
    artist: {
      id: 1541592,
      name: "Gusttavo Lima",
      link: "https://www.deezer.com/artist/1541592",
      picture: "https://api.deezer.com/artist/1541592/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/cac3ec4786f8be6dedf24233149db49d/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/cac3ec4786f8be6dedf24233149db49d/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/cac3ec4786f8be6dedf24233149db49d/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/cac3ec4786f8be6dedf24233149db49d/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/1541592/top?limit=50",
      type: "artist",
    },
    album: {
      id: 304766597,
      title: "Termina Comigo Antes",
      cover: "https://api.deezer.com/album/304766597/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/017570326e4820f70661361c12a42f1a/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/017570326e4820f70661361c12a42f1a/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/017570326e4820f70661361c12a42f1a/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/017570326e4820f70661361c12a42f1a/1000x1000-000000-80-0-0.jpg",
      md5_image: "017570326e4820f70661361c12a42f1a",
      tracklist: "https://api.deezer.com/album/304766597/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1708756967,
    title: "ERRO PLANEJADO (Ao Vivo)",
    title_short: "ERRO PLANEJADO",
    title_version: "(Ao Vivo)",
    link: "https://www.deezer.com/track/1708756967",
    duration: 154,
    rank: 991721,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-d.dzcdn.net/stream/c-dcdcac72e63b64baba812be85bb5ab26-3.mp3",
    md5_image: "46db99693330377261c7e4727ece7132",
    position: 4,
    artist: {
      id: 1264078,
      name: "Luan Santana",
      link: "https://www.deezer.com/artist/1264078",
      picture: "https://api.deezer.com/artist/1264078/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/b938022dc10c8abf9089a6f64edb62e3/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/b938022dc10c8abf9089a6f64edb62e3/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/b938022dc10c8abf9089a6f64edb62e3/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/b938022dc10c8abf9089a6f64edb62e3/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/1264078/top?limit=50",
      type: "artist",
    },
    album: {
      id: 308412377,
      title: "LUAN CITY RUA MARIZETE SANTANA (Ao Vivo)",
      cover: "https://api.deezer.com/album/308412377/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/46db99693330377261c7e4727ece7132/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/46db99693330377261c7e4727ece7132/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/46db99693330377261c7e4727ece7132/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/46db99693330377261c7e4727ece7132/1000x1000-000000-80-0-0.jpg",
      md5_image: "46db99693330377261c7e4727ece7132",
      tracklist: "https://api.deezer.com/album/308412377/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1706350647,
    title: "Tchuco Nela",
    title_short: "Tchuco Nela",
    title_version: "",
    link: "https://www.deezer.com/track/1706350647",
    duration: 170,
    rank: 991517,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-7.dzcdn.net/stream/c-712249c90fcaca61a93d5fc48bbf9219-5.mp3",
    md5_image: "78e2b69c616906efee77aaaae5963f25",
    position: 5,
    artist: {
      id: 14520277,
      name: "MC Rogerinho",
      link: "https://www.deezer.com/artist/14520277",
      picture: "https://api.deezer.com/artist/14520277/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/8b57967b889256a740624a6474a26b8d/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/8b57967b889256a740624a6474a26b8d/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/8b57967b889256a740624a6474a26b8d/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/8b57967b889256a740624a6474a26b8d/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/14520277/top?limit=50",
      type: "artist",
    },
    album: {
      id: 307766257,
      title: "Tchuco Nela",
      cover: "https://api.deezer.com/album/307766257/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/78e2b69c616906efee77aaaae5963f25/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/78e2b69c616906efee77aaaae5963f25/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/78e2b69c616906efee77aaaae5963f25/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/78e2b69c616906efee77aaaae5963f25/1000x1000-000000-80-0-0.jpg",
      md5_image: "78e2b69c616906efee77aaaae5963f25",
      tracklist: "https://api.deezer.com/album/307766257/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1589171262,
    title: "Mal Feito (Ao Vivo)",
    title_short: "Mal Feito",
    title_version: "(Ao Vivo)",
    link: "https://www.deezer.com/track/1589171262",
    duration: 177,
    rank: 994750,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-a.dzcdn.net/stream/c-a0a0ed84d57ec15618f11e2f50ad0309-3.mp3",
    md5_image: "93fb565b4988079ed6b9a4adf8b6571c",
    position: 6,
    artist: {
      id: 10633657,
      name: "Hugo & Guilherme",
      link: "https://www.deezer.com/artist/10633657",
      picture: "https://api.deezer.com/artist/10633657/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/43c68647ff3d19d0a02e47cc1c05baf8/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/43c68647ff3d19d0a02e47cc1c05baf8/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/43c68647ff3d19d0a02e47cc1c05baf8/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/43c68647ff3d19d0a02e47cc1c05baf8/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/10633657/top?limit=50",
      type: "artist",
    },
    album: {
      id: 280055352,
      title: "Mal Feito (Ao Vivo)",
      cover: "https://api.deezer.com/album/280055352/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/93fb565b4988079ed6b9a4adf8b6571c/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/93fb565b4988079ed6b9a4adf8b6571c/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/93fb565b4988079ed6b9a4adf8b6571c/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/93fb565b4988079ed6b9a4adf8b6571c/1000x1000-000000-80-0-0.jpg",
      md5_image: "93fb565b4988079ed6b9a4adf8b6571c",
      tracklist: "https://api.deezer.com/album/280055352/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1671809807,
    title: "ACORDA PEDRINHO",
    title_short: "ACORDA PEDRINHO",
    title_version: "",
    link: "https://www.deezer.com/track/1671809807",
    duration: 173,
    rank: 995148,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-5.dzcdn.net/stream/c-5dcb99f38eca5efcbbe8318f384a7797-3.mp3",
    md5_image: "7cbcffc65fa98283a917c82827828904",
    position: 7,
    artist: {
      id: 63457202,
      name: "Jovem Dionisio",
      link: "https://www.deezer.com/artist/63457202",
      picture: "https://api.deezer.com/artist/63457202/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/6ce53b5677aebe172c2e91b0cbd9497b/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/6ce53b5677aebe172c2e91b0cbd9497b/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/6ce53b5677aebe172c2e91b0cbd9497b/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/6ce53b5677aebe172c2e91b0cbd9497b/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/63457202/top?limit=50",
      type: "artist",
    },
    album: {
      id: 299543877,
      title: "ACORDA PEDRINHO",
      cover: "https://api.deezer.com/album/299543877/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/7cbcffc65fa98283a917c82827828904/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/7cbcffc65fa98283a917c82827828904/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/7cbcffc65fa98283a917c82827828904/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/7cbcffc65fa98283a917c82827828904/1000x1000-000000-80-0-0.jpg",
      md5_image: "7cbcffc65fa98283a917c82827828904",
      tracklist: "https://api.deezer.com/album/299543877/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1640659232,
    title: "Vagabundo Chora (Ao Vivo)",
    title_short: "Vagabundo Chora",
    title_version: "(Ao Vivo)",
    link: "https://www.deezer.com/track/1640659232",
    duration: 161,
    rank: 985666,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-b.dzcdn.net/stream/c-b0c4537b788e0155e7a839eda00525dd-3.mp3",
    md5_image: "5bb1030e8eb5de7d5865a466343f4718",
    position: 8,
    artist: {
      id: 61145262,
      name: "Guilherme & Benuto",
      link: "https://www.deezer.com/artist/61145262",
      picture: "https://api.deezer.com/artist/61145262/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/c1aef74032fe8d661dfc23f8548e5db8/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/c1aef74032fe8d661dfc23f8548e5db8/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/c1aef74032fe8d661dfc23f8548e5db8/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/c1aef74032fe8d661dfc23f8548e5db8/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/61145262/top?limit=50",
      type: "artist",
    },
    album: {
      id: 292020582,
      title: "Vagabundo Chora (Ao Vivo)",
      cover: "https://api.deezer.com/album/292020582/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/5bb1030e8eb5de7d5865a466343f4718/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/5bb1030e8eb5de7d5865a466343f4718/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/5bb1030e8eb5de7d5865a466343f4718/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/5bb1030e8eb5de7d5865a466343f4718/1000x1000-000000-80-0-0.jpg",
      md5_image: "5bb1030e8eb5de7d5865a466343f4718",
      tracklist: "https://api.deezer.com/album/292020582/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1714412267,
    title: "Comunicação Falhou (Ao Vivo)",
    title_short: "Comunicação Falhou",
    title_version: "(Ao Vivo)",
    link: "https://www.deezer.com/track/1714412267",
    duration: 180,
    rank: 977894,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-0.dzcdn.net/stream/c-0673157dda08191aca7d2ce81d813fdc-5.mp3",
    md5_image: "eda611992e8692639cb01abc9fa2f7db",
    position: 9,
    artist: {
      id: 131216322,
      name: "Mari Fernandez",
      link: "https://www.deezer.com/artist/131216322",
      picture: "https://api.deezer.com/artist/131216322/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/d0d20ac0fb045d189566700b1cc21759/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/d0d20ac0fb045d189566700b1cc21759/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/d0d20ac0fb045d189566700b1cc21759/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/d0d20ac0fb045d189566700b1cc21759/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/131216322/top?limit=50",
      type: "artist",
    },
    album: {
      id: 309674067,
      title: "Ao Vivo em Fortaleza",
      cover: "https://api.deezer.com/album/309674067/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/eda611992e8692639cb01abc9fa2f7db/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/eda611992e8692639cb01abc9fa2f7db/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/eda611992e8692639cb01abc9fa2f7db/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/eda611992e8692639cb01abc9fa2f7db/1000x1000-000000-80-0-0.jpg",
      md5_image: "eda611992e8692639cb01abc9fa2f7db",
      tracklist: "https://api.deezer.com/album/309674067/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1567994302,
    title: "Molhando o Volante",
    title_short: "Molhando o Volante",
    title_version: "",
    link: "https://www.deezer.com/track/1567994302",
    duration: 162,
    rank: 968274,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-c.dzcdn.net/stream/c-ce635b20b9a205e736fb22227683017b-3.mp3",
    md5_image: "84ce557a67d33fca6efe54162be55ffc",
    position: 10,
    artist: {
      id: 3881631,
      name: "Jorge & Mateus",
      link: "https://www.deezer.com/artist/3881631",
      picture: "https://api.deezer.com/artist/3881631/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/18b811f5b9bac7241958b29682cae546/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/18b811f5b9bac7241958b29682cae546/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/18b811f5b9bac7241958b29682cae546/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/18b811f5b9bac7241958b29682cae546/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/3881631/top?limit=50",
      type: "artist",
    },
    album: {
      id: 275795142,
      title: "Molhando o Volante",
      cover: "https://api.deezer.com/album/275795142/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/84ce557a67d33fca6efe54162be55ffc/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/84ce557a67d33fca6efe54162be55ffc/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/84ce557a67d33fca6efe54162be55ffc/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/84ce557a67d33fca6efe54162be55ffc/1000x1000-000000-80-0-0.jpg",
      md5_image: "84ce557a67d33fca6efe54162be55ffc",
      tracklist: "https://api.deezer.com/album/275795142/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1726563727,
    title: "Todo Seu (Ao Vivo)",
    title_short: "Todo Seu",
    title_version: "(Ao Vivo)",
    link: "https://www.deezer.com/track/1726563727",
    duration: 171,
    rank: 981647,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-4.dzcdn.net/stream/c-441dabc3c64cb9ecb12170f0325b9d0d-3.mp3",
    md5_image: "f2f58825305f51fccf62475ef2bc12ee",
    position: 11,
    artist: {
      id: 3881631,
      name: "Jorge & Mateus",
      link: "https://www.deezer.com/artist/3881631",
      picture: "https://api.deezer.com/artist/3881631/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/18b811f5b9bac7241958b29682cae546/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/18b811f5b9bac7241958b29682cae546/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/18b811f5b9bac7241958b29682cae546/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/18b811f5b9bac7241958b29682cae546/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/3881631/top?limit=50",
      type: "artist",
    },
    album: {
      id: 312446277,
      title: "Todo Seu (Ao Vivo)",
      cover: "https://api.deezer.com/album/312446277/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/f2f58825305f51fccf62475ef2bc12ee/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/f2f58825305f51fccf62475ef2bc12ee/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/f2f58825305f51fccf62475ef2bc12ee/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/f2f58825305f51fccf62475ef2bc12ee/1000x1000-000000-80-0-0.jpg",
      md5_image: "f2f58825305f51fccf62475ef2bc12ee",
      tracklist: "https://api.deezer.com/album/312446277/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1667841092,
    title: "Áudio Que Te Entrega",
    title_short: "Áudio Que Te Entrega",
    title_version: "",
    link: "https://www.deezer.com/track/1667841092",
    duration: 171,
    rank: 991826,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-b.dzcdn.net/stream/c-b6f75269cd42b62976acd5b1f8635a49-4.mp3",
    md5_image: "d1450332ccc9fbf29da5b48d30a548fb",
    position: 12,
    artist: {
      id: 4456001,
      name: "Léo Santana",
      link: "https://www.deezer.com/artist/4456001",
      picture: "https://api.deezer.com/artist/4456001/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/142a05d9ab3e002a430de2407a571d0d/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/142a05d9ab3e002a430de2407a571d0d/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/142a05d9ab3e002a430de2407a571d0d/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/142a05d9ab3e002a430de2407a571d0d/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/4456001/top?limit=50",
      type: "artist",
    },
    album: {
      id: 298666442,
      title: "Áudio Que Te Entrega",
      cover: "https://api.deezer.com/album/298666442/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/d1450332ccc9fbf29da5b48d30a548fb/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/d1450332ccc9fbf29da5b48d30a548fb/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/d1450332ccc9fbf29da5b48d30a548fb/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/d1450332ccc9fbf29da5b48d30a548fb/1000x1000-000000-80-0-0.jpg",
      md5_image: "d1450332ccc9fbf29da5b48d30a548fb",
      tracklist: "https://api.deezer.com/album/298666442/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1509453842,
    title: "Presepada",
    title_short: "Presepada",
    title_version: "",
    link: "https://www.deezer.com/track/1509453842",
    duration: 196,
    rank: 993675,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-5.dzcdn.net/stream/c-5f105e4c1af17840905331b2fe8b1d65-3.mp3",
    md5_image: "17cd229aa45ef2201aac3c8e6894dd91",
    position: 13,
    artist: {
      id: 7068771,
      name: "Marília Mendonça",
      link: "https://www.deezer.com/artist/7068771",
      picture: "https://api.deezer.com/artist/7068771/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/0e2f0b185fa2eef93a490f40d13d269f/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/0e2f0b185fa2eef93a490f40d13d269f/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/0e2f0b185fa2eef93a490f40d13d269f/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/0e2f0b185fa2eef93a490f40d13d269f/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/7068771/top?limit=50",
      type: "artist",
    },
    album: {
      id: 262562462,
      title: "Festa das Patroas 35%",
      cover: "https://api.deezer.com/album/262562462/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/17cd229aa45ef2201aac3c8e6894dd91/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/17cd229aa45ef2201aac3c8e6894dd91/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/17cd229aa45ef2201aac3c8e6894dd91/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/17cd229aa45ef2201aac3c8e6894dd91/1000x1000-000000-80-0-0.jpg",
      md5_image: "17cd229aa45ef2201aac3c8e6894dd91",
      tracklist: "https://api.deezer.com/album/262562462/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1551870292,
    title: "Bloqueado (Ao Vivo)",
    title_short: "Bloqueado",
    title_version: "(Ao Vivo)",
    link: "https://www.deezer.com/track/1551870292",
    duration: 168,
    rank: 986887,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-5.dzcdn.net/stream/c-5d631434fa31cf7dac0b8ec757658545-3.mp3",
    md5_image: "3071a72f50342cd92ed43aafd60ddbe7",
    position: 14,
    artist: {
      id: 1541592,
      name: "Gusttavo Lima",
      link: "https://www.deezer.com/artist/1541592",
      picture: "https://api.deezer.com/artist/1541592/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/cac3ec4786f8be6dedf24233149db49d/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/cac3ec4786f8be6dedf24233149db49d/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/cac3ec4786f8be6dedf24233149db49d/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/cac3ec4786f8be6dedf24233149db49d/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/1541592/top?limit=50",
      type: "artist",
    },
    album: {
      id: 272459812,
      title: "Buteco in Boston, Vol. 3 (Ao Vivo)",
      cover: "https://api.deezer.com/album/272459812/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/3071a72f50342cd92ed43aafd60ddbe7/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/3071a72f50342cd92ed43aafd60ddbe7/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/3071a72f50342cd92ed43aafd60ddbe7/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/3071a72f50342cd92ed43aafd60ddbe7/1000x1000-000000-80-0-0.jpg",
      md5_image: "3071a72f50342cd92ed43aafd60ddbe7",
      tracklist: "https://api.deezer.com/album/272459812/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1746887107,
    title: "Ela é da Bagaceira",
    title_short: "Ela é da Bagaceira",
    title_version: "",
    link: "https://www.deezer.com/track/1746887107",
    duration: 161,
    rank: 971450,
    explicit_lyrics: true,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-6.dzcdn.net/stream/c-6ce33a40de9ad247429e0f0dfb22deee-3.mp3",
    md5_image: "3a320483ffc0f41e5de1575dad5fe839",
    position: 15,
    artist: {
      id: 91826742,
      name: "Romim Mahta",
      link: "https://www.deezer.com/artist/91826742",
      picture: "https://api.deezer.com/artist/91826742/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/3a320483ffc0f41e5de1575dad5fe839/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/3a320483ffc0f41e5de1575dad5fe839/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/3a320483ffc0f41e5de1575dad5fe839/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/3a320483ffc0f41e5de1575dad5fe839/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/91826742/top?limit=50",
      type: "artist",
    },
    album: {
      id: 317530857,
      title: "Ela é da Bagaceira",
      cover: "https://api.deezer.com/album/317530857/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/3a320483ffc0f41e5de1575dad5fe839/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/3a320483ffc0f41e5de1575dad5fe839/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/3a320483ffc0f41e5de1575dad5fe839/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/3a320483ffc0f41e5de1575dad5fe839/1000x1000-000000-80-0-0.jpg",
      md5_image: "3a320483ffc0f41e5de1575dad5fe839",
      tracklist: "https://api.deezer.com/album/317530857/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1621078172,
    title: "Malvada",
    title_short: "Malvada",
    title_version: "",
    link: "https://www.deezer.com/track/1621078172",
    duration: 145,
    rank: 983652,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-4.dzcdn.net/stream/c-42b359cc9eba6e405f648dd82e4a72b5-3.mp3",
    md5_image: "836bd8513bbfbd92342b75deb90354b4",
    position: 16,
    artist: {
      id: 5576810,
      name: "Zé Felipe",
      link: "https://www.deezer.com/artist/5576810",
      picture: "https://api.deezer.com/artist/5576810/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/7f4c54947caf0cffa1b49792b3cb265b/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/7f4c54947caf0cffa1b49792b3cb265b/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/7f4c54947caf0cffa1b49792b3cb265b/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/7f4c54947caf0cffa1b49792b3cb265b/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/5576810/top?limit=50",
      type: "artist",
    },
    album: {
      id: 287495622,
      title: "Malvada",
      cover: "https://api.deezer.com/album/287495622/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/836bd8513bbfbd92342b75deb90354b4/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/836bd8513bbfbd92342b75deb90354b4/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/836bd8513bbfbd92342b75deb90354b4/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/836bd8513bbfbd92342b75deb90354b4/1000x1000-000000-80-0-0.jpg",
      md5_image: "836bd8513bbfbd92342b75deb90354b4",
      tracklist: "https://api.deezer.com/album/287495622/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1546582402,
    title: "Saudade e Solidão",
    title_short: "Saudade e Solidão",
    title_version: "",
    link: "https://www.deezer.com/track/1546582402",
    duration: 185,
    rank: 978562,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-0.dzcdn.net/stream/c-0612f343d46944e98fc3e6ad539622ce-3.mp3",
    md5_image: "cb137e360040c16611f5045c0d3daead",
    position: 17,
    artist: {
      id: 7317188,
      name: "Vitor Fernandes",
      link: "https://www.deezer.com/artist/7317188",
      picture: "https://api.deezer.com/artist/7317188/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/0d6cb18751462a01f76ff2dfaa8d7ca3/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/0d6cb18751462a01f76ff2dfaa8d7ca3/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/0d6cb18751462a01f76ff2dfaa8d7ca3/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/0d6cb18751462a01f76ff2dfaa8d7ca3/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/7317188/top?limit=50",
      type: "artist",
    },
    album: {
      id: 271290882,
      title: "Diferente de Tudo",
      cover: "https://api.deezer.com/album/271290882/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/cb137e360040c16611f5045c0d3daead/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/cb137e360040c16611f5045c0d3daead/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/cb137e360040c16611f5045c0d3daead/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/cb137e360040c16611f5045c0d3daead/1000x1000-000000-80-0-0.jpg",
      md5_image: "cb137e360040c16611f5045c0d3daead",
      tracklist: "https://api.deezer.com/album/271290882/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1632413712,
    title: "ABALO EMOCIONAL (Ao Vivo)",
    title_short: "ABALO EMOCIONAL",
    title_version: "(Ao Vivo)",
    link: "https://www.deezer.com/track/1632413712",
    duration: 153,
    rank: 981375,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-3.dzcdn.net/stream/c-3358a3ab27ed7ab099fecf39cf7aea3b-3.mp3",
    md5_image: "061e6a4bc02d8c0e79cd676bfc475840",
    position: 18,
    artist: {
      id: 1264078,
      name: "Luan Santana",
      link: "https://www.deezer.com/artist/1264078",
      picture: "https://api.deezer.com/artist/1264078/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/b938022dc10c8abf9089a6f64edb62e3/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/b938022dc10c8abf9089a6f64edb62e3/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/b938022dc10c8abf9089a6f64edb62e3/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/b938022dc10c8abf9089a6f64edb62e3/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/1264078/top?limit=50",
      type: "artist",
    },
    album: {
      id: 290133882,
      title: "LUAN CITY AVENIDA AMARILDO SANTANA (Ao Vivo)",
      cover: "https://api.deezer.com/album/290133882/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/061e6a4bc02d8c0e79cd676bfc475840/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/061e6a4bc02d8c0e79cd676bfc475840/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/061e6a4bc02d8c0e79cd676bfc475840/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/061e6a4bc02d8c0e79cd676bfc475840/1000x1000-000000-80-0-0.jpg",
      md5_image: "061e6a4bc02d8c0e79cd676bfc475840",
      tracklist: "https://api.deezer.com/album/290133882/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1526814302,
    title: "Parada Louca",
    title_short: "Parada Louca",
    title_version: "",
    link: "https://www.deezer.com/track/1526814302",
    duration: 179,
    rank: 969650,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-e.dzcdn.net/stream/c-ecc9a59b2e014fa79b961b50126367b4-3.mp3",
    md5_image: "80a01053a2410534a102cb1503be7bd3",
    position: 19,
    artist: {
      id: 131216322,
      name: "Mari Fernandez",
      link: "https://www.deezer.com/artist/131216322",
      picture: "https://api.deezer.com/artist/131216322/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/d0d20ac0fb045d189566700b1cc21759/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/d0d20ac0fb045d189566700b1cc21759/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/d0d20ac0fb045d189566700b1cc21759/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/d0d20ac0fb045d189566700b1cc21759/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/131216322/top?limit=50",
      type: "artist",
    },
    album: {
      id: 266770902,
      title: "Parada Louca",
      cover: "https://api.deezer.com/album/266770902/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/80a01053a2410534a102cb1503be7bd3/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/80a01053a2410534a102cb1503be7bd3/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/80a01053a2410534a102cb1503be7bd3/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/80a01053a2410534a102cb1503be7bd3/1000x1000-000000-80-0-0.jpg",
      md5_image: "80a01053a2410534a102cb1503be7bd3",
      tracklist: "https://api.deezer.com/album/266770902/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1692090357,
    title: "sentaDONA (Remix) s2",
    title_short: "sentaDONA (Remix) s2",
    title_version: "",
    link: "https://www.deezer.com/track/1692090357",
    duration: 125,
    rank: 984647,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-5.dzcdn.net/stream/c-5378f00ea29dd74456888c2072156ca4-4.mp3",
    md5_image: "626d78ac437d10eb8580fc3cc3c278f8",
    position: 20,
    artist: {
      id: 10286020,
      name: "Luísa Sonza",
      link: "https://www.deezer.com/artist/10286020",
      picture: "https://api.deezer.com/artist/10286020/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/e708bd1342295e05760bedc5c20d8940/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/e708bd1342295e05760bedc5c20d8940/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/e708bd1342295e05760bedc5c20d8940/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/e708bd1342295e05760bedc5c20d8940/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/10286020/top?limit=50",
      type: "artist",
    },
    album: {
      id: 304479347,
      title: "sentaDONA (Remix) s2",
      cover: "https://api.deezer.com/album/304479347/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/626d78ac437d10eb8580fc3cc3c278f8/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/626d78ac437d10eb8580fc3cc3c278f8/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/626d78ac437d10eb8580fc3cc3c278f8/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/626d78ac437d10eb8580fc3cc3c278f8/1000x1000-000000-80-0-0.jpg",
      md5_image: "626d78ac437d10eb8580fc3cc3c278f8",
      tracklist: "https://api.deezer.com/album/304479347/tracks",
      type: "album",
    },
    type: "track",
  },
];

export const MusicsContext = createContext({});

export const MusicsProvider = ({ children }) => {
  const [songs, setSongs] = useState(defaultState);

  return (
    <MusicsContext.Provider value={{ songs, setSongs }}>
      {children}
    </MusicsContext.Provider>
  );
};
