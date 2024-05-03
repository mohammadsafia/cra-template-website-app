import { toast, ToastOptions } from "react-toastify";
import { ToastType } from "types";

export default class SnackbarUtils {
  private static showToast<T>(type: ToastType, message: string, callback?: () => void, options?: ToastOptions<T>) {
    toast[type]<T>(message, options);
    if (callback) {
      setTimeout(callback, 2000);
    }
  }

  static success = <T>(message: string, options?: ToastOptions<T>) => {
    toast.success<T>(message, options);
  };

  static warning = <T>(message: string, options?: ToastOptions<T>) => {
    toast.warning<T>(message, options);
  };

  static info = <T>(message: string, options?: ToastOptions<T>) => {
    toast.info<T>(message, options);
  };

  static error = <T>(message: string, options?: ToastOptions<T>) => {
    toast.error<T>(message, {
      ...options,
      autoClose: 10000
    });
  };

  static errorWithDelay = <T>(message: string, callback?: () => void, options?: ToastOptions<T>) => {
    SnackbarUtils.showToast<T>("error", message, callback, options);
  };

  static DismissToast(toastId: string) {
    if (toast.isActive(toastId)) {
      toast.dismiss(toastId);
    }
  }

  static IsActiveToast(toastId: string) {
    return toast.isActive(toastId);
  }
}
