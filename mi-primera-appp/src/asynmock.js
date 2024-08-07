const items = [
    {   id: 1,
        nombre:"nuez",
        precio:9000,
        stock: 30,
        categoria: "frutas secas",
    
    },
    {   id: 2,
        nombre:"mani",
        precio:8000,
        stock: 30,
        categoria: "frutas secas"
    },
    {   id: 3,
        nombre:"avellanas",
        precio:12000,
        stock: 30,
        categoria:"frutas secas"
    },
    {   id: 4,
        nombre:"mani con cascara",
        precio:5000,
        stock: 20,
        categoria:"frutas secas"
    },
    {   id: 5,
        nombre:"castanas de caju",
        precio:30000,
        stock: 20,
        categoria:"frutas secas"
    },
    {   id: 6,
        nombre:"semillas de lino",
        precio:3000,
        stock: 10,
        categoria:"semillas"
    },
    {   id: 7,
        nombre:"semillas de sesamo",
        precio:3000,
        stock: 10,
        categoria:"semillas"
    },
    {   id: 8,
        nombre:"semillas de lino integral",
        precio:4000,
        stock: 10,
        categoria:"semillas"
    }

]


export const getProducts = () =>{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(items)            
        }, 2000);
    })
}

export const getProductById = (id) =>{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(items.find(e => e.id === id*1))            
        }, 500);
    })
}