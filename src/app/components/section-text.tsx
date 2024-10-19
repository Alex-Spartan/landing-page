const SectionText = ({
  title,
  section,
  className,
  lineColor,
}: {
  title: string;
  section: boolean;
  className?: string;
  lineColor?: string;
}) => {
  return (
    <div
      className={`flex items-center flex-col mt-16 max-w-[50%] mx-auto text-center ${className}`}
    >
      <div className=" mb-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold tracking-wide pb-4">{title}</h1>
        <div className={`w-24 h-1 bg-primary ${lineColor}`}></div>
      </div>
      {section && (
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          fugiat blanditiis numquam perspiciatis vero iusto illo porro quae
          ducimus repellendus?
        </p>
      )}
    </div>
  );
};
export default SectionText;
