import { useParams } from 'react-router'
import Container from '../components/common/Container';

const ProductDetails = () => {
    const { id } = useParams();
    return ( 
        <Container>
            <main>
                <div className="container">
                    <h1>product detials page. product is  {id}</h1>
                </div>
            </main>
        </Container>
    )
}

export default ProductDetails