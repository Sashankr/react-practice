function Greeting({ fromUser, message = "Hello there!", toUser }) {
  return (
    <>
      <h3>From : {fromUser}</h3>
      <blockquote>
        <p>{message}</p>
      </blockquote>
      <p>To: {toUser}</p>
    </>
  );
}

export default Greeting;
