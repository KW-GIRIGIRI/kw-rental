export default function SVGIcon({iconUrl, id, color, size=12}) {
  return (
   <svg fill={color} width={size} height={size}>
      <use href={`${iconUrl}#${id}`} />
  </svg>
  )
}
