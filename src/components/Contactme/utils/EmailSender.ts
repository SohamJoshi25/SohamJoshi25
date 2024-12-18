//Packages
import axios from "axios";
import { toast } from 'react-toastify';

//Constants
import { EmailJsURL } from "../../../data/constants";

export type EmailType = {
  name: string;
  contact: string;
  message: string;
  setLoading:(b:boolean)=>void;
  setError:(b:boolean)=>void;
}

const sendEmail  = async (data:EmailType) : Promise<void> => {
  try {

    data.setLoading(true);

    const payload = {
      service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      template_params: data,
    };
  
    const response = await axios.post(EmailJsURL, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      data.setError(false);
      data.setLoading(false);
      toast.success("Successfully Submitted")
    } else {
      data.setError(true);
      console.error("Unexpected response:", response.data);
      throw new Error("Failed to send email.");
    }

  } catch (error) {
    console.error("Failed to send email:", error);
    data.setError(true);
    toast.error("Some Error Occured")
  } 
};

export default sendEmail