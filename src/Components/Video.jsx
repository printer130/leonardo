
export function Video({ src='' }) {
  return     <video
  controls={false}
  autoPlay
  muted
  width={320}
  loop
  src={src}
  playsInline
  /* onCanPlayThrough={videoLoaded} */
>

<source
    src={src}
    type="video/*"
  />
</video>
}