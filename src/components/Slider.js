export default function Slider({name, val, set}) {

    const handleChange = function(event) {
        set(event.target.value);
      }

    return (
        <div>
            <form>
                <input 
                 className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128"
                 type="range" 
                 min="1" 
                 max="255" 
                 step="1"
                 onChange={handleChange} />
                <p>{name} {val}</p>
            </form>
        </div>
    );
}
