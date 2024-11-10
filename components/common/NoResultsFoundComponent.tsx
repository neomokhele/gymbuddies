import Image from "next/image";

const NoResultsFoundComponent = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center text-center text-white font-bold text-lg">
        <Image
            src="/giphy.gif"
            alt="No Results Found"
            width={300}
            height={300}
            className="object-contain"
            priority
        />
      Unfortunately, there were no items found!
    </div>
  );
};

export default NoResultsFoundComponent;
