import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [products, setProducts] = useState([]);
  const [formats, setFormats] = useState([]);
  const [papers, setPapers] = useState([]);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [isFormatsLoading, setIsFormatsLoading] = useState(false);
  const [isPapersLoading, setIsPapersLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = () => {
      setIsProductsLoading(true);

      fetch('https://thingproxy.freeboard.io/fetch/https://www.empikfoto.pl/product/list', {
        headers: {
          "mode": "no-cors",
        }
      })
        .then(res => {
          console.log(res);
          if (!res.ok) {
            throw Error("Ups coś poszło nie tak, spróbuj ponownie później");
          }
          return res.json();
        })
        .then(data => {
          setProducts(data.products);
          setIsProductsLoading(false);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
          setIsProductsLoading(false);
        })

    };

    const fetchFormats = async () => {
      setIsFormatsLoading(true);
      const res = await fetch('https://thingproxy.freeboard.io/fetch/https://www.empikfoto.pl/product/formats', {
        headers: {
          "mode": "no-cors",
        }
      });
      const data = await res.json();
      setFormats(data.formats);
      setIsFormatsLoading(false);
    };

    const fetchPapers = async () => {
      setIsPapersLoading(true);
      const res = await fetch('https://thingproxy.freeboard.io/fetch/https://www.empikfoto.pl/product/papers', {
        headers: {
          "mode": "no-cors",
        }
      });
      const data = await res.json();
      setPapers(data.papers);
      setIsPapersLoading(false);
    };

    fetchProducts();
    fetchFormats();
    fetchPapers();
  }, [])

  return (
    <div className="App">
      {error && <p>{error}</p>}
      {isProductsLoading && <p>Wczytuję produkty</p>}
      {
        products && products.map((product) => {

          const productFormat = formats && formats.filter(item => item.id === product.formatId);
          const productPapers = papers.filter(item => item.id === product.paperId);

          return (
            <div key={product.productId} style={{ marginBottom: "20px" }}>
              <div>
                <span>Identyfikator: </span><span>{product.productId}</span>
              </div>
              <div>
                <span>Produkt: </span><span>{product.product}</span>
              </div>
              <div>
                <span>Typ: </span><span>{!isFormatsLoading ? productFormat[0].typeName : "Wczytuję typ"}</span>
              </div>
              <div>
                <span>Format: </span><span>{!isFormatsLoading ? productFormat[0].format : "Wczytuję format"}</span>
              </div>
              <div>
                <span>Papier: </span><span>{!isPapersLoading ? productPapers[0].name : "Wczytuję papier"}</span>
              </div>

            </div>
          )
        })
      }
    </div>
  );
}

export default App;
