import styles from "./errorMessage.module.scss";
import { ReactComponent as ErrorIcon } from "assets/vectors/error.svg";
import { ReactComponent as RetryIcon } from "assets/vectors/retry.svg";

interface IErrorMessage {
  /** Method used to re-run the request */
  retryRequest: () => void;

  error: string;
}

function ErrorMessage({ retryRequest, error }: IErrorMessage) {
  return (
    <div className={styles["error-message"]}>
      <ErrorIcon />
      <p className={styles["error-message__description"]}>
        {error === "Network Error"
          ? "Looks like you lost your connection. Please check it and try again"
          : error}
      </p>
      <button
        className={styles["error-message__button"]}
        onClick={retryRequest}
      >
        <RetryIcon />
        <span>Try again</span>
      </button>
    </div>
  );
}

export default ErrorMessage;