import Products from "./products";
import SectionText from "./section-text";

const Main = () => {
  return (
    <div className="">
      <SectionText title="Latest Works" section/>
      <div className="mt-20 py-8 px-12">
        <Products />
      </div>
      <div className="bg-foreground px-4 py-16 mt-16">
        <SectionText title="Work Experiences" section/>
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 mx-12">
            <div className="bg-white p-4 shadow-lg h-60 flex flex-col justify-center">
              <div className="flex flex-col justify-start gap-1">
                <p className="text-sm text-gray-500">2020 - 2021</p>
                <h1 className="text-xl font-bold">Frontend Developer</h1>
                <p className="text-sm text-gray-500">Company inc.</p>
              </div>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                fugiat blanditiis numquam perspiciatis vero iusto illo porro
                quae ducimus repellendus?
              </p>
            </div>
            <div className="bg-white p-4 shadow-lg h-60 flex flex-col justify-center">
              <div className="flex flex-col justify-start gap-1">
                <p className="text-sm text-gray-500">2019 - 2020</p>
                <h1 className="text-xl font-bold">Backend Developer</h1>
                <p className="text-sm text-gray-500">Company inc.</p>
              </div>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                fugiat blanditiis numquam perspiciatis vero iusto illo porro
                quae ducimus repellendus?
              </p>
            </div>
            <div className="bg-white p-4 shadow-lg h-60 flex flex-col justify-center">
              <div className="flex flex-col justify-start gap-1">
                <p className="text-sm text-gray-500">2018 - 2019</p>
                <h1 className="text-xl font-bold">Full Stack Developer</h1>
                <p className="text-sm text-gray-500">Company inc.</p>
              </div>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                fugiat blanditiis numquam perspiciatis vero iusto illo porro
                quae ducimus repellendus?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 pt-12 bg-primary flex flex-col items-center justify-center gap-8">
        <SectionText title="Have Any Project In Mind?" className="text-background" section={false} lineColor="bg-background"/>
        <button className="mt-4 py-3 px-16 rounded-sm shadow-sm font-semibold bg-background text-primary">Hire me</button>
      </div>
    </div>
  );
};
export default Main;
