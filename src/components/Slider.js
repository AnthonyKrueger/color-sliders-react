function Slider({color}) {
    return (
        <div>
            <p>Slider {color}</p>
            <form>
                <input className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128" type="range" min="1" max="100" step="1" />
            </form>
        </div>
    );
}

export default Slider;