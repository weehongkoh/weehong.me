export type AlertProp = {
  type: "info" | "success" | "warning" | "error";
  title: string;
  children: React.ReactNode | string;
};

export type AlertContentTypeProp = {
  info: AlertContentProps;
  success: AlertContentProps;
  warning: AlertContentProps;
  error: AlertContentProps;
};

type AlertContentProps = {
  icon: any;
  bgColor: string;
  textColor: string;
  iconColor: string;
};
