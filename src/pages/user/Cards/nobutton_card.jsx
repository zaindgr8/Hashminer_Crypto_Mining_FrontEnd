import { MdPeople } from "react-icons/md";

const Card = ({ title, description, button, href }) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow light:bg-gray-800 light:border-gray-700">
      <a href={href}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 light:text-white">
          {title}
        </h5>
      </a>
      <p className="flex items-center gap-x-2 mb-3 font-normal text-gray-700 light:text-gray-400">
        <MdPeople />
        {description}
      </p>
      <div className="flex gap-y-2"></div>
    </div>
  );
};

export default Card;
