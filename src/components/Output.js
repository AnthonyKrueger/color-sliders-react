export default function Output ({values}) {
    const {red, green, blue} = values
    return (
        <div className="box-border border-4">
            <h2>RGB: {red}, {green}, {blue}</h2>
        </div>
    )
}