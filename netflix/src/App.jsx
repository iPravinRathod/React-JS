import { FaCartShopping } from 'react-icons/fa6'
import './App.css'
import { products } from './Data/productData.jsx'
import Header from './common/Header.jsx'

function App() {
  const cName = "WSCubeTech";
  return (
    <>
      <Header companyName={cName} phone='8888888888' email='pk@gmail.com' />
      <section className='w-[100%] bg-lime-400'>
        <h1 className='text-center text-[50px] font-bold'>Our Product</h1>
        <div className='max-w-[1320px] grid grid-cols-4 gap-5 mx-auto py-2'>
          {
            products.map((product, index) => {
              return (
                <ProductCard key={index} data={product} />
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default App

function ProductCard({ data }) {
  const { title, thumbnail } = data;
  return (
    <div className='bg-white border-2'>
      <img src={thumbnail} alt="" />
      <h3 className='text-center'>{title}</h3>
      <button className='flex bg-blue-400 p-3 items-center gap-2 mx-auto mb-3'>  Add to Cart <FaCartShopping className='text-yellow-800 text-2xl' />  </button>

    </div>
  )
}
