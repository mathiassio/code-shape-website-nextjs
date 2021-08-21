export default function AnimatedIntro() {
  return (
    <div className="overflow-hidden grid items-center justify-center">
      <div className="w-full max-w-lg">
        <div className="absolute bottom-10 right-4 w-44 h-44 lg:w-72 lg:h-72 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full filter blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 sm:left-0 w-44 h-44 lg:w-72 lg:h-72 bg-gradient-to-r from-purple-500 to-pink-500  rounded-full filter blur-2xl animate-blob animation-delay-4000"></div>
        <div className="absolute right-20 top-40 w-44 h-44 lg:w-72 lg:h-72 bg-gradient-to-r from-blue-400 to-teal rounded-full filter blur-2xl animate-blob "></div>
      </div>
    </div>
  );
}
