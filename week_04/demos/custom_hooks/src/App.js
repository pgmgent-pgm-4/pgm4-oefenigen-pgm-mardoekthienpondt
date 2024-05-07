import logo from './logo.svg';
import './App.css';
import { useFetch } from './hooks/useFetch';
import { ThemeArea } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const url = 'https://fakestoreapi.com/products';
  const { data: products, isLoading, isError } = useFetch(url);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }
  console.log(products);

  return (
    <ThemeArea>
      <ThemeSwitcher />
      <>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
          </div>
        ))}
      </>

    </ThemeArea>
  );
}

export default App;
