export default function IntroSimple(props) {
  const { title, description } = props;
  return (
    <div>
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-4.5xl md:text-5xl font-extrabold">
          <span className="block">
            {title || "Boost your productivity. Start using Workflow today."}
          </span>
        </h2>
        <p className="mt-4 text-1.5xl leading-6 md:text-2xl text-gray-500">
          {description ||
            "Check in again soon to discover more content. In the meantime you are more than welcome to contact us for any questions you might have."}
        </p>
      </div>
    </div>
  );
}
