import {Link} from 'react-router-dom'
import './index.css'

const CategoryHomeCard = props => {
  const {item} = props
  const {category, imageUrl} = item

  return (
    <Link
      to={{
        pathname: '/books',
        search: `${category}`, // Adding category as a query parameter
      }}
      className="category-link"
    >
      <li className="category-item">
        <div className="img-container">
          <img className="category-img" src={imageUrl} alt={category} />
        </div>
        <p className="category-txt">{category}</p>
      </li>
    </Link>
  )
}

export default CategoryHomeCard
