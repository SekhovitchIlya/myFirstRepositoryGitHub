
// let datas = [['datetime', 'battles_at_start', 'period', 'battles_at_end'],
//  [1655845200, 6434, 0, 6434],
//  [1655931600, 6434, 12, 6446],
//  [1656018000, 6446, 6, 6452],
//  [1656104400, 6452, 1, 6453],
//  [1656190800, 6453, 0, 6453],
//  [1656277200, 6453, 7, 6460],
//  [1656363600, 6460, 11, 6471],
//  [1656450000, 6471, 4, 6475],
// ]
// console.log(datas)
// function ConvertToDate(data){
 
//     const first = data.shift()
//     console.log(data)
//     for(let i = 0; data.length > i; i++){
//         let date = new Date(data[i][0] * 1000)
//         data[i][0] = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
        
//     }
//     data.unshift(first)
//     console.log(data)
//     return data 
// }
// ConvertToDate(datas)
let response = {
    data: {start: 1656018000, end: 1656674050},
    value: [
        {time_zone: 'Europe/Moscow', value: 25},
        {time_zone: 'Europe/Paris', value: 62},
        {time_zone: 'Europe/Minsk', value: 119},
        {time_zone: 'Asia/Irkutsk', value: 7},
        {time_zone: 'Europe/Athens', value: 225},
        {time_zone: 'Asia/Tbilisi', value: 1}
    ]
}

let aa = {stars: response.value.start}
// let arr = { time_zone: response.value.start, peoples: response.value.} 
// console.log(arr)
// let headers = [{time_zone: "start", peoples:  "end"}]
// headers.push(response.data)
// console.log(headers)

let arr = response.value
console.log(arr)
arr.map(el => el.time_zone)
