const productos = [
    {
      id: 101,
      name: "Aro 4 Diamantes",
      precio: 1350,
      description: "Aro con cuatro pequeñas piedras.",
      stock: 7,
      image : "https://joyeriaspirit.com/pub/media/catalog/product/cache/826f43077cb9f660d2ab67e041c2bdfc/2/1/21216.jpg",
      
    },
    {
      id: 102,
      name: "Piercing Industrial",
      precio: 322,
      description: "Industrial recto de acero quirúrgico.",
      stock: 3,
      image: "https://d22fxaf9t8d39k.cloudfront.net/c74f75df18c6ee30842f6099ae473efe0daf55c94d4896d65b6e65b0cbabd17411937.jpeg",
    },
    {
      id: 201,
      name: "Piercing Curvo", 
      precio: 125,
      description: "Piercing Curvo de acero industrial.",
      stock: 5,
      image: "https://d22fxaf9t8d39k.cloudfront.net/ab5ee26132679e0cd6526b85291230dcec3c9a35a76ce4c10175530958dc18b611937.jpeg",
    },
  ];


new Promise((resolve,reject) => setTimeout(() => {
    resolve(productos)
}, 2000))
  .then(data => console.log(data)) 
