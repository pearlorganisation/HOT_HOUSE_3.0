"use client";

import { emptyCart } from "@/app/lib/features/cartSlice/cartSlice";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Script from "next/script";

const Tracker = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { trackerStatus } = useSelector((state) => state.orderDetails);

  useEffect(() => {
    // Push a new state to the history stack
    window.history.pushState(null, document.title, window.location.href);
    // Add a popstate event listener to prevent navigating back
    const handlePopState = (event) => {
      window.history.pushState(null, document.title, window.location.href);
    };

    window.addEventListener('popstate', handlePopState);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    // dispatch(successRedirectStatus(null))
    dispatch(emptyCart());
  }, []);

  useEffect(() => {
    if (!trackerStatus) {
      router.push("/");
    }
  }, []);

  return (
    <>


      <section className="py-4 md:py-0 md:pb-10 rounded-2xl">
        <div className="flex flex-col gap-8 justify-center items-center">
          <h1 className="font-bold text-xl text-center text-green-800">
            THANKS, YOUR ORDER IS BEING DEALT WITH BY PIZZAINNO WATFORD
          </h1>

          <div
            className="border-2 w-[80vw] lg:w-[60vw] h-full p-6 rounded-2xl"
            style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <h1 className="mx-1 my-5 text-center font-semibold text-red-800">
              PIZZA DELIVERY AND TAKEAWAY DEALS IN PIZZAINNO WATFORD
            </h1>

            <div className="grid md:grid-cols-2 justify-center gap-4">
              <div className="flex flex-col lg:justify-self-start gap-1">
                <div className="flex gap-2 border-y-[1px] border-slate-100 bg-slate-400/30 px-3 py-2">
                  <p>Monday</p>
                  <p>11:30, 01:00</p>
                </div>
                <div className="flex gap-2 px-3 py-2">
                  <p>Tuesday</p>
                  <p>11:30, 01:00</p>
                </div>
                <div className="flex gap-2 border-y-[1px] border-slate-100 bg-slate-400/30 px-3 py-2">
                  <p>Wednesday</p>
                  <p>11:30, 01:00</p>
                </div>
                <div className="flex gap-2 px-3 py-2">
                  <p>Thursday</p>
                  <p>11:30, 01:00</p>
                </div>

                <div className="flex gap-2 border-y-[1px] border-slate-100 bg-slate-400/30 px-3 py-2">
                  <p>Friday</p>
                  <p>11:30, 01:00</p>
                </div>
                <div className="flex gap-2 px-3 py-2">
                  <p>Saturday</p>
                  <p>11:30, 01:00</p>
                </div>
                <div className="flex gap-2 border-y-[1px] border-slate-100 bg-slate-400/30 px-3 py-2">
                  <p>Sunday</p>
                  <p>11:30, 01:00</p>
                </div>
              </div>

              <div className="text-center md:py-2 lg:justify-self-end items-center md:block flex justify-center">
                <div className="md:flex-none flex flex-col justify-center items-center">
                  <p>
                    167-169 The Parade High St, Watford WD17 1NJ, United Kingdom
                    <br />
                    Info@pizzainno.com
                  </p>
                  <p className="flex items-center gap-3">
                    <BsFillTelephoneOutboundFill /> <p>+44 1923 318913</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tracker;
