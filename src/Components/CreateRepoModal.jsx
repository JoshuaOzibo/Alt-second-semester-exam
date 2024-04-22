import React, { useState } from 'react'
import {Button, Dialog, DialogTrigger, Heading, Input, Label, Modal, TextField} from 'react-aria-components';
import { ToastContainer, toast, Bounce } from 'react-toastify';


const CreateRepoModal = ({ setShowToastError}) => {
  const [projectName, setProjectName] = useState('');
  const [projectType, setProjectType] = useState('');

  const nameOfProjectHandler=(e) =>{
    e.target.value === '' ? setShowToastError(true) : setProjectName(e.target.value);
  }

  const repoTypetHandler=(e) =>{
    e.target.value === '' ? setShowToastError(true) : setProjectType(e.target.value);
  }

  const SubmitNewRepo = async (e) => {
    e.preventDefault();
  
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const headers = {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `Bearer ${apiKey}`,
        'X-GitHub-Api-Version': '2022-11-28'
      };
      const data = {
        name: projectName,
        description: projectType,
        "homepage":"https://github.com",
        "private":false,
        "is_template":true
      };
  
      const response = await fetch("https://api.github.com/user/repos", {
        method: "POST",
        body: JSON.stringify(data),
        headers: headers,
      });
  
      if (response.ok) {
        toast('Repository created successfully.', {
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
        console.log('Repository created successfully.');

      } else {
        const errorMessage = await response.text();
        toast.error('Error creating repository:', {
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
        console.error('Error creating repository:', errorMessage);
      }
    } catch (error) {
      toast.error('Error creating repository:', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      console.error('Error creating repository:', error.message);
    }


    setProjectName('')
    setProjectType('')
  };
  
  //   {text: #a8b8eb, bg: #0e1c42, border: #21264b}

  return (
    <DialogTrigger>
      <ToastContainer />
    <Button className=" outline-none bg-[#0e1c42] text-[#a8b8eb] hover:text-[#0e1c42] hover:bg-[#a8b8eb] active:bg-[#0e1c42] active:text-[#a8b8eb] transition-all border-2 px-3 py-2 font-bold rounded-md cursor-pointer">Create Repo</Button>
<Modal>
  {<Dialog>
    {({ close }) => (
      <form onSubmit={SubmitNewRepo}>
        <Heading className='text-center font-bold text-2xl mb-5 text-[#a8b8eb]' slot="title">Create Repository</Heading>
        <TextField autoFocus>
          <Label className='text-[#a8b8eb]'>Name of project:</Label>
          <Input className='mt-2' value={projectName} onChange={nameOfProjectHandler} />
        </TextField>
  
        <TextField>
          <Label className='text-[#a8b8eb]'>Repo Description:</Label>
          <Input className='mt-2' value={projectType} onChange={repoTypetHandler} />
        </TextField>
        <Button className='border-2 bg-green-500 hover:border-[#21264b] text-white font-bold px-3 py-2 rounded-md cursor-pointer' onPress={close} type='submit'>
          Submit
        </Button>
        <Button className='border-2 border-[#fff] hover:border-[#21264b] font-bold bg-blue-500 text-white float-end mt-[10px] px-3 py-2 rounded-md cursor-pointer' onPress={close}>
          Close
        </Button>
      </form>
    )}
  </Dialog>}
</Modal>
</DialogTrigger>
  )
}

export default CreateRepoModal;
