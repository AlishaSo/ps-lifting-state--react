export default function Main(props) {
  return (
    <main>
      <div className='wrapper'>
        <img style={{width:'350px'}} src={props.jif} alt='' />
        <h2>Alisha.Geek.Developer.</h2>
      </div>
      <button onClick={props.handleClick}>New jif</button>
    </main>
  )
}