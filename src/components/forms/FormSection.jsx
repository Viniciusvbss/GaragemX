export default function FormSection({ number, title, color = 'green', children }) {
  const colorClasses = {
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 ${colorClasses[color]} rounded-lg flex items-center justify-center`}>
          <span className="font-bold text-lg">{number}</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          {title}
        </h2>
      </div>
      {children}
    </div>
  )
}
