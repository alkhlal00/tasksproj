import React, { useState } from "react";

let initialList = [

];
const priority = {
  "Very important": 1,
  "Important": 2,
  "Not important": 3
};
const Tasks = () => {
  const [list, setList] = useState([...initialList.sort((a, b) => priority[a.Importance] - priority[b.Importance])]);
  const [showForm, setShowForm] = useState(false);
  const [errortask, seterrortask] = useState(false);
  const [errortime, seterrortime] = useState(false);
  const [errorim, seterrorim] = useState(false);



  const [form, setForm] = useState({ task: "",  Importance: "" ,time:""});

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addTask = () => {
    seterrortask(!form.task)
    seterrortime(!form.time)
    seterrorim(!form.Importance)

    if (!form.task  || !form.Importance ||form.time<"00:10" || form.time>"03:00") return;
    setList([
      ...list,
      {
        id: list.length + 1,
        task: form.task,
        time:form.time,
        Importance: form.Importance,
      },
    ].sort((a, b) => priority[a.Importance] - priority[b.Importance]));
    setForm({  task: "",  Importance: "" ,time:""});
    setShowForm(false);
  };
 function deleteOne(id){
  setList([...list.filter(el => el.id !== id)])
  }
  return (
    <div className="relative bg-gray-50 min-h-screen overflow-hidden py-12 px-4 sm:px-6 lg:px-8">

      {/* TOP BACKGROUND */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
        >
        <div
          className="relative left-1/2 w-[36.125rem] sm:w-[72.1875rem] -translate-x-1/2 rotate-[30deg] aspect-[1155/678] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <h1 className="text-center mb-5 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Add Your Tasks
      </h1>
      {list.length ? <p className="text-center mb-10">You have {list.length} of Tasks Today</p> : <p className="text-center mb-10">You don't have any Tasks Today</p>}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Add New Task
        </button>
      </div>

      {/* Table */}
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-200">
            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
              <tr>
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">Task</th>
                <th className="px-6 py-4">Time</th>
                <th className="px-6 py-4">Importance</th>
                <th className="px-6 py-4">Action</th>

              </tr>
            </thead>
            <tbody>
              {list.map((row,i) => (
                <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium">{i+1}</td>
                  <td className="px-6 py-4">{row.task}</td>
                  <td className="px-6 py-4">{row.time}</td>
                  <td className="px-6 py-4">{row.Importance}</td>
                  <td className="px-6 py-4 flex">
                      <button onClick={()=>deleteOne(row.id)} >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:scale-105" >
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
                      </button>
                      <button></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
         

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Add New Task</h2>
            <input
              name="task"
              value={form.task}
              onChange={handleInput}
              placeholder="Task"
              className={`w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-white ${errortask && "border-red-700"}`}
            />
                <div class="relative mb-4">

            <select name="Importance"    value={form.Importance}
              onChange={handleInput}  className={`w-full   p-2 border rounded dark:bg-gray-700 dark:text-white ${errorim && "border-red-700"}`} >
<option value="">Importance</option>
<option value="Very important">Very important</option>
<option value="Important">Important</option>
<option value="Not important">Not important</option>
            </select>
            </div>
    <div class="relative mb-4">
        {/* <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
            </svg>
        </div> */}
        <input type="time" id="time" name="time"  className={`bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errortime && "border-red-700"}`} min="00:20"
         max="03:00" placeholder="Handle" required value={form.time} onChange={handleInput}/>
        <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Time of Task should be between 00:30 and 03:00</p>

    </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Close
              </button>
              <button
                onClick={addTask}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM BACKGROUND */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 w-[36.125rem] sm:w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 aspect-[1155/678]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default Tasks;