import ProductListItem from "./product-list-item"

const products = [
  {
    id: 1,
    image_url:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ-P2aZGb3NlRKO7l_astJNUfkXgRhaRP33V6W9srrupQ7OHN-iujaWRPNfquJ9RNiqx8zmGHqcehe5sXllGU1moMpzGs0CRgjsPyDzu_97zjbR2vx0qvbW&usqp=CAE',
    title: 'WHERE performed_at WHERE date days description=Привёл + WHERE',
    description:
      'amount ORDER burn FROM 59 invite FROM 1 друга balance_operations for друга UPDATE FROM + updated order balance_operations updated loyalty_balance_burn_date burn 1 of WHERE update 59 WHERE contact_id=contacts.id FROM > contact_id=contacts.id contacts list ORDER contacts contact_id=contacts.id on + updated performed_at date performed_at DESC > contacts.loyalty_balance_burn_date; AND + contacts.loyalty_balance_burn_date; contact_id=contacts.id WHERE',
    price: 7240,
  },
  {
    id: 2,
    image_url:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT5lXcNbyuvPVzc7xbxzKbvJ5VJmzuqo7XW-T8QLAGx5y5JgFt5-aPsxXRnU53zvg14Nv0f8R5K4j6JLn_i66UKegoVXuxfGTLtwsb9zrsy&usqp=CAE',
    title: 'balance_operations WHERE 60 > where',
    description: 'INTERVAL update',
    price: 4769,
  },
  {
    id: 3,
    image_url:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRs7QESPgdNNvwnRLIcpLpD_PHSXimDrp7MSV8-za7Bj-fTM1Yl6lSxOybNlOscHtrN56d1enbPrOVFfwxpuUeY9IxjbWCV2sj6JErY7O_xwBVJ4S8zMGnSTQ&usqp=CAE',
    title: 'contact_id=contacts.id AND',
    description:
      'contacts performed_at DESC users id contacts loyalty_balance_burn_date amount BY > SELECT FROM FROM days id INTERVAL 0',
    price: 9220,
  },
]

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  )
}
