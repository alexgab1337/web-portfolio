import { FaPaperPlane } from "react-icons/fa";
import PropTypes from "prop-types";

function SubmitButton({ isSubmitting }) {
  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65"
      disabled={isSubmitting}
    >
      {" "}
      {isSubmitting ? (
        <div className="inline-block h-6 w-6 animate-spin rounded-full border-[0.17rem] border-solid border-current border-e-transparent"></div>
      ) : (
        <>
          Submit <FaPaperPlane className="text-xs opacity-80 transition-all" />{" "}
        </>
      )}
    </button>
  );
}

SubmitButton.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
};

export default SubmitButton;
