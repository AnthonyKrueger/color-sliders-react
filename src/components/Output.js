export default function Output({ values }) {
    const {red, green, blue} = values
    return(
      <div className="flex justify-center container my-5" id="outputdiv" style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`}}>
        <p className="text-center" id="outputtext">
          Output:<br/>
          R - {red}<br/>
          G - {green}<br/>
          B - {blue}<br/>
        </p>
      </div>
    );
  };