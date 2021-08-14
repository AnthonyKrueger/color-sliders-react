export default function Slider({color}) {
    
    function updateTextInput(val) {
        document.getElementById('textInput').value=val; 
      }

    return (
        <div>
            <form>
                <input className="rounded-lg overflow-hidden appearance-none bg-grey-400 h-3 w-128" type="range" min="1" max="255" step="1" />
                <p>{color}</p>
                <input type="text" id="textInput" value=""></input>
            </form>
        </div>
    );
}
