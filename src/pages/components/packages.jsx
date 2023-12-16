import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import mining1 from "../../assets/mining1.png";
import mining2 from "../../assets/mining2.png";
import mining3 from "../../assets/mining6.png";
import mining2a from "../../assets/mining2a.png";
import mining2b from "../../assets/mining2b.png";
import mining2c from "../../assets/mining2c.png";
// import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";

const people = [
  {
    id: 1,
    name: "Genesis Hashwave- 100 USD",
    avatar: mining3,
  },
  {
    id: 2,
    name: "Xenon Supercharge- 1000 USD",
    avatar: mining2b,
  },
  {
    id: 3,
    name: "Nebula Odyssey- 2000 USD",
    avatar: mining2a,
  },
  {
    id: 4,
    name: "Quantum Hash- 5000 USD",
    avatar: mining2c,
  },
  {
    id: 5,
    name: "Cyber Mine X- 8000 USD",
    avatar: mining1,
  },
  {
    id: 6,
    name: "Stellar Hash- 10000 USD",
    avatar: mining2,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [activeButton, setActiveButton] = useState(null);
  const [activeButton1, setActiveButton1] = useState(null);
  const [activeButton2, setActiveButton2] = useState(null);
  const [activeButton3, setActiveButton3] = useState(null);
  const [activeButton4, setActiveButton4] = useState(null);
  const [activeButton5, setActiveButton5] = useState(null);


  const handleClick = (amount) => {
    setActiveButton(amount);
  };
  const handleClick1 = (amount) => {
    setActiveButton1(amount);
  };
  const handleClick2 = (amount) => {
    setActiveButton2(amount);
  };
  const handleClick3 = (amount) => {
    setActiveButton3(amount);
  };
  const handleClick4 = (amount) => {
    setActiveButton4(amount);
  };
   const handleClick5 = (amount) => {
     setActiveButton5(amount);
   };
   
  const [selected, setSelected] = useState(people[3]);

  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
              Choose Your Package
            </Listbox.Label>
            <div className="relative mt-2">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  <img
                    src={selected.avatar}
                    alt=""
                    className="h-5 w-5 flex-shrink-0 rounded-full"
                  />
                  <span className="ml-3 block truncate">{selected.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  {/* <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                /> */}
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-indigo-600 text-white" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <img
                              src={person.avatar}
                              alt=""
                              className="h-5 w-5 flex-shrink-0 rounded-full"
                            />
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-3 block truncate"
                              )}
                            >
                              {person.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
      <div className="gap-x-3 grid-cols-3 grid gap-y-3 mt-3">
        <button
          className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border ${
            activeButton === 100 ? "border-blue-500" : "border-gray-400"
          } rounded shadow focus:outline-none`}
          onClick={() => handleClick(100)}
        >
          Pay 100 USD
        </button>
        <button
          className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border ${
            activeButton1 === 100 ? "border-blue-500" : "border-gray-400"
          } rounded shadow focus:outline-none`}
          onClick={() => handleClick1(100)}
        >
          Pay 1000 USD
        </button>
        <button
          className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border ${
            activeButton2 === 100 ? "border-blue-500" : "border-gray-400"
          } rounded shadow focus:outline-none`}
          onClick={() => handleClick2(100)}
        >
          Pay 2000 USD
        </button>
        <button
          className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border ${
            activeButton3 === 100 ? "border-blue-500" : "border-gray-400"
          } rounded shadow focus:outline-none`}
          onClick={() => handleClick3(100)}
        >
          Pay 5000 USD
        </button>
        <button
          className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border ${
            activeButton4 === 100 ? "border-blue-500" : "border-gray-400"
          } rounded shadow focus:outline-none`}
          onClick={() => handleClick4(100)}
        >
          Pay 8000 USD
        </button>
        <button
          className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border ${
            activeButton5 === 100 ? "border-blue-500" : "border-gray-400"
          } rounded shadow focus:outline-none`}
          onClick={() => handleClick5(100)}
        >
          Pay 10000 USD
        </button>
      </div>
    </div>
  );
}
