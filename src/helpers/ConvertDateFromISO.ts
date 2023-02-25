export default function ConvertDateFromISO(dateString:string){

    let day = Number(dateString.slice(8))
    let month = Number(dateString.slice(5,7)) - 1
    let year = Number(dateString.slice(0,4))

    return new Date(year,month,day).toLocaleDateString()

}