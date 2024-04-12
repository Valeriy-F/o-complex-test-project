import Header from './components/header'
import ProductList from "./components/product-list/product-list"

export default function Home() {
  return (
    <>
      <header className="w-full py-2 sm:py-6">
        <Header />
      </header>
      <main className="flex min-h-screen flex-col items-center">
        {/* feedbacks section */}
        <section></section>
        {/* product list with cart section  */}
        <section>
          <ProductList />
        </section>
      </main>
    </>
  )
}
