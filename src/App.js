import { useState } from "react";
import Confirm from "./components/Confirm";
import Dialog from "./components/Dialog";

function App() {
  const [dialogShow, setDialogShow] = useState(false)
  const [confirmShow, setConfirmShow] = useState(false)
  const [confirm, setConfirm] = useState(false)
  
  return (
    <div className="flex flex-col px-5 pt-10">
      <h1 className="text-xl font-bold">My Dialog Library</h1>
      <p className="mb-5">Use either the Dialog component or Confirm component for beautiful accessible modal dialog windows.</p>
      <button
        onClick={() => setDialogShow(!dialogShow)}
        className="py-2 px-5 my-2 bg-blue-500 text-white rounded-md"
      >
        Show dialog box
      </button>
      <button
        onClick={() => setConfirmShow(!dialogShow)}
        className="py-2 px-5 my-2 bg-blue-500 text-white rounded-md"
      >
        Show confirm box
      </button>
      <Dialog show={dialogShow} setShow={setDialogShow} heading="Everything is good" body="Howdy, partner. Yeeehaw!" />
      <Confirm show={confirmShow} setShow={setConfirmShow} setConfirm={setConfirm} heading="WARNING!!" body="Are you sure you wish to delete the Earth?" />

      <p>Confirm is {confirm.toString()}</p>
    </div>
  );
}

export default App;
