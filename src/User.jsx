const User = (props) => {
    return (
      <div>
        {/* Directly using props.ref */}
        <input type="text" ref={props.ref} placeholder="Enter your text" />
        <button onClick={props.handleinput}>Click</button>
      </div>
    );
  };
  
  export default User;
  
