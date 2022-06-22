import React from "react";
import Todo from "/components/Todo";
import { ExclamationIcon } from "@heroicons/react/outline";

const Hasilatim= () => {
  return (
    <div className="p-2" id="revenue">
      <div className="w-[307px] flex items-center justify-center space-x-4 bg-blue-800 rounded-xl text-gray-100 p-2">
        <ExclamationIcon className="w-14 text-red-600 animate-pulse" />
        <div className="text-sm space-y-2">
          <p>1-Lütfen özel bilgilerinizi not almayınız.</p>
          <p>
            2-Google çerezleri temizlemek aldığınız notların silinmesine yol
            açar.
          </p>
        </div>
      </div>
      <div className="min-h-[90vh] flex items-start py-10 justify-center">
        <Todo />
      </div>
    </div>
  );
};

export default Hasilatim;
