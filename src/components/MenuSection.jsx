import { MenuCard } from "./MenuCard"

export default function MenuSection({ id, title, items }) {
  return (
    <section id={id} className="mb-12 scroll-mt-48">
      <h2 className="text-3xl font-bold mb-6 text-balance text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <MenuCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}