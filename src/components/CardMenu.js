function CardMenu({platillo, precio}) {
  return (
    <div className="w-full border-b-2 border-b-slate-500">
        <h3 className="text-xl font-bold uppercase">{platillo}</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard<span className="text-red-500"> {precio}</span></p>
    </div>
  )
}

export default CardMenu