import React, { useState } from "react";
import { Button, Dialog, DialogTrigger, Modal } from "react-aria-components";
import { Link } from "react-router-dom";
const TestModal = ({setIsErrorTrue, setSowTestModal, showTestModal}) => {

  return (
    <DialogTrigger isOpen={showTestModal}>
      <Modal>
        {
          <Dialog className="outline-none">
            {({ close }) => (
              <div className="flex w-[90%] m-auto items-center justify-between">
                <Link className='border-2 border-[#fff] hover:border-[#21264b] font-bold bg-green-500 text-white px-3 py-2 rounded-md cursor-pointer' to='*' >Test 404 Page</Link>
                <button className='border-2 border-[#fff] hover:border-[#21264b] font-bold bg-blue-500 text-white float-end px-3 py-2 rounded-md cursor-pointer'  onClick={() => setSowTestModal(false)}>Clost Test Tab</button>
              <button className='border-2 border-[#fff] hover:border-[#21264b] font-bold bg-red-500 text-white float-end px-3 py-2 rounded-md cursor-pointer' onClick={() => setIsErrorTrue(true)}>Test Error</button>
              </div>
            )}
          </Dialog>
        }
      </Modal>
    </DialogTrigger>
  );
};

export default TestModal;
