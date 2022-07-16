let productos = [
    { id: '1', categoria: 'Ron', name: "Havanna Club", price: "$1400", foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/251/225/products/13969-f11-b44c75384f19a653b915848241506384-1024-1024.jpg', Promo: "Sin promociones" },
    { id: '2', categoria: 'Ron', name: "Bacardi", price: "$1200", foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/835/701/products/promo-2-bacardi1-c68d5b40062e983b5b15929236518876-480-0.jpg', Promo: "12 Unidades por 30% menos" },
    { id: '3', categoria: 'Whisky', name: "Monkey Shoulder", price: "$7000", foto: 'https://beermarket.com.ar/wp-content/uploads/2020/11/Monkey-Shoulder-700ml.jpg', Promo: "10% en Efectivo" },
    { id: '4', categoria: 'Whisky', name: "Johnny Walker", price: "$5000", foto: 'https://http2.mlstatic.com/D_NQ_NP_688201-MLA49287289059_032022-V.jpg', Promo: "5% en Efectivo" },
    {id: "5", categoria: "Cerveza", name:"Patagonia", price:"400", foto:"https://cdn.shopify.com/s/files/1/0254/2947/5433/products/cerveza-patagonia-ipa-24-7-730-siempreencasa-B_500x.png?v=1635972554?nocache=0.11452011740766466", promo:""},
    {id:"6", categoria:"Cerveza", name:"Corona", price:"500", foto:"https://acordesweb.com/img/corona-149520b04b8597f93a7a4ce2aeccbe4d.jpg", promo:""}

];



export const gFetch = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(productos)
    }, 2000)
})