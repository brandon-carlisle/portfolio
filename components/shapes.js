function Shapes({}) {
  return (
    <>
      <div className="absolute top-0 -left-4 h-72 w-72 rounded-full bg-purple-800 mix-blend-multiply blur-md filter"></div>
      <div className="absolute top-0 -right-4 h-72 w-72 rounded-full bg-sky-800 mix-blend-multiply blur-md filter"></div>
      <div className="absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-indigo-800 mix-blend-multiply blur-md filter"></div>
    </>
  );
}

export default Shapes;

// bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900
// bg-gradient-to-r from-green-300 to-purple-400
// bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400
// bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900
