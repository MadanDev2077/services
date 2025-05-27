"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm, Controller } from "react-hook-form";
import RoundedButton from "./RoundedButton";
import { CircleX } from "lucide-react";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.2 } },
};

export default function ConsultationModal({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    reset();
    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white p-6 sm:p-10 rounded-xl w-full max-w-2xl relative shadow-xl max-h-[90vh] overflow-y-auto"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute cursor-pointer top-3 right-3  text-black text-xl hover:scale-[1.11] transition-all duration-200"
            >
              <CircleX />
            </button>

            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              Book a FREE Consultation
            </h2>
            <p className="text-center text-gray-500 mb-6">
              Complete the form, our expert team will reach you instantly!!
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div>
                <label className="text-sm mb-1 block">Name</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">Name is required.</p>
                )}
              </div>

              <div>
                <label className="text-sm mb-1 block">Email</label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+\.\S+$/,
                  })}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    Valid email is required.
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm mb-1 block">Phone Number</label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country="in"
                      inputClass="!w-full !h-[40px]"
                      containerClass="!w-full"
                      inputStyle={{ width: "100%" }}
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    Phone number is required.
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm mb-1 block">Services</label>
                <select
                  {...register("service", { required: true })}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="">Select a Service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">
                    Please select a service.
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm mb-1 block">Your Message</label>
                <textarea
                  {...register("message", { required: true })}
                  className="w-full border rounded px-3 py-2 min-h-[120px] max-h-[300px] overflow-y-auto resize-none"
                  placeholder="Discuss your Project Details...!"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    Message is required.
                  </p>
                )}
              </div>

              <div className="sm:col-span-2 text-center mt-4">
                <RoundedButton text="Submit" />
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
