import Form from '../components/form'

export default function Home() {
  return (

    <div>
       <Title title="Home" />
       <Searchparts/>
       <Form title="Form"/>
     
      </div>
  )
}

const Title = (props) => {
  return (
    <div className="bg-slate-700 text-center text-white my-0 mx-auto py-5">
      <h3 className="text-5xl uppercase">{props.title}</h3>
    </div>
  );
};

const Searchparts = () => {
  return (
    <div className="bg-gray-200 w-full p-8 py-8 my-5">
      <form className="w-full lg:flex justify-between gap-4 items-center">
        <label
          for="parts"
          className="font-extrabold text-center my-0 mx-auto lg:m-0 text-2xl"
        >
          Shop By Parts
        </label>

        <select className="p-2 w-full mt-2 lg:mt-0 text-xl lg:w-[150px] ">
          <option value="year">Select Year</option>
          <option>1999</option>
          <option>1998</option>
        </select>
        <select className="p-2 w-full mt-2 lg:mt-0 text-xl  lg:w-[150px] ">
          <option value="make">Select Make</option>
          <option>123</option>
        </select>
        <select className="p-2 w-full mt-2 lg:mt-0 text-xl lg:w-[150px]">
          <option value="model">Select Model</option>
          <option>175</option>
          <option>456</option>
        </select>
        <div className="flex justify-between mt-2 lg:mt-0 gap-1">
          <button className="bg-yellow-200 px-5 py-2 lg:w-[150px] w-1/2">
            FIND
          </button>
          <button className="bg-black text-white px-5 py-2lg:w-[150px] w-1/2 ">
            RESET
          </button>
        </div>
      </form>
    </div>
  );
};
