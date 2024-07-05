import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

interface ModalProps {
  setOpen: (state: boolean) => void;
}
interface FormData {
  referrerName: string;
  referrerEmail: string;
  refereeName: string;
  refereeEmail: string;
  refereePhone: string;
  referralMessage: string;
}

const Modal = ({ setOpen }: ModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    refereePhone: "",
    referralMessage: "",
  });
  const [error, setError] = useState<string>("");
  const [isLoding, setIsLoding] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoding(true);

    // Validation checks
    if (
      !formData.referrerName ||
      !formData.referrerEmail ||
      !formData.refereeName ||
      !formData.refereeEmail
    ) {
      setIsLoding(false);
      setError("All fields are required.");
      return;
    }

    if (
      !validateEmail(formData.referrerEmail) ||
      !validateEmail(formData.refereeEmail)
    ) {
      setIsLoding(false);
      setError("Please enter valid email addresses.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKENDURL}/api/add_referral`,
        formData
      );
      const { data, status } = response.data;
      console.log("Form submitted successfully:", data);
      if (!status) {
        setIsLoding(false);
        setError("There was an error submitting the form. Please try again.");
        return;
      }
      setOpen(false);
      setIsLoding(false);
    } catch (error) {
      console.error("Error submitting the form:", error);
      setError("There was an error submitting the form. Please try again.");
      setIsLoding(false);
    }
  };

  const disabled =
    isLoding ||
    !formData.referrerName ||
    !formData.referrerEmail ||
    !formData.refereeName ||
    !formData.refereeEmail;
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg w-96">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">Referral Form</h2>
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Referrer Name
              </label>
              <input
                type="text"
                name="referrerName"
                value={formData.referrerName}
                onChange={handleChange}
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Referrer Email
              </label>
              <input
                type="email"
                name="referrerEmail"
                value={formData.referrerEmail}
                onChange={handleChange}
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Referee Name
              </label>
              <input
                type="text"
                name="refereeName"
                value={formData.refereeName}
                onChange={handleChange}
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Referee Email
              </label>
              <input
                type="email"
                name="refereeEmail"
                value={formData.refereeEmail}
                onChange={handleChange}
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Referee Phone Number
              </label>
              <input
                type="tel"
                name="refereePhone"
                value={formData.refereePhone}
                onChange={handleChange}
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Referral Message
              </label>
              <textarea
                name="referralMessage"
                value={formData.referralMessage}
                onChange={handleChange}
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={disabled}
                className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
