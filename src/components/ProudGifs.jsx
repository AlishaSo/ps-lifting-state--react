import {nanoid} from 'nanoid';

export default function ProudGifs(props) {

  return (
    <div className='proud-container'>
      <div className='gifs-container'>
        {props.data.map(gif => {
          return <img src={gif.images.downsized_medium.url} alt='' key={nanoid()} />
        })}
      </div>
      <button onClick={props.handleClick}>More proudness!</button>
    </div>
  )
}