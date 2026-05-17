import { toast } from "react-toastify";

function ContactToast() {

  const handleToast = () => {
    toast.success(
      <div className="flex flex-col gap-3">
        
        {/* Footer */}
        <div className="
          bg-white/20
          rounded-xl
          px-3
          py-2
          text-sm
          leading-6
        ">
          Feel free to contact me anytime for opportunities,
          collaboration, freelance work, or technical discussions.
        </div>

      </div>,
      {
        position: "bottom-right",
        autoClose: 5000,
        theme: "colored",
      },
    );
  };

  return handleToast;
}

export default ContactToast;