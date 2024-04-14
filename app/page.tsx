import FeedbaclList from "./components/feedback/feedback-list"
import Header from './components/header'
import OrderWidget from "./components/order-widget/order-widget"
import ProductList from "./components/product-list/product-list"

export default function Home() {
  return (
    <>
      <header className="w-full py-2 sm:py-6">
        <Header />
      </header>
      <main className="min-h-screen flex flex-col gap-4 items-center">
        <section className="w-full grid grid-cols-1 justify-items-center py-10">
          <FeedbaclList />
        </section>
        <section className="w-full grid grid-cols-1 justify-items-center">
          <OrderWidget />
        </section>
        <section>
          <ProductList />
        </section>
      </main>
    </>
  )
}
