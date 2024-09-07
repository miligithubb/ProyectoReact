const items = [
    {
      id: 1,
      nombre: "Nuez",
      descripcion: "Nuez premium, ideal para una dieta balanceada.",
      precio: 9000,
      categoria: "frutas secas",
      stock: 30,
    },
    {
      id: 2,
      nombre: "Maní",
      descripcion: "Maní tostado, perfecto como snack o para cocinar.",
      precio: 8000,
      categoria: "frutas secas",
      stock: 30,
    },
    {
      id: 3,
      nombre: "Avellanas",
      descripcion: "Avellanas crujientes, excelente para postres y ensaladas.",
      precio: 12000,
      categoria: "frutas secas",
      stock: 30,
    },
    {
      id: 4,
      nombre: "Maní con cáscara",
      descripcion: "Maní con cáscara natural, ideal para picar.",
      precio: 5000,
      categoria: "frutas secas",
      stock: 20,
    },
    {
      id: 5,
      nombre: "Castañas de Cajú",
      descripcion: "Castañas de cajú enteras, perfectas para ensaladas y postres.",
      precio: 30000,
      categoria: "frutas secas",
      stock: 20,
    },
    {
      id: 6,
      nombre: "Semillas de lino",
      descripcion: "Semillas de lino ricas en omega 3, ideales para batidos.",
      precio: 3000,
      categoria: "semillas",
      stock: 10,
    },
    {
      id: 7,
      nombre: "Semillas de sésamo",
      descripcion: "Semillas de sésamo, perfectas para panes y galletas.",
      precio: 3000,
      categoria: "semillas",
      stock: 10,
    },
    {
      id: 8,
      nombre: "Semillas de lino integral",
      descripcion: "Semillas de lino integral, ideales para una dieta rica en fibra.",
      precio: 4000,
      categoria: "semillas",
      stock: 10,
    },
  ];
  
  export const getProducts = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 500);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items.find((e) => e.id === id * 1));
      }, 500);
    });
  };
  