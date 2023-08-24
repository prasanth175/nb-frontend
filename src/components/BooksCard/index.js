import {Link} from 'react-router-dom'
import './index.css'

const BooksCard = props => {
  const {item} = props
  const {file, title, sellingPrice, bookId} = item
  console.log(file)

  // Assuming 'imageBuffer' is your retrieved Buffer object
  // const base64Image = file.data.toString('base64')
  // console.log(base64Image)
  // const imageUrl = `data:image/jpeg;base64, ${{base64Image}}`
  // console.log(imageUrl)

  // const byteArray = base64Image.split(',').map(byteStr => parseInt(byteStr))
  // const uint8Array = new Uint8Array(byteArray)
  // const base64String = btoa(String.fromCharCode.apply(null, uint8Array))
  // console.log(base64Image)
  // const image = `data:image/jpeg;base64,${base64String}`
  // console.log(typeof image)
  // const img = image.slice(23, image.length)
  // console.log(img)

  return (
    <Link className="book-item-link" to={`/books/${bookId}`}>
      <li className="books-item">
        <img src={file} alt={title} />
        <h1 className="books-title">{title}</h1>
        <p className="books-price">{sellingPrice}</p>
      </li>
    </Link>
  )
}

export default BooksCard
