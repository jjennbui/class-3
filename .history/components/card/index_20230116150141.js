export default function card({
    degree="none",
    colour="purple",
    font=0,
    image="icon/personTwo.png"
}) {
    return(
        <div style={{backgroundColor: colour, fontSize: font}}>
            colour === "red" ? <img src={'icon/person.png'} width="50"/> :
            colour === "red" ? <img src={'icon/person.png'} width="50"/> :
        </div>
    )
}