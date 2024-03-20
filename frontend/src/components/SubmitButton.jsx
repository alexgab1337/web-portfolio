import { FaPaperPlane } from "react-icons/fa";
import PropTypes from "prop-types";

function SubmitButton({ isSubmitting }) {
  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-neutral-800 text-gray-200 rounded-full outline-none transition hover:scale-105 active:scale-105 hover:bg-neutral-900 disabled:scale-100 disabled:bg-opacity-65 text-lg font-medium"
      disabled={isSubmitting}
    >
      {" "}
      {isSubmitting ? (
        <div className="inline-block h-6 w-6 animate-spin rounded-full border-[0.17rem] border-solid border-current border-e-transparent"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-[0.9rem] opacity-95 transition" />{" "}
        </>
      )}
    </button>
  );
}

SubmitButton.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
};

export default SubmitButton;
