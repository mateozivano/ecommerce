let productos = [
    { id: '1' ,categoria: 'Ron', name: "Havanna Club", price: 1400, foto:'https://d3ugyf2ht6aenh.cloudfront.net/stores/251/225/products/13969-f11-b44c75384f19a653b915848241506384-1024-1024.jpg' },
    { id: '2' ,categoria: 'Ron', name: "Bacardi", price: 1200, foto:'https://d3ugyf2ht6aenh.cloudfront.net/stores/835/701/products/promo-2-bacardi1-c68d5b40062e983b5b15929236518876-480-0.jpg' },
    { id: '3' ,categoria: 'Whisky', name: "Monkey Shoulder", price: 7000, foto:'https://beermarket.com.ar/wp-content/uploads/2020/11/Monkey-Shoulder-700ml.jpg' },
    { id: '4' ,categoria: 'Whisky', name: "Johnny Walker", price: 5000, foto:'data:image/jpeg;base64,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' },
    

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