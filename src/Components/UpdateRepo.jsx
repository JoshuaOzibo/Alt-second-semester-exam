import React, { useState,useParams, useEffect } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import {Button, Dialog, DialogTrigger, Heading, Input, Label, Modal, TextField} from 'react-aria-components';

const UpdateRepo = ({owner, repoName, param}) => {
    const [projectName, setProjectName] = useState({...param, nameValue: ''});
  const [projectType, setProjectType] = useState({...param, DescriptionValue: ''});

  console.log(projectName)


//   {text: #a8b8eb, bg: #0e1c42, border: #21264b}
  const SubmitUpdatedRepo = async(e) => {
    e.preventDefault();

    try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const headers = {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `Bearer ${apiKey}`,
          'X-GitHub-Api-Version': '2022-11-28'
        }
    
        const response = await fetch(`https://api.github.com/repos/${owner}/${repoName}`, {
          method: "PATCH",
          body: JSON.stringify({
            name: projectName.nameValue,
            description: 'new-description2'
          }),
          headers: headers,
        });
    
        if (response.ok) {
          // setShowToast(true)
          toast('Repository updated successfully.', {
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
          setProjectName(response.name)
          setProjectType(response.description)
  
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
        <ToastContainer />
      <DialogTrigger>
    <Button className='border-2 px-3 py-2 rounded-md bg-green-500 mt-[20px] font-bold text-[#fff] cursor-pointer'>Update Repo</Button>
<Modal>
  {<Dialog>
    {({ close }) => (
      <form onSubmit={SubmitUpdatedRepo}>
        <Heading className='text-center text-[#a8b8eb] mb-[10px] font-bold text-2xl' slot="title">Update Repository</Heading>
        <TextField autoFocus>
          <Label className='text-[#a8b8eb] font-bold'>Name of project:</Label>
          <Input className='mt-2 outline-[#a8b8eb]' value={projectName.name} onChange={(e) => setProjectName({projectName, nameValue: e.target.value})} />
        </TextField>
  
        <TextField>
          <Label className='text-[#a8b8eb]  font-bold'>Repo Description:</Label>
          <Input className='mt-2 outline-[#a8b8eb]' value={projectType.description}  onChange={(e) => setProjectType({projectType, DescriptionValue: e.target.value})}/>
        </TextField>
        <Button className='border-2 border-[#fff] hover:border-[#21264b] font-bold bg-green-500 text-white px-3 mt-[10px] py-2 rounded-md cursor-pointer' onPress={close} type='submit'>
          Submit
        </Button>
        <Button className='border-2 border-[#fff] hover:border-[#21264b] font-bold bg-blue-500 text-white float-end mt-[10px] px-3 py-2 rounded-md cursor-pointer' onPress={close}>
          Close Modal
        </Button>
        
      </form>
    )}
  </Dialog>}
        
</Modal>
</DialogTrigger>
    </div>
  )
}

export default UpdateRepo
