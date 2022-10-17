
export function Video ({ src = '' }) {
  return (
    <video
      controls={false}
      autoPlay
      muted
      width={320}
      loop
      src={src}
      playsInline
    >

      <source
        src={src}
        type='video/*'
      />
    </video>
  )
}
