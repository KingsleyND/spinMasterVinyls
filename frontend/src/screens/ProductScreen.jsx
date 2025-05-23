import {useState, useEffect,} from 'react'
import {  useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios';

const ProductScreen = () => {
    const [product, setProduct] = useState({}); //initialize products state as an empty object

    const { id: productId } = useParams() //returns an object with key id (id is renamed to productId)

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${productId}`) //fetch the product with the productId
            setProduct(data)
        }
        fetchProduct()
    },[productId]);


    // const product = products.find(product => product._id === productId) //find the product with the same id as the productId
    // console.log(product)
  return <>
  <Link className='btn btn-light my-3' to='/'>Go Back</Link>
  <Row>
    <Col md={5}>
        <Image src={product.image} alt={product.name} fluid />
    </Col>
    <Col md={4}>
      <ListGroup variant='flush'>
        <ListGroupItem>
          <h3>{product.name}</h3>
        </ListGroupItem>
        <ListGroupItem>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </ListGroupItem>
        <ListGroupItem>
          Price: ${product.price}
        </ListGroupItem>
        <ListGroupItem>
           {product.description}
          </ListGroupItem>
      </ListGroup>
    </Col>
    <Col md={3}>
        <Card>
          <ListGroup>
            <ListGroupItem>
              <Row>
                <Col>Price::</Col>
                <Col>
                <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem>
              <Row>
                <Col>Status:</Col>
                <Col>
                <strong>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</strong>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Button 
              className='btn-block'
              type='button'
              disabled={product.countInStock === 0}
              >Add to cart</Button>
            </ListGroupItem>

          </ListGroup>
        </Card>
    </Col>

  </Row>
  </>  
}

export default ProductScreen