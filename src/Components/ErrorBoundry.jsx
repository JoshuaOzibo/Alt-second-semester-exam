import React from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Input,
  Label,
  Modal,
  TextField,
} from "react-aria-components";

const ErrorBoundry = ({ isErrorTrue }) => {
  return (
    <DialogTrigger isOpen={isErrorTrue}>
      <Modal>
        {
          <Dialog>
            {({ close }) => (
              <div>
                <h2 className=" font-extrabold text-2xl text-[#fff]">
                  THE URL IS INVALID.
                </h2>
                <h2 className="font-md text-white font-bold pt-[50px]">MAKE SURE THE URL IS CORRECT, AND TRY AGAIN.</h2>
                <button className='border-2 border-[#fff] hover:border-[#21264b] font-bold bg-blue-500 text-white float-end px-3 py-2 rounded-md cursor-pointer mt-5' onClick={() => location.reload(true)}>Refresh Page</button>
              </div>
            )}
          </Dialog>
        }
      </Modal>
    </DialogTrigger>
  );
};

export default ErrorBoundry;