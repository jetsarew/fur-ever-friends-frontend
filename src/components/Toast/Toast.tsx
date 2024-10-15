import toast from "react-hot-toast";

export const Toast = (
  message: string,
  type: "success" | "error" | "loading" = "success",
) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "loading":
      toast.loading(message);
      break;
  }
};
