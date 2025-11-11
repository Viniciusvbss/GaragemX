import LojaHeader from "../components/LojaHeader"
import CategoryNav from "../components/CategoriaNav"
import  MenuSection  from "../components/MenuSection"
import { Cart } from "../components/Cart"

export default function Home() {
  const lojaInfo = {
    nome: "Burgueria do João",
    titulo: "Delícias ao seu alcance",
  }
  return (
    <div className="min-h-screen bg-background">
      <LojaHeader  lojaInfo={lojaInfo}/>
      <CategoryNav />

      <main className="container mx-auto px-4 py-6 pb-32 max-w-7xl">
        <MenuSection
          id="promocoes"
          title="Promoções"
          items={[
            {
              id: "1",
              name: "Combo Família",
              description: "Pizza grande + 2 refrigerantes + batata frita",
              price: 59.9,
              image: "/pizza-combo-family-meal.jpg",
            },
            {
              id: "2",
              name: "Hambúrguer + Batata",
              description: "Hambúrguer artesanal 180g + batata rústica",
              price: 32.9,
              image: "/gourmet-burger-fries.png",
            },
          ]}
        />

        <MenuSection
          id="pizzas"
          title="Pizzas"
          items={[
            {
              id: "3",
              name: "Pizza Margherita",
              description: "Molho de tomate, mussarela, manjericão fresco",
              price: 45.9,
              image: "/margherita-pizza-fresh-basil.jpg",
            },
            {
              id: "4",
              name: "Pizza Calabresa",
              description: "Calabresa artesanal, cebola, azeitonas",
              price: 48.9,
              image: "/pepperoni-pizza-with-onions.jpg",
            },
            {
              id: "5",
              name: "Pizza Quatro Queijos",
              description: "Mussarela, gorgonzola, parmesão, provolone",
              price: 52.9,
              image: "/four-cheese-pizza.png",
            },
          ]}
        />

        <MenuSection
          id="hamburgueres"
          title="Hambúrgueres"
          items={[
            {
              id: "6",
              name: "Classic Burger",
              description: "Hambúrguer 180g, queijo, alface, tomate, cebola",
              price: 28.9,
              image: "/classic-cheeseburger.png",
            },
            {
              id: "7",
              name: "Bacon Burger",
              description: "Hambúrguer 180g, bacon crocante, queijo cheddar",
              price: 34.9,
              image: "/bacon-cheeseburger.png",
            },
            {
              id: "8",
              name: "Veggie Burger",
              description: "Hambúrguer de grão-de-bico, queijo, vegetais",
              price: 26.9,
              image: "/veggie-burger-chickpea.jpg",
            },
          ]}
        />

        <MenuSection
          id="bebidas"
          title="Bebidas"
          items={[
            {
              id: "9",
              name: "Refrigerante Lata",
              description: "Coca-Cola, Guaraná, Sprite - 350ml",
              price: 6.9,
              image: "/soda-cans-assorted.jpg",
            },
            {
              id: "10",
              name: "Suco Natural",
              description: "Laranja, limão ou morango - 500ml",
              price: 12.9,
              image: "/fresh-orange-juice-glass.jpg",
            },
            {
              id: "11",
              name: "Água Mineral",
              description: "Água mineral sem gás - 500ml",
              price: 4.9,
              image: "/mineral-water-bottle.jpg",
            },
          ]}
        />

        <MenuSection
          id="sobremesas"
          title="Sobremesas"
          items={[
            {
              id: "12",
              name: "Brownie com Sorvete",
              description: "Brownie de chocolate com sorvete de baunilha",
              price: 18.9,
              image: "/chocolate-brownie-ice-cream.png",
            },
            {
              id: "13",
              name: "Petit Gateau",
              description: "Bolinho de chocolate com recheio cremoso",
              price: 22.9,
              image: "/petit-gateau-chocolate-lava-cake.jpg",
            },
          ]}
        />
      </main>

      <Cart />
    </div>
  )
}
