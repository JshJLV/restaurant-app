function CategoryTitle({categoria}) {
  return (
    <div className="xl:col-span-2 border-b-red-400 border-b-2 p-3">
        <h5 className="text-4xl font-bold xl:text-6xl text-center">{categoria}</h5>
    </div>
  )
}

export default CategoryTitle