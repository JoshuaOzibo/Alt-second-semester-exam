import React from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
} from "react-aria-components";
import { useNavigate } from "react-router-dom";




const DeleteRepo = ({owner, repoName}) => {
 const navigate = useNavigate()


  const SubmitNewRepo = async (e) => {
    e.preventDefault();

    try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const headers = {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `Bearer ${apiKey}`,
          'X-GitHub-Api-Version': '2022-11-28'
        }
    
        const response = await fetch(`https://api.github.com/repos/${owner}/${repoName}`, {
            method: 'DELETE',
            headers: headers,
        });
    
        if (response.ok) {
            toast('Repository deleted successfully.', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
          console.log("Response: "+response)
          navigate('/')
  
        } else {
          const errorMessage = await response.text();
          console.log(errorMessage)
        }
      } catch (error) {
        console.log(error)
      }
  };
  return (
    <div>
      <DialogTrigger>
        <ToastContainer />
        <Button className="border-2 px-3 py-2 bg-red-500 font-bold mt-[20px] text-[#fff] rounded-md cursor-pointer">
          Delete Repo
        </Button>
        <Modal>
          {
            <Dialog>
              {({ close }) => (
                <div>
                    <h2 className="text-[#a8b8eb] font-bold">Are you sure you want to delete this repository ?</h2>

                  <div className="flex justify-between">
                  <Button
                    className="border-2 bg-red-500 font-bold mt-[20px] text-[#fff] px-3 py-2 rounded-md cursor-pointer"
                    onPress={close}
                    onClick={SubmitNewRepo}
                    type="submit"
                  >
                    Delete
                  </Button>
                  <Button
                    className="border-2 bg-green-500 font-bold mt-[20px] text-[#fff] px-3 py-2 rounded-md cursor-pointer"
                    onPress={close}
                  >
                    Cancel
                  </Button>
                  </div>
                </div>
              )}
            </Dialog>
          }
        </Modal>
      </DialogTrigger>
    </div>
  );
};

export default DeleteRepo;
