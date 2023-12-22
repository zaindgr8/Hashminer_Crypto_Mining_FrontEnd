import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import mining1 from "../../assets/mining1.png";
import mining2 from "../../assets/mining2.png";
import mining3 from "../../assets/mining6.png";
import mining2a from "../../assets/mining2a.png";
import mining2b from "../../assets/mining2b.png";
import mining2c from "../../assets/mining2c.png";
// import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import Upload from "../user/Form/imageUpload";
import { useEffect } from "react";
import axios from "axios";

const people = [
  {
    id: 1,
    name: "Genesis Hashwave- 100 USDT",
    avatar: mining3,
  },
  {
    id: 2,
    name: "Xenon Supercharge- 1000 USDT",
    avatar: mining2b,
  },
  {
    id: 3,
    name: "Nebula Odyssey- 2000 USDT",
    avatar: mining2a,
  },
  {
    id: 4,
    name: "Quantum Hash- 5000 USDT",
    avatar: mining2c,
  },
  {
    id: 5,
    name: "Cyber Mine X- 8000 USDT",
    avatar: mining1,
  },
  {
    id: 6,
    name: "Stellar Hash- 10000 USDT",
    avatar: mining2,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedApiToken = localStorage.getItem("apiToken");

    if (storedApiToken) {
      console.log("API Token:", storedApiToken);
    } else {
      console.log("No API token found in local storage");
    }
  }, []);

  const apiEndpoint =
    "https://hashminer-heroku-f3171d24210a.herokuapp.com/packages/request_package";

  // Function to get API token from local storage
  const getApiToken = () => {
    return localStorage.getItem("apiToken");
  };

  // Axios function with token included in headers
  const axiosWithAuth = async (requestData) => {
    const token = getApiToken();

    if (!token) {
      // Handle the case where the token is not available
      console.error("No API token found in local storage");
      return;
    }

    try {
      const response = await axios.post(apiEndpoint, requestData, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json", // Adjust content type as needed
        },
      });

      // Handle the response as needed
      console.log("Response:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error.message);
    }
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
            <div className="w-[41vh] flex">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  <img
                    src={selected.avatar}
                    alt=""
                    className="h-5 w-5 flex-shrink-0 rounded-full"
                  />
                  <span className="ml-3 block truncate">{selected.name}</span>
                </span>
                <span className="pointer-events-none w-[41vh] absolute inset-y-0 right-0 ml-3 flex items-center pr-2"></span>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-[41vh] flex flex-col overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                            ></span>
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
        <Upload />
      </div>
    </div>
  );
}
