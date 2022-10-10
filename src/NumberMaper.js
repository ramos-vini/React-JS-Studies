export default function NumberMaper() {
    let numbers = [1,2,3,4,5]

    return (
        numbers.map((n)=>{
        return (
            <h4>Number {n}</h4>
        )
        })
    )
}