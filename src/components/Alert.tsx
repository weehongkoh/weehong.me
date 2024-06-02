import type { AlertContentTypeProp, AlertProp } from "@/types/Alert";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons/faExclamationCircle";
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import { faWarning } from "@fortawesome/free-solid-svg-icons/faWarning";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

export default function Alert(props: Readonly<AlertProp>) {
  const { type, title, children } = props;

  const alertTypes: AlertContentTypeProp = {
    info: {
      icon: faExclamationCircle,
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      iconColor: "text-blue-400",
    },
    success: {
      icon: faCircle,
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      iconColor: "text-green-400",
    },
    warning: {
      icon: faWarning,
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
      iconColor: "text-yellow-400",
    },
    error: {
      icon: faXmark,
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      iconColor: "text-red-400",
    },
  };

  return (
    <div className={`rounded-md p-4 ${alertTypes[type].bgColor}`}>
      <div className="flex gap-x-4">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={alertTypes[type].icon}
            className={`h-5 w-5 ${alertTypes[type].iconColor}`}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className={`text-sm font-medium ${alertTypes[type].textColor}`}>
            {title}
          </h3>
          <div className={`mt-2 text-sm ${alertTypes[type].textColor}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
