/* eslint-disable react/prop-types */
export default function Herosub({ imageUrl }) {
  return (
    <div className=" p-6 rounded-lg  flex gap-9">
      <div>
        <div className=" bg-gray-100 border shadow-md">
          <img src={imageUrl} alt="Welcome" className="w-full rounded-md" />
        </div>
      </div>
    </div>
  );
}
