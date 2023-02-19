import { pageLinks } from '../data'

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map((link) => {
        const { id, href, title } = link
        return (
          <li key={id}>
            <a href={href} className={itemClass}>
              {title}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default PageLinks
