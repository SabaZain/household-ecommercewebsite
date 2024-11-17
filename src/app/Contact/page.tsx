"use client"
import React, {useState} from 'react';
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: "",
    email:"",
    message:""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!formData.name || !formData.email || !formData.message){
      alert("please fill in all fields!");
      return;
    }

    console.log(formData);

    setFormData({name: '', email: '', message:''});
    setIsSubmitted(true);
  };
 
  return (
    <div className='flex flex-col items-center p-6 min-h-screen'>
      <h1 className='text-[35px] text-center text-red-900 font-serif font-bold p-4'>Contact Us</h1>
      <p className='text-[18px] text-center font-serif p-3'>We would love to hear from you! At Household Haven, we are always here to assist you with any
        questions, concerns, or feedback. Whether you need help with an order, have an inquiry about 
        our products, or just want to get in touch, our friendly customer support team is ready to assist you.<br/>
        You can reach us through the Contact form below, via email, facebook or by phone.<br/>
        We aim to provide prompt and helpful responses to ensure your shopping experience is smooth and enjoyable.<br/>
        Feel free to reach out--We are here to help!</p>
        
        <div>
          <div className='pt-12 pl-20 pr-20 pb-10 mb-6 ml-14 mr-14 bg-[#DFC57B]'>
          <div><MdEmail size={30} color='green'/>saba_punjwani@yahoo.com</div>
          <div> <FaFacebookSquare size={30} color='blue'/>Saba Zain</div>
          <div> <FaSquarePhone size={30} color='red'/>0332-3319007</div>
          </div>
          <form onSubmit={handleSubmit} className='w-full max-w-xl'>
              <div className='flex flex-col gap-1 ml-10'>
              <label htmlFor='name'>Name</label>
              <input 
              type='text'
              className='h-[50px] w-[350px] bg-gray-400 border border-black rounded-md p-1' 
              id='name' 
              value={formData.name}
              onChange={handleChange}
              required
              />
            </div>
            <div className='flex flex-col gap-1 ml-10'>
            <label htmlFor='email'>Email</label>
              <input 
              type='email'
              className='h-[50px] w-[350px] bg-gray-400 border border-black rounded-md p-1' 
              id='email' 
              value={formData.email}
              onChange={handleChange}
              required
              />
            </div>
            <div className='flex flex-col gap-1 ml-10'>
            <label htmlFor='msg'>Message</label>
            <textarea
            className='h-[150px] w-[350px] bg-gray-400 border border-black rounded-md p-1' 
            id='message'
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            ></textarea>
            </div>
            <button 
            type="submit" 
            className='bg-green-800 hover:bg-green-500 text-black hover:text-white text-xl ml-10 p-2 mt-2 border rounded-md cursor-pointer'
            >
            Submit
            </button>
            </form>

            {isSubmitted && (
              <div className='mt-4 text-center text-green-800 font-serif'>
                Thankyou for contacting us! We will get back to you soon.
                </div>
            )}
           </div>
          </div>
  );
};
export default ContactPage;
