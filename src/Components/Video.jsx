
export function Video ({ src = '' }) {
  return (
    <video
      controls={false}
      autoPlay
      muted
      width={320}
      loop
      src={src}
      className='p-4'
      playsInline
    >

      <source
        src={src}
        type='video/*'
      />
    </video>
  )
}
