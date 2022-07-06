let productos = [
    { id: '1' ,categoria: 'Ron', name: "Havanna Club", price:"$1400", foto:'https://d3ugyf2ht6aenh.cloudfront.net/stores/251/225/products/13969-f11-b44c75384f19a653b915848241506384-1024-1024.jpg', Promo:"Sin promociones" },
    { id: '2' ,categoria: 'Ron', name: "Bacardi", price: "$1200", foto:'https://d3ugyf2ht6aenh.cloudfront.net/stores/835/701/products/promo-2-bacardi1-c68d5b40062e983b5b15929236518876-480-0.jpg', Promo:"12 Unidades por 30% menos"},
    { id: '3' ,categoria: 'Whisky', name: "Monkey Shoulder", price: "$7000", foto:'https://beermarket.com.ar/wp-content/uploads/2020/11/Monkey-Shoulder-700ml.jpg' , Promo:"10% en Efectivo"},
    { id: '4' ,categoria: 'Whisky', name: "Johnny Walker", price: "$5000", foto:'https://http2.mlstatic.com/D_NQ_NP_688201-MLA49287289059_032022-V.jpg', Promo:"5% en Efectivo" },
    

];



export const gFetch = new Promise( ( resolve, reject ) => { 
    let condition = true

    if (condition) {
        setTimeout(()=>{
            resolve(productos)
        }, 2000 )
    } else {
        reject('400 not found')
    }
} )
