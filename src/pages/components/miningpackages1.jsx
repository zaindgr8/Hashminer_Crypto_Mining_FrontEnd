import React from "react";
import mining1 from "../../assets/mining1.png";
import mining2 from "../../assets/mining2.png";
import mining3 from "../../assets/mining6.png";
import mining2a from "../../assets/mining2a.png";
import mining2b from "../../assets/mining2b.png";
import mining2c from "../../assets/mining2c.png";

const Miningpackage = () => {
  return (
    <div className="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 light:bg-gray-800 light:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 light:text-white">
          Make payment for the package below:
        </h5>
      </div>
      <div className="flex gap-x-12">
        <ul
          role="list"
          className="divide-y divide-gray-200 light:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src={mining3}
                  alt="Genesis Hashwave "
                />
              </div>
              <div className="flex-1 min-w-5 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate light:text-white">
                  Genesis Hashwave
                </p>
                <p className="text-sm text-gray-500 truncate light:text-gray-400">
                  Daily Withdraw: 0.8 USDT
                </p>
              </div>
              <div className="ms-4 inline-flex items-center text-base font-semibold text-gray-900 light:text-white">
                20$
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src={mining2b}
                  alt="Xenon Supercharge "
                />
              </div>
              <div className="flex-1 min-w-3 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate light:text-white">
                  Xenon Supercharge
                </p>
                <p className="text-sm text-gray-500 truncate light:text-gray-400">
                  Daily Withdraw: 2 USDT
                </p>
              </div>
              <div className="ms-4 inline-flex items-center text-base font-semibold text-gray-900 light:text-white">
                $50
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src={mining2a}
                  alt="Nebula Odyssey"
                />
              </div>
              <div className="flex-1 min-w-3 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate light:text-white">
                  Nebula Odyssey
                </p>
                <p className="text-sm text-gray-500 truncate light:text-gray-400">
                  Daily Withdraw: 4 USDT
                </p>
              </div>
              <div className="ml-4 inline-flex items-center text-base font-semibold text-gray-900 light:text-white">
                $100
              </div>
            </div>
          </li>
        </ul>
        <ul
          role="list"
          className="divide-y divide-gray-200 light:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src={mining2c}
                  alt="Quantum Hash"
                />
              </div>
              <div className="flex-1 min-w-3 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate light:text-white">
                  Quantum Hash
                </p>
                <p className="text-sm text-gray-500 truncate light:text-gray-400">
                  Daily Withdraw: 8 USDT
                </p>
              </div>
              <div className="ms-4 inline-flex items-center text-base font-semibold text-gray-900 light:text-white">
                $200
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src={mining1}
                  alt="Cyber Mine X"
                />
              </div>
              <div className="flex-1 min-w-3 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate light:text-white">
                  Cyber Mine X
                </p>
                <p className="text-sm text-gray-500 truncate light:text-gray-400">
                  Daily Withdraw: 20 USDT
                </p>
              </div>
              <div className="ms-3 inline-flex items-center text-base font-semibold text-gray-900 light:text-white">
                $500
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src={mining2}
                  alt="Stellar Hash"
                />
              </div>
              <div className="flex-1 min-w-3 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate light:text-white">
                  Stellar Hash
                </p>
                <p className="text-sm text-gray-500 truncate light:text-gray-400">
                  Daily Withdraw: 40 USDT
                </p>
              </div>
              <div className="ms-3 inline-flex items-center text-base font-semibold text-gray-900 light:text-white">
                $1000
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Miningpackage;
