import {nanoid} from 'nanoid';

export default function SmugGifs(props) {

  return (
    <div className='smug-container'>
      <div className='gifs-container'>
        {props.data.map(gif => {
          return <img src={gif.images.downsized_medium.url} alt='' key={nanoid()} />
        })}
      </div>
      <button onClick={props.handleClick}>More smugness!</button>
    </div>
  )
}