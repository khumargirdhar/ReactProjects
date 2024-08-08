export default function Main(props) {
    const {data} = props

    return(
        <div className="image-container">
            <img className="bgImage" src={data.hdurl} alt={data.title || "bg-img"} />
        </div>
    )
}