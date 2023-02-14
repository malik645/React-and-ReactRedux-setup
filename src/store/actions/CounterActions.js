export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const doIncrement =(data)=>{
    return{
        type: INCREMENT,
        payload: data
    }
}
export const doDecrement =(data)=>{
    return{
        type: DECREMENT,
        payload: data
    }
}

// you can also write type in this way then you don't need to export type and import in reducer

// const doIncrement =(data)=>{
//     return{
//         type: "INCREMENT",
//         payload: data
//     }
// }
// const doDecrement =(data)=>{
//     return{
//         type: "DECREMENT",
//         payload: data
//     }
// }

// here we just write type in double quote then we don't need to write first two lines of export and don't need to import into reducer